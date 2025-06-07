// Script para gerenciar o espaçamento do footer e evitar colisões
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('.footer-reveal');
  
  if (footer) {
    // Observer para verificar quando o footer é revelado
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
          const isRevealed = footer.classList.contains('reveal');
          if (isRevealed) {
            document.body.classList.add('footer-visible');
          } else {
            document.body.classList.remove('footer-visible');
          }
        }
      });
    });
    
    observer.observe(footer, { attributes: true });
    
    // Verificar estado inicial
    if (footer.classList.contains('reveal')) {
      document.body.classList.add('footer-visible');
    }
  }
});

// Ajustar cartões para evitar colisões
document.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.card-hover-effect');
  const footer = document.querySelector('.footer-reveal');
  
  if (footer && footer.classList.contains('reveal')) {
    cards.forEach(function(card) {
      const cardRect = card.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      
      if (cardRect.bottom > footerRect.top) {
        card.style.transform = 'translateY(-' + (cardRect.bottom - footerRect.top + 20) + 'px)';
      } else {
        card.style.transform = '';
      }
    });
  }
}); 