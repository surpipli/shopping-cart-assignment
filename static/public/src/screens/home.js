import { closeCart, showCart } from "../utility";

const result = await axios.get("http://localhost:3000/categoriesdata");
const banners = await axios.get("http://localhost:3000/banners");

let filterResult = result.data.filter((category) => category.order >= 0);
let sortResult = filterResult.sort((a, b) => a.order - b.order);
const HomeScreen = {
  after_render: () => {
    sliderShow();
    document.querySelector(".btn-cart").addEventListener("click", () => {
      return showCart();
    });
    document.querySelector(".btn-close-cart").addEventListener("click", () => {
      return closeCart();
    });
    document
      .querySelector(".mobile-menu .btn-cart")
      .addEventListener("click", () => {
        return showCart();
      });
  },
  render: () => {
    const allcategories = sortResult;
    const allBanners = banners.data;
    return `
    <div class="container">
      <section class="home-page-banner">
        <ul class="banner-list">
          ${allBanners
            .map(
              (banner) => `
            <li class="banner-item"><img class="banner-img" src="${banner.bannerImageUrl}" alt="${banner.bannerImageAlt}" /></li>
          `
            )
            .join("")}
        </ul>
        <ul class="banner-nav-dots"></ul>
        <span class="prev-btn">PREV</span>
        <span class="next-btn">NEXT</span>
      </section>
      <section class="categories-section">
        ${allcategories
          .map(
            (category) => `
          <div class="category-row">
            <img
              class="category-img"
              src="${category.imageUrl}"
              alt="${category.name}"
            />
            <div class="category-description">
              <h2 class="category-title">${category.name}</h2>
              <p class="category-description-text">${category.description}</p>
              <a class="btn btn-category" href="/products">Explore ${category.key}</a>
            </div>
          </div>
        `
          )
          .join("")}
      </section>
    </div>
    `;
  },
};

export default HomeScreen;

function sliderShow() {
  let slideContainer = document.querySelector(".banner-list");
  let sliderImages = document.querySelectorAll(".banner-item");
  let slidewidth = sliderImages[0].clientWidth;
  let nextBtn = document.querySelector(".next-btn");
  let prevBtn = document.querySelector(".prev-btn");
  let currentSlide = 0;

  sliderImages.forEach((image, i) => {
    image.style.left = i * 100 + "%";
  });

  sliderImages[0].classList.add("active");

  createNavigationDots(sliderImages.length);

  nextBtn.addEventListener("click", () => {
    if (currentSlide >= sliderImages.length - 1) {
      goToSlide(slideContainer, slidewidth, 0, sliderImages);
      currentSlide = 0;
      return;
    }
    currentSlide++;
    goToSlide(slideContainer, slidewidth, currentSlide, sliderImages);
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
      goToSlide(
        slideContainer,
        slidewidth,
        sliderImages.length - 1,
        sliderImages
      );
      currentSlide = sliderImages.length - 1;
      return;
    }
    currentSlide--;
    goToSlide(slideContainer, slidewidth, currentSlide, sliderImages);
  });
}

function createNavigationDots(numberOfDots) {
  let bannerNavDots = document.querySelector(".banner-nav-dots");
  for (let i = 0; i < numberOfDots; i++) {
    let bannerNavDot = document.createElement("li");
    bannerNavDot.setAttribute("class", "banner-nav-dot");
    bannerNavDots.append(bannerNavDot);
  }
  bannerNavDots.children[0].classList.add("active");
}

function goToSlide(slideContainer, slidewidth, slideNumber, sliderImages) {
  slideContainer.style.transform = `translateX(-${slidewidth * slideNumber}px)`;
  setActive(sliderImages, slideNumber);
}

function setActive(sliderImages, currentItem) {
  // set active class for images
  let currentActiveItem = document.querySelector(".banner-item.active");
  currentActiveItem.classList.remove("active");
  sliderImages[currentItem].classList.add("active");

  // set active class for dots
  let navigationDots = document.querySelector(".banner-nav-dots");
  let currentActiveDot = document.querySelector(".banner-nav-dot.active");
  currentActiveDot.classList.remove("active");
  navigationDots.children[currentItem].classList.add("active");
}
