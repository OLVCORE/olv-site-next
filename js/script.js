/**
 * =============================================================================
 * ARQUIVO: js/script.js (AJUSTADO para isolar ticker e blog, além de
 * adicionar o “hamburger menu” para mobile)
 * FINALIDADE:
 *  - Controle do tema claro/escuro via toggle switch
 *  - Persistência no localStorage
 *  - Destacar item de menu ativo
 *  - Busca de notícias em tempo real (apenas se existir id="ticker-inner")
 *  - Renderização dinâmica de cards no blog, com filtros, ordenação e paginação
 *  - População automática do ticker (apenas em blog.html, pois lá existe id="ticker-inner")
 *  - **CRIPTOGRAMAÇÃO DO “HAMBURGER MENU” para mobile**  
 * =============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // =====================================================
  // 1) TOGGLE DE TEMA (CLARO/ESC URO) + localStorage
  // =====================================================
  const themeCheckbox = document.getElementById('theme-checkbox');
  const body = document.body;

  // (1.1) Verifica preferência salva
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'theme-light') {
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    if (themeCheckbox) themeCheckbox.checked = true;
  } else {
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    if (themeCheckbox) themeCheckbox.checked = false;
  }

  // (1.2) Ao alternar o switch, troca classes e salva no storage
  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
      if (themeCheckbox.checked) {
        body.classList.remove('theme-dark');
        body.classList.add('theme-light');
        localStorage.setItem('theme', 'theme-light');
      } else {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        localStorage.setItem('theme', 'theme-dark');
      }
    });
  }

  // =====================================================
  // 2) HIGHLIGHT DO MENU ATIVO 
  // =====================================================
  const path = window.location.pathname;
  const page = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
  const navLink = document.querySelector(`.nav-item[data-page="${page}"]`);
  if (navLink) {
    navLink.classList.add('active');
  }

  // =====================================================
  // 3) POPULAÇÃO DO TICKER (APENAS SE EXISTIR id="ticker-inner")
  // =====================================================
  const tickerInner = document.getElementById('ticker-inner');
  if (tickerInner) {
    // Se tiver <div id="ticker-inner">, então esta é a página do blog
    fetchNews().then(() => {
      populateTicker();
    });
  }

  // =====================================================
  // 4) CONFIGURAÇÕES DO BLOG (EXISTIR #cards-container)
  // =====================================================
  const cardsContainer = document.getElementById('cards-container');
  if (cardsContainer) {
    // 4.1) Carrega notícias e renderiza
    fetchNews().then(() => {
      applyFiltersAndSort(); // renderiza cards e paginação
    });

    // 4.2) Agendar atualização a cada 1 hora (tanto cards quanto ticker)
    setInterval(async () => {
      await fetchNews();
      applyFiltersAndSort();
      populateTicker();
    }, 60 * 60 * 1000);

    // 4.3) Listeners para filtros (se existirem)
    const categorySelect = document.getElementById('category-filter');
    const sortSelect = document.getElementById('sort-filter');
    if (categorySelect) categorySelect.addEventListener('change', applyFiltersAndSort);
    if (sortSelect)   sortSelect.addEventListener('change', applyFiltersAndSort);
  }

  // =====================================================
  // 5) CONFIGURAÇÃO DO “HAMBURGER MENU” PARA MOBILE
  // =====================================================
  // 5.1) Criar dinamicamente o botão de menu e injetar no header
  const headerInner = document.querySelector('.header-inner');
  if (headerInner) {
    const menuBtn = document.createElement('div');
    menuBtn.classList.add('mobile-menu-button');
    menuBtn.innerHTML = `<img src="icons/menu.svg" alt="Menu">`;
    headerInner.appendChild(menuBtn);

    // 5.2) Ao clicar, alterna a classe 'mobile-menu-open' no body
    menuBtn.addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    });
  }

  // =====================================================
  // 6) SCRIPT PARA FAQ – ABRIR E FECHAR CORRETAMENTE
  // =====================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const toggle   = item.querySelector('.faq-toggle');
    const answer   = item.querySelector('.faq-answer');

    // Inicia sempre fechado
    answer.style.maxHeight = null;
    toggle.textContent = "+";

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Fecha todos os outros
      faqItems.forEach(other => {
        if (other !== item && other.classList.contains('active')) {
          other.classList.remove('active');
          other.querySelector('.faq-answer').style.maxHeight = null;
          other.querySelector('.faq-toggle').textContent = "+";
        }
      });

      if (!isOpen) {
        // Abre este item
        item.classList.add('active');
        toggle.textContent = "−";
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        // Fecha este item
        item.classList.remove('active');
        toggle.textContent = "+";
        answer.style.maxHeight = null;
      }
    });
  });

  // =====================================================
  // 7) VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
  // =====================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Aqui, integrar a lógica real de envio (AJAX, backend, etc.)
      alert('Mensagem enviada com sucesso! Em breve, um de nossos especialistas entrará em contato.');
      contactForm.reset();
    });
  }

  // =====================================================
  // 8) FOOTER REVEAL
  // =====================================================
  const footer = document.querySelector('footer');
  function checkFooterReveal() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= pageHeight - 50) {
      footer.classList.add('reveal');
    } else {
      footer.classList.remove('reveal');
    }
  }
  window.addEventListener('scroll', checkFooterReveal);
  checkFooterReveal();
}); // fim do DOMContentLoaded

// =====================================================
// 9) BUSCA DE NOTÍCIAS (API ou fallback)
// =====================================================
let allNews = [];       // Array completo de notícias
let filteredNews = [];  // Array após aplicação de filtro/ordenação
let currentPage = 1;
const ITEMS_PER_PAGE = 8;

/**
 * fetchNews:
 *  - Chama a API unificada (https://minha-api.com.br/noticias/ultimas)
 *  - Recebe um array JSON já filtrado (últimas 6h) e ordenado (do mais recente ao mais antigo)
 *  - Preenche allNews e filteredNews
 *  - Retorna uma Promise que permite aguardar completar
 */
