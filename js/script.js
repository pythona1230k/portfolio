//aタグのscroll animation
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
  smoothScrollTrigger[i].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[i].getAttribute('href');
    let targetElement = document.getElementById(href.replace('#', ''));
    const rect = targetElement.getBoundingClientRect().top;
    const offset = window.pageYOffset;
    const gap = 60;
    const target = rect + offset - gap;
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
}

//top scroll
const top_scroll = document.querySelector('.top_scroll');

window.addEventListener('scroll', () => {
  let scroll_y = window.scrollY;
  console.log(scroll_y);
  if (scroll_y > 700) {
    top_scroll.classList.add('active');
  } else {
    top_scroll.classList.remove('active');
  }
});

top_scroll.addEventListener("click", scroll_top);

function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}

// ball animation
const header = document.querySelector('header');
for (var i = 0; i <= 50; i++){
  const blocks = document.createElement('div');
  blocks.classList.add('block');
  header.appendChild(blocks);
}
function animateBlocks(){
  anime({
    targets: '.block',
    translateX: function(){
      return anime.random(-800, 700);
    },
    translateY: function(){
      return anime.random(-600, 700);
    },
    scale: function(){
      return anime.random(1, 3)
    },
    duration: 2500,
    delay: anime.stagger(12),
    complete: animateBlocks,
  })
}

animateBlocks();