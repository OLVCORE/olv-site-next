// Script simplificado para gerenciar o footer sem animações
document.addEventListener('DOMContentLoaded', function() {
  const footer = document.querySelector('.footer-reveal');
  
  if (footer) {
    // Sempre mostra o footer sem animações
    document.body.classList.add('footer-visible');
    footer.classList.add('reveal');
  }
  
  // Remover efeitos de hover em cartões para melhorar performance
  const cards = document.querySelectorAll('.card-hover-effect');
  cards.forEach(function(card) {
    card.classList.remove('card-hover-effect');
  });
}); 