async function fetchNews() {
  try {
    const response = await fetch('https://minha-api.com.br/noticias/ultimas');
    if (!response.ok) throw new Error('Erro ao buscar notícias: ' + response.status);

    const newsArray = await response.json();
    // newsArray => [ { title, summary1, summary2, url, image, date, rawDate, category }, ... ]

    // Armazena tudo e inicializa filteredNews (sem filtro de categoria por ora)
    allNews = Array.isArray(newsArray) ? newsArray : [];
    filteredNews = [...allNews];
    return Promise.resolve();
  } catch (err) {
    console.error(err);
    // Se der erro, define fallback vazio
    allNews = [];
    filteredNews = [];
    return Promise.resolve();
  }
}

// =====================================================
// 10) POPULAÇÃO DO TICKER (APENAS EM BLOG.CARDs)
// =====================================================
/**
 * populateTicker:
 *  - Percorre allNews (já carregadas)
 *  - Para cada item, cria um <span><a href="blog.html#noticia-X">Título da Manchete</a> – </span>
 *  - Insere tudo dentro de tickerInner (<div id="ticker-inner">)
 */
function populateTicker() {
  const tickerInner = document.getElementById('ticker-inner');
  if (!tickerInner) return; // se não existir, não faz nada

  // Limpa conteúdo existente
  tickerInner.innerHTML = '';

  // Se não houver notícias, exibe texto padrão
  if (allNews.length === 0) {
    tickerInner.innerHTML = `
      <p style="color: var(--txt); padding: 1rem; text-align:center;">
        Nenhuma manchete disponível no momento.
      </p>
    `;
    return;
  }

  // Monta um <p> contendo todas as manchetes
  const p = document.createElement('p');
  p.style.whiteSpace = 'nowrap';
  p.style.display = 'inline-block';

  allNews.forEach((item, index) => {
    // ID do card correspondente: "noticia-{index+1}"
    const noticiaId = `noticia-${index + 1}`;

    // Cria <span><a>…</a> – </span>
    const span = document.createElement('span');
    span.style.display = 'inline-block';
    span.style.marginRight = '3rem';

    const a = document.createElement('a');
    a.href = `blog.html#${noticiaId}`;
    a.textContent = item.title;
    a.style.color = 'var(--accent)';
    a.style.textDecoration = 'none';
    // Não abre em nova aba: para manter usuário navegando no blog primeiro
    a.target = '';
    a.rel = '';

    span.appendChild(a);

    // Se não for o último, adiciona “ – ”
    if (index < allNews.length - 1) {
      span.appendChild(document.createTextNode(' – '));
    }

    p.appendChild(span);
  });

  tickerInner.appendChild(p);
}

