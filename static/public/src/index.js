import HomeScreen from "./screens/home.js";
import ProductScreen from "./screens/products.js";
import Error404Screen from "./screens/error.js";
import { parseRequestUrl, renderCartItems, renderSubTotal } from "./utility.js";
import LoginScreen from "./screens/login.js";
import RegisterScreen from "./screens/register.js";

const routes = {
  "/": HomeScreen,
  "/products": ProductScreen,
  "/login": LoginScreen,
  "/register": RegisterScreen,
};

const router = () => {
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : "/") +
    (request.id ? "/:id" : "") +
    (request.verb ? `/${request.verb}` : "");

  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
  const main = document.getElementById("mainContainer");

  main.innerHTML = screen.render();
  screen.after_render();

  cartItemCount();
};

const cartItemCount = () => {
  let storedItems = JSON.parse(localStorage.getItem("cartItems"));
  if (storedItems !== null) {
    renderSubTotal();
    renderCartItems();
  } else {
    let cartItemCount = document.querySelector(".item-count");
    let mobileCartItemCount = document.querySelector(
      ".mobile-menu .item-count"
    );
    cartItemCount.innerHTML = "0 items";
    mobileCartItemCount.innerHTML = "0 items";
  }
};

window.addEventListener("load", router());
window.addEventListener("hashchange", router());
