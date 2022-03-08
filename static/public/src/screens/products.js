import { addToCart, closeCart, showCart } from "../utility";

const categories = await axios.get("http://localhost:3000/categoriesdata");
const products = await axios.get("http://localhost:3000/productsdata");

const ProductScreen = {
  after_render: () => {
    document
      .querySelector(".product-categories-list")
      .addEventListener("click", (e) => {
        if (e.target && e.target.nodeName === "BUTTON") {
          filterProducts(e.target.id);
        }
      });

    document
      .querySelector(".product-categories-dropdown-list")
      .addEventListener("change", (e) => {
        filterProducts(e.target.value);
      });

    document
      .querySelector(".products-section")
      .addEventListener("click", (e) => {
        if (e.target && e.target.nodeName === "BUTTON") {
          addToCart(e.target.id);
        }
      });

    document.querySelector(".btn-cart").addEventListener("click", () => {
      return showCart();
    });
    document
      .querySelector(".mobile-menu .btn-cart")
      .addEventListener("click", () => {
        return showCart();
      });
    document.querySelector(".btn-close-cart").addEventListener("click", () => {
      return closeCart();
    });
  },
  render: () => {
    if (
      !categories ||
      categories.statusText !== "OK" ||
      !products ||
      products.statusText !== "OK"
    ) {
      return `<div>Something went wrong</div>`;
    }

    let filterResult = categories.data.filter(
      (category) => category.order >= 0
    );
    let sortResult = filterResult.sort((a, b) => a.order - b.order);
    const allcategories = sortResult;
    const allProducts = products.data;
    return `
      <div class="products-container">
        <div class="container">
          <aside class="product-categories">
          <ul class="product-categories-list">
            ${allcategories
              .map(
                (category) => `
                <li>
                  <button class="product-category-list-link" id="${category.id}">
                    ${category.name}
                  </button>
                </li>
              `
              )
              .join("")}
          </ul>
          <select class="product-categories-dropdown-list">
            <option class="product-category-list" value="">All product category</option>
            ${allcategories
              .map(
                (category) => `
                  <option class="product-category-list" value="${category.id}">
                    ${category.name}
                  </option>
                `
              )
              .join("")}
          </select>
          </aside>
          <section class="products-section">
              ${allProducts
                .map(
                  (product) => `
              <div class="product-card ${product.category}">
                <h2 class="product-title">${product.name}</h2>
                <img
                  class="product-img"
                  src="${product.imageURL}"
                  alt="${product.name}"
                />
                <p class="product-description">${product.description}</p>
                <div class="product-price-container">
                  <p class="product-price">MRP Rs.${product.price}</p>
                  <button class="btn btn-buy-now" id="${product.id}">Buy Now</button>
                </div>
                <button class="btn btn-buy-now-mobile" id="${product.id}">Buy Now @${product.price}</button>
              </div>
              `
                )
                .join("")}
          </section>
        </div>
      </div>
    `;
  },
};

export default ProductScreen;

function filterProducts(theCategoryId) {
  let filteredItems = [];
  if (theCategoryId) {
    filteredItems = products.data.filter(
      (item) => item.category === theCategoryId
    );
  } else {
    filteredItems = products.data;
  }

  let productContainerEl = document.querySelector(".products-section");
  productContainerEl.innerHTML = "";
  filteredItems.forEach((item) => generateProducts(item));
}

function generateProducts(product) {
  let productContainerEl = document.querySelector(".products-section");

  productContainerEl.innerHTML += `
    <div class="product-card ${product.category}">
      <h2 class="product-title">${product.name}</h2>
      <img
        class="product-img"
        src="${product.imageURL}"
        alt="${product.name}"
      />
      <p class="product-description">${product.description}</p>
      <div class="product-price-container">
        <p class="product-price">MRP Rs.${product.price}</p>
        <button class="btn btn-buy-now" id="${product.id}">Buy Now</button>
      </div>
      <button class="btn btn-buy-now-mobile" id="${product.id}">Buy Now @${product.price}</button>
    </div>
  `;
}