// =====================================================
// 11) RENDERIZAÇÃO DE CARDS NO BLOG (paginação + filtros)
// =====================================================
function renderNewsCards() {
  const container = document.getElementById('cards-container');
  if (!container) return;

  // Já temos o grid dentro de #blog-cards .cards-grid diretamente no HTML
  const cardsGrid = container.querySelector('.cards-grid');
  if (!cardsGrid) return;

  // Calcula página atual
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const pageItems = filteredNews.slice(startIndex, endIndex);

  // Limpa anterior
  cardsGrid.innerHTML = '';

  if (pageItems.length === 0) {
    cardsGrid.innerHTML = `
      <div style="padding:2rem; text-align:center; color: var(--txt);">
        Nenhuma notícia encontrada para os critérios selecionados.
      </div>
    `;
    return;
  }

  pageItems.forEach((item) => {
    // ID correspondente: se o item está na posição global i, seu ID foi "noticia-(i+1)"
    const globalIndex = allNews.findIndex(n => n.rawDate === item.rawDate && n.title === item.title);
    const noticiaId = `noticia-${globalIndex + 1}`;

    const article = document.createElement('article');
    article.className = 'card';
    article.id = noticiaId;
    article.setAttribute('data-category', item.category);

    article.innerHTML = `
      <div class="card-img">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <small><strong>Categoria:</strong> ${formatCategoryLabel(item.category)}</small>
        <p>${item.summary1}</p>
        <p>${item.summary2}</p>
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="card-link">
          🔗 Leia a matéria completa
        </a>
        <small><img src="icons/calendar.svg" alt="Data" /> ${item.date}</small>
      </div>
    `;

    cardsGrid.appendChild(article);
  });
}

/**
 * renderPaginationControls:
 *  - Cria botões “Anterior” e “Próxima” + informação “Página X de Y”
 *  - Insere em fim de #blog-cards (abaixo do .cards-grid)
 */
function renderPaginationControls() {
  const container = document.getElementById('blog-cards');
  if (!container) return;

  // Remove controles anteriores (se existirem)
  const existing = container.querySelector('.pagination-container');
  if (existing) existing.remove();

  const totalItems = filteredNews.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  if (totalPages <= 1) return;

  const paginationDiv = document.createElement('div');
  paginationDiv.className = 'pagination-container';

  const prevBtn = document.createElement('button');
  prevBtn.textContent = '« Anterior';
  prevBtn.disabled = (currentPage === 1);
  prevBtn.classList.add('cta-button');
  prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderNewsCards();
      renderPaginationControls();
      scrollToTopOfCards();
    }
  });

  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Próxima »';
  nextBtn.disabled = (currentPage === totalPages);
  nextBtn.classList.add('cta-button');
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderNewsCards();
      renderPaginationControls();
      scrollToTopOfCards();
    }
  });

  const pageInfo = document.createElement('span');
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  pageInfo.style.color = 'var(--txt)';
  pageInfo.style.alignSelf = 'center';

  paginationDiv.appendChild(prevBtn);
  paginationDiv.appendChild(pageInfo);
  paginationDiv.appendChild(nextBtn);
  container.appendChild(paginationDiv);
}

/**
 * applyFiltersAndSort:
 *  - Lê #category-filter e #sort-filter
 *  - Atualiza filteredNews
 *  - Reseta currentPage=1 e renderiza novamente
 */
function applyFiltersAndSort() {
  const categorySelect = document.getElementById('category-filter');
  const sortSelect = document.getElementById('sort-filter');
  if (!categorySelect || !sortSelect) return;

  const selCat = categorySelect.value; // ex.: "comercio-exterior" ou ""
  const sortBy = sortSelect.value;     // ex.: "date-desc", "date-asc", "category"

  let temp = [...allNews];
  if (selCat) {
    temp = temp.filter(item => item.category === selCat);
  }

  if (sortBy === 'date-desc') {
    temp.sort((a, b) => new Date(b.rawDate) - new Date(a.rawDate));
  } else if (sortBy === 'date-asc') {
    temp.sort((a, b) => new Date(a.rawDate) - new Date(b.rawDate));
  } else if (sortBy === 'category') {
    temp.sort((a, b) => a.category.localeCompare(b.category));
  }

  filteredNews = temp;
  currentPage = 1;
  renderNewsCards();
  renderPaginationControls();
}

/**
 * formatCategoryLabel: converte "internacionalizacao" → "Internacionalização & PME"
 */
function formatCategoryLabel(cat) {
  switch (cat) {
    case 'comercio-exterior': return 'Comércio Exterior';
    case 'supply-chain':      return 'Supply Chain & Logística';
    case 'licitacoes':        return 'Licitações & Compras Públicas';
    case 'internacionalizacao': return 'Internacionalização & PME';
    case 'cambio':            return 'Câmbio & Cenário Econômico';
    case 'agronegocio':       return 'Agronegócio & Exportação';
    case 'tecnologia':        return 'Tecnologia, IA & Inovação';
    case 'compliance':        return 'Compliance & Planejamento Tributário';
    default:                  return cat;
  }
}

/**
 * scrollToTopOfCards: rola suavemente até o topo da seção de cards
 */
function scrollToTopOfCards() {
  const container = document.getElementById('blog-cards');
  if (!container) return;
  container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
