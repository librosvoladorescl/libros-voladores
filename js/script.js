document.addEventListener('DOMContentLoaded', function(){
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const cards = document.querySelector('.cards');
  let offset = 0;
  const step = 222;

  prev && prev.addEventListener('click', ()=> {
    offset = Math.max(0, offset - step);
    cards.style.transform = `translateX(-${offset}px)`;
  });
  next && next.addEventListener('click', ()=> {
    const max = Math.max(0, cards.scrollWidth - cards.clientWidth);
    offset = Math.min(max, offset + step);
    cards.style.transform = `translateX(-${offset}px)`;
  });
});
