const products = await axios.get("http://localhost:3000/productsdata");

export const parseRequestUrl = () => {
  const url = document.location.pathname.toLowerCase();
  const request = url.split("/");
  return {
    resource: request[1],
    id: request[2],
    action: request[3],
  };
};

let storedItems = JSON.parse(localStorage.getItem("cartItems"));
let cartItems = storedItems !== null ? storedItems : [];
// show cart on click of cart btn
export const showCart = () => {
  let bodyEl = document.querySelector("body");
  let overlayEl = document.createElement("div");

  let viewPortWidth = window.innerWidth;

  if (viewPortWidth > 1024) {
    overlayEl.setAttribute("class", "overlay");
    bodyEl.appendChild(overlayEl);
  }

  if (viewPortWidth < 1024) {
    bodyEl.style.overflowY = "hidden";
  }

  let cartHeaderTitleEl = document.querySelector(".cart-header-title");
  let cartItemsEl = document.querySelector(".cart-items-row");
  let cartFooterEl = document.querySelector(".cart-footer");
  if (cartItems.length === 0) {
    cartHeaderTitleEl.innerHTML = `My Cart`;
    cartItemsEl.innerHTML = `<div class="no-items">
    <h4>No items in your cart</h4>
    <p>Your favourite items are just a click away</p>
  </div>`;
    cartFooterEl.innerHTML = `<a class="btn btn-start-shopping" href="/products">Start Shopping</a>`;
  }

  alignCartPosition();

  document.querySelector(".cart-items-row").addEventListener("click", (e) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    if (e.target && e.target.nodeName === "BUTTON") {
      changeItemQuantity(e.target.className, e.target.id);
    }
  });
};

// calculates popup height and position from the right
function alignCartPosition() {
  let addToCartContainerEl = document.querySelector(".add-to-cart");
  let headerEl = document.querySelector("header");
  let mainContainerEl = document.querySelector("#mainContainer .container");
  let cartItemsRow = document.querySelector(".add-to-cart .cart-items-row");
  let cartFooter = document.querySelector(".add-to-cart .cart-footer");
  let containerMargin =
    mainContainerEl.currentStyle || window.getComputedStyle(mainContainerEl);

  let cartFooterHeight = cartFooter.clientHeight;
  let headerHeight = headerEl.clientHeight;
  let viewPortWidth = window.innerWidth;
  let viewPortHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  if (viewPortWidth > 1024) {
    addToCartContainerEl.style.right = containerMargin.marginLeft;
  }
  addToCartContainerEl.style.height = viewPortHeight - headerHeight + "px";
  addToCartContainerEl.style.display = "block";
  cartItemsRow.style.marginBottom = cartFooterHeight + 15 + "px";
}

// close cart on click of X button
export const closeCart = () => {
  let bodyEl = document.querySelector("body");
  let overlayEl = document.querySelector(".overlay");
  let viewPortWidth = window.innerWidth;
  if (viewPortWidth > 1024) {
    bodyEl.removeChild(overlayEl);
  }

  if (viewPortWidth < 1024) {
    bodyEl.style.overflowY = "auto";
  }

  let addToCartContainerEl = document.querySelector(".add-to-cart");
  addToCartContainerEl.style.display = "none";
};

