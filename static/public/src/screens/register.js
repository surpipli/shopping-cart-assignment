import { addNewUser, closeCart, showCart } from "../utility";

const RegisterScreen = {
  after_render: () => {
    document.querySelector(".btn-cart").addEventListener("click", () => {
      return showCart();
    });
    document.querySelector(".btn-close-cart").addEventListener("click", () => {
      return closeCart();
    });
    document
      .querySelector("#registrationForm")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        if (e.target && e.target.nodeName === "FORM") {
          addNewUser();
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
        <div class="registration-form-container">
          <div class="registration-form-text">
            <h2 class="registration-form-title">Sign Up</h2>
            <p>We do not share your personal details with anyone.</p>
          </div>
          <form
            class="registration-form"
            id="registrationForm"
          >
            <div class="form-group floating-label-group">
              <input
                type="text"
                class="form-control"
                id="fname"
                required
                placeholder=" "
              />
              <label class="floating-label" for="fname">First Name</label>
            </div>
            <div class="form-group floating-label-group">
              <input
                type="text"
                class="form-control"
                id="lname"
                required
                placeholder=" "
              />
              <label class="floating-label" for="lname">Last Name</label>
            </div>
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
            <div class="form-group floating-label-group">
              <input
                type="password"
                class="form-control"
                id="cpassword"
                required
                placeholder=" "
              />
              <label class="floating-label" for="cpassword"
                >Confirm Password</label
              >
            </div>
            <button type="submit" id="btnAddNewUser" class="btn btn-sign-up">
              Signup
            </button>
          </form>
        </div>
      </div>
    `;
  },
};

export default RegisterScreen;
