import { closeCart, loginUser, showCart } from "../utility";

const LoginScreen = {
  after_render: () => {
    document.querySelector(".btn-cart").addEventListener("click", () => {
      return showCart();
    });
    document.querySelector(".btn-close-cart").addEventListener("click", () => {
      return closeCart();
    });
    document.querySelector("#loginForm").addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target && e.target.nodeName === "FORM") {
        loginUser();
      }
    });
    document
      .querySelector(".mobile-menu .btn-cart")
      .addEventListener("click", () => {
        return showCart();
      });
  },
  render: () => {
    return `
        <div class="container">
        <div class="login-form-container">
          <div class="login-form-text">
            <h2 class="login-form-title">Login</h2>
            <p>Get access to your Orders. Wishlist and Recommendations</p>
          </div>
          <form class="login-form" id="loginForm">
            <div class="form-group floating-label-group">
              <input
                type="email"
                class="form-control"
                id="email"
                required
                placeholder=" "
              />
              <label class="floating-label" for="email">Email</label>
            </div>
            <div class="form-group floating-label-group">
              <input
                type="password"
                class="form-control"
                id="password"
                required
                placeholder=" "
              />
              <label class="floating-label" for="password">Password</label>
            </div>
            <button type="submit" id="btnAddNewUser" class="btn btn-login">
              Login
            </button>
          </form>
        </div>
      </div>
    `;
  },
};

export default LoginScreen;
