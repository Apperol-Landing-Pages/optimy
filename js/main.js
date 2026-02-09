const openBtn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

openBtn.addEventListener('click', () => {
  menu.classList.add('active');
  overlay.classList.add('active');
});

function closeMenu() {
  menu.classList.remove('active');
  overlay.classList.remove('active');
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeMenu();
  }
});


let phoneSlider;

function initSlider() {
  if (window.innerWidth < 768) {

    if (!phoneSlider) {
      phoneSlider = new Swiper('.phone-slider', {
        centeredSlides: true,
        slidesPerView: 1.0,
        spaceBetween: 24,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    }

  } else {

    if (phoneSlider) {
      phoneSlider.destroy(true, true);
      phoneSlider = undefined;
    }

  }
}

initSlider();
window.addEventListener('resize', initSlider);

$(".Quest-el-head").on("click", function () {
  const currentItem = $(this).parent();

  if (currentItem.hasClass("active")) {
    currentItem.removeClass("active");
    currentItem.find(".Quest-el-body").slideUp();
    return;
  }

  $(".Quest-el").removeClass("active");
  $(".Quest-el-body").slideUp();

  currentItem.addClass("active");
  currentItem.find(".Quest-el-body").slideDown();
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      form.reset(); 
      alert("Message sent successfully!");
    }
  });
});