// add selected item to the cart
export const addToCart = (productId) => {
  let product = products.data.find((item) => item.id === productId);
  if (cartItems.some((item) => item.id === productId)) {
    changeItemQuantity("plus", productId);
  } else {
    cartItems.push({ ...product, quantity: 1 });
    updateCart();
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// update cart items, quantity and total price
function updateCart() {
  renderCartItems();
  renderSubTotal();
}

// calculate total items ans total price
export const renderSubTotal = () => {
  let totalItems = 0;
  let totalAmount = 0;
  cartItems.forEach((item) => {
    totalItems += item.quantity;
    totalAmount += item.price * item.quantity;
  });

  let viewPortWidth = window.innerWidth;

  if (viewPortWidth < 1024) {
    let cartItemCountEl = document.querySelector(".mobile-menu .item-count");
    cartItemCountEl.innerHTML = `${totalItems} items`;
  }

  let cartItemCountEl = document.querySelector(".item-count");
  cartItemCountEl.innerHTML = `${totalItems} items`;

  let cartHeaderTitleEl = document.querySelector(".cart-header-title");
  cartHeaderTitleEl.innerHTML = `My Cart <span>(${totalItems} item)</span>`;

  let cartFooterEl = document.querySelector(".cart-footer");
  cartFooterEl.innerHTML = `
  <p class="promo-text">Promo code can be applied on payment page</p>
    <a href="/login" class="btn-items-checkout">
      <p>Proceed to checkout</p>
      <p>Rs.${totalAmount} &rangle;</p>
    </a>
  `;
};

// render cart items in the cart
export const renderCartItems = () => {
  let cartItemRowEL = document.querySelector(".cart-items-row");
  cartItemRowEL.innerHTML = ""; // clear cart row
  cartItems.forEach((item) => {
    cartItemRowEL.innerHTML += `
    <div class="cart-item">
      <img
          class="cart-item-img"
          src="${item.imageURL}"
          alt="${item.name}"
        />
        <div class="cart-item-details">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="add-or-remove-cart-item">
            <button class="minus" id="${item.id}">-</button
            ><span class="cart-item-quantity">${item.quantity}</span
            ><button class="plus" id="${item.id}">+</button
            ><span>X</span>
            <span class="item-actual-price">Rs.${item.price}</span>
          </div>
        </div>
        <div class="cart-final-price">Rs. <span>${
          item.quantity * item.price
        }</span></div>
    </div>
    `;
  });

  cartItemRowEL.innerHTML += `
    <div class="lowest-price-row">
      <div class="lowest-price-content">
        <img class="lowest-price-img" src="./public/images/lowest-price.png" alt="lowest price image" />
        <p>You won't find it cheaper anywhere</p>
      </div>
    </div>
  `;
};

// change item quantity
export const changeItemQuantity = (action, id) => {
  cartItems = cartItems.map((item) => {
    let quantity = item.quantity;
    if (item.id === id) {
      if (action === "minus" && quantity > 1) {
        quantity--;
      } else if (action === "plus" && quantity < item.stock) {
        quantity++;
      }
    }

    return { ...item, quantity };
  });
  updateCart();
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

// -------------- register user functionality -----------------

function getInputData(formName) {
  let allInputsData = document.querySelectorAll(`${formName} input`);
  let newUserData = Array.from(allInputsData).reduce(
    (newUser, input) => ({
      ...newUser,
      [input.id]: input.value,
    }),
    {}
  );
  return newUserData;
}

export const addNewUser = () => {
  let newUser = getInputData(".registration-form");
  if (newUser.password !== newUser.cpassword) {
    alert("password and confirm password does not match");
  } else {
    fetch("http://localhost:3000/newuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((message) => {
        if (message.msg == "success") {
          alert("user added successfully!");
          window.location.reload();
        } else {
          alert(message.msg);
          window.location.reload();
        }
      });
  }
};

// ------------- login form functionality ---------------

export const loginUser = () => {
  let validateUser = getInputData(".login-form");
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((res) => {
      let userExists = res.some((user) => user.email === validateUser.email);

      let validUserNamePassword = res.some(
        (user) =>
          user.email === validateUser.email &&
          user.password === validateUser.password
      );

      let invalidUserNamePassword = res.some(
        (user) =>
          user.email === validateUser.email &&
          user.password !== validateUser.password
      );

      if (userExists) {
        if (validUserNamePassword) {
          window.location.href = "/";
        } else if (invalidUserNamePassword) {
          alert("invalid username and password");
          window.location.reload();
        }
      } else {
        alert("user does not exist");
        window.location.reload();
      }
    });
};
