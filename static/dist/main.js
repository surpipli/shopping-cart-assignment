/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/home.js */ \"./public/src/screens/home.js\");\n/* harmony import */ var _screens_products_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/products.js */ \"./public/src/screens/products.js\");\n/* harmony import */ var _screens_error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/error.js */ \"./public/src/screens/error.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility.js */ \"./public/src/utility.js\");\n/* harmony import */ var _screens_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/login.js */ \"./public/src/screens/login.js\");\n/* harmony import */ var _screens_register_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/register.js */ \"./public/src/screens/register.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_screens_home_js__WEBPACK_IMPORTED_MODULE_0__, _screens_products_js__WEBPACK_IMPORTED_MODULE_1__, _utility_js__WEBPACK_IMPORTED_MODULE_3__, _screens_login_js__WEBPACK_IMPORTED_MODULE_4__, _screens_register_js__WEBPACK_IMPORTED_MODULE_5__]);\n([_screens_home_js__WEBPACK_IMPORTED_MODULE_0__, _screens_products_js__WEBPACK_IMPORTED_MODULE_1__, _utility_js__WEBPACK_IMPORTED_MODULE_3__, _screens_login_js__WEBPACK_IMPORTED_MODULE_4__, _screens_register_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nvar routes = {\n  \"/\": _screens_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  \"/products\": _screens_products_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  \"/login\": _screens_login_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  \"/register\": _screens_register_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n\nvar router = function router() {\n  var request = (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.parseRequestUrl)();\n  var parseUrl = (request.resource ? \"/\".concat(request.resource) : \"/\") + (request.id ? \"/:id\" : \"\") + (request.verb ? \"/\".concat(request.verb) : \"\");\n  var screen = routes[parseUrl] ? routes[parseUrl] : _screens_error_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  var main = document.getElementById(\"mainContainer\");\n  main.innerHTML = screen.render();\n  screen.after_render();\n  cartItemCount();\n};\n\nvar cartItemCount = function cartItemCount() {\n  var storedItems = JSON.parse(localStorage.getItem(\"cartItems\"));\n\n  if (storedItems !== null) {\n    (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.renderSubTotal)();\n    (0,_utility_js__WEBPACK_IMPORTED_MODULE_3__.renderCartItems)();\n  } else {\n    var _cartItemCount = document.querySelector(\".item-count\");\n\n    var mobileCartItemCount = document.querySelector(\".mobile-menu .item-count\");\n    _cartItemCount.innerHTML = \"0 items\";\n    mobileCartItemCount.innerHTML = \"0 items\";\n  }\n};\n\nwindow.addEventListener(\"load\", router());\nwindow.addEventListener(\"hashchange\", router());\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://static/./public/src/index.js?");

/***/ }),

/***/ "./public/src/screens/error.js":
/*!*************************************!*\
  !*** ./public/src/screens/error.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Error404Screen = {\n  render: function render() {\n    return \"<h2>Page not found</h2>\";\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404Screen);\n\n//# sourceURL=webpack://static/./public/src/screens/error.js?");

/***/ }),

/***/ "./public/src/screens/home.js":
/*!************************************!*\
  !*** ./public/src/screens/home.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./public/src/utility.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utility__WEBPACK_IMPORTED_MODULE_0__]);\n_utility__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar result = await axios.get(\"http://localhost:3000/categoriesdata\");\nvar banners = await axios.get(\"http://localhost:3000/banners\");\nvar filterResult = result.data.filter(function (category) {\n  return category.order >= 0;\n});\nvar sortResult = filterResult.sort(function (a, b) {\n  return a.order - b.order;\n});\nvar HomeScreen = {\n  after_render: function after_render() {\n    sliderShow();\n    document.querySelector(\".btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n    document.querySelector(\".btn-close-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.closeCart)();\n    });\n    document.querySelector(\".mobile-menu .btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n  },\n  render: function render() {\n    var allcategories = sortResult;\n    var allBanners = banners.data;\n    return \"\\n    <div class=\\\"container\\\">\\n      <section class=\\\"home-page-banner\\\">\\n        <ul class=\\\"banner-list\\\">\\n          \".concat(allBanners.map(function (banner) {\n      return \"\\n            <li class=\\\"banner-item\\\"><img class=\\\"banner-img\\\" src=\\\"\".concat(banner.bannerImageUrl, \"\\\" alt=\\\"\").concat(banner.bannerImageAlt, \"\\\" /></li>\\n          \");\n    }).join(\"\"), \"\\n        </ul>\\n        <ul class=\\\"banner-nav-dots\\\"></ul>\\n        <span class=\\\"prev-btn\\\">PREV</span>\\n        <span class=\\\"next-btn\\\">NEXT</span>\\n      </section>\\n      <section class=\\\"categories-section\\\">\\n        \").concat(allcategories.map(function (category) {\n      return \"\\n          <div class=\\\"category-row\\\">\\n            <img\\n              class=\\\"category-img\\\"\\n              src=\\\"\".concat(category.imageUrl, \"\\\"\\n              alt=\\\"\").concat(category.name, \"\\\"\\n            />\\n            <div class=\\\"category-description\\\">\\n              <h2 class=\\\"category-title\\\">\").concat(category.name, \"</h2>\\n              <p class=\\\"category-description-text\\\">\").concat(category.description, \"</p>\\n              <a class=\\\"btn btn-category\\\" href=\\\"/products\\\">Explore \").concat(category.key, \"</a>\\n            </div>\\n          </div>\\n        \");\n    }).join(\"\"), \"\\n      </section>\\n    </div>\\n    \");\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\nfunction sliderShow() {\n  var slideContainer = document.querySelector(\".banner-list\");\n  var sliderImages = document.querySelectorAll(\".banner-item\");\n  var slidewidth = sliderImages[0].clientWidth;\n  var nextBtn = document.querySelector(\".next-btn\");\n  var prevBtn = document.querySelector(\".prev-btn\");\n  var currentSlide = 0;\n  sliderImages.forEach(function (image, i) {\n    image.style.left = i * 100 + \"%\";\n  });\n  sliderImages[0].classList.add(\"active\");\n  createNavigationDots(sliderImages.length);\n  nextBtn.addEventListener(\"click\", function () {\n    if (currentSlide >= sliderImages.length - 1) {\n      goToSlide(slideContainer, slidewidth, 0, sliderImages);\n      currentSlide = 0;\n      return;\n    }\n\n    currentSlide++;\n    goToSlide(slideContainer, slidewidth, currentSlide, sliderImages);\n  });\n  prevBtn.addEventListener(\"click\", function () {\n    if (currentSlide <= 0) {\n      goToSlide(slideContainer, slidewidth, sliderImages.length - 1, sliderImages);\n      currentSlide = sliderImages.length - 1;\n      return;\n    }\n\n    currentSlide--;\n    goToSlide(slideContainer, slidewidth, currentSlide, sliderImages);\n  });\n}\n\nfunction createNavigationDots(numberOfDots) {\n  var bannerNavDots = document.querySelector(\".banner-nav-dots\");\n\n  for (var i = 0; i < numberOfDots; i++) {\n    var bannerNavDot = document.createElement(\"li\");\n    bannerNavDot.setAttribute(\"class\", \"banner-nav-dot\");\n    bannerNavDots.append(bannerNavDot);\n  }\n\n  bannerNavDots.children[0].classList.add(\"active\");\n}\n\nfunction goToSlide(slideContainer, slidewidth, slideNumber, sliderImages) {\n  slideContainer.style.transform = \"translateX(-\".concat(slidewidth * slideNumber, \"px)\");\n  setActive(sliderImages, slideNumber);\n}\n\nfunction setActive(sliderImages, currentItem) {\n  // set active class for images\n  var currentActiveItem = document.querySelector(\".banner-item.active\");\n  currentActiveItem.classList.remove(\"active\");\n  sliderImages[currentItem].classList.add(\"active\"); // set active class for dots\n\n  var navigationDots = document.querySelector(\".banner-nav-dots\");\n  var currentActiveDot = document.querySelector(\".banner-nav-dot.active\");\n  currentActiveDot.classList.remove(\"active\");\n  navigationDots.children[currentItem].classList.add(\"active\");\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://static/./public/src/screens/home.js?");

/***/ }),

/***/ "./public/src/screens/login.js":
/*!*************************************!*\
  !*** ./public/src/screens/login.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./public/src/utility.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utility__WEBPACK_IMPORTED_MODULE_0__]);\n_utility__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar LoginScreen = {\n  after_render: function after_render() {\n    document.querySelector(\".btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n    document.querySelector(\".btn-close-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.closeCart)();\n    });\n    document.querySelector(\"#loginForm\").addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n\n      if (e.target && e.target.nodeName === \"FORM\") {\n        (0,_utility__WEBPACK_IMPORTED_MODULE_0__.loginUser)();\n      }\n    });\n    document.querySelector(\".mobile-menu .btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n  },\n  render: function render() {\n    return \"\\n        <div class=\\\"container\\\">\\n        <div class=\\\"login-form-container\\\">\\n          <div class=\\\"login-form-text\\\">\\n            <h2 class=\\\"login-form-title\\\">Login</h2>\\n            <p>Get access to your Orders. Wishlist and Recommendations</p>\\n          </div>\\n          <form class=\\\"login-form\\\" id=\\\"loginForm\\\">\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"email\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"email\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"email\\\">Email</label>\\n            </div>\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"password\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"password\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"password\\\">Password</label>\\n            </div>\\n            <button type=\\\"submit\\\" id=\\\"btnAddNewUser\\\" class=\\\"btn btn-login\\\">\\n              Login\\n            </button>\\n          </form>\\n        </div>\\n      </div>\\n    \";\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginScreen);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://static/./public/src/screens/login.js?");

/***/ }),

/***/ "./public/src/screens/products.js":
/*!****************************************!*\
  !*** ./public/src/screens/products.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./public/src/utility.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utility__WEBPACK_IMPORTED_MODULE_0__]);\n_utility__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar categories = await axios.get(\"http://localhost:3000/categoriesdata\");\nvar products = await axios.get(\"http://localhost:3000/productsdata\");\nvar filterResult = categories.data.filter(function (category) {\n  return category.order >= 0;\n});\nvar sortResult = filterResult.sort(function (a, b) {\n  return a.order - b.order;\n});\nvar ProductScreen = {\n  after_render: function after_render() {\n    document.querySelector(\".product-categories-list\").addEventListener(\"click\", function (e) {\n      if (e.target && e.target.nodeName === \"BUTTON\") {\n        filterProducts(e.target.id);\n      }\n    });\n    document.querySelector(\".product-categories-dropdown-list\").addEventListener(\"change\", function (e) {\n      filterProducts(e.target.value);\n    });\n    document.querySelector(\".products-section\").addEventListener(\"click\", function (e) {\n      if (e.target && e.target.nodeName === \"BUTTON\") {\n        (0,_utility__WEBPACK_IMPORTED_MODULE_0__.addToCart)(e.target.id);\n      }\n    });\n    document.querySelector(\".btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n    document.querySelector(\".mobile-menu .btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n    document.querySelector(\".btn-close-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.closeCart)();\n    });\n  },\n  render: function render() {\n    var allcategories = sortResult;\n    var allProducts = products.data;\n    return \"\\n      <div class=\\\"products-container\\\">\\n        <div class=\\\"container\\\">\\n          <aside class=\\\"product-categories\\\">\\n          <ul class=\\\"product-categories-list\\\">\\n            \".concat(allcategories.map(function (category) {\n      return \"\\n                <li>\\n                  <button class=\\\"product-category-list-link\\\" id=\\\"\".concat(category.id, \"\\\">\\n                    \").concat(category.name, \"\\n                  </button>\\n                </li>\\n              \");\n    }).join(\"\"), \"\\n          </ul>\\n          <select class=\\\"product-categories-dropdown-list\\\">\\n            <option class=\\\"product-category-list\\\" value=\\\"\\\">All product category</option>\\n            \").concat(allcategories.map(function (category) {\n      return \"\\n                  <option class=\\\"product-category-list\\\" value=\\\"\".concat(category.id, \"\\\">\\n                    \").concat(category.name, \"\\n                  </option>\\n                \");\n    }).join(\"\"), \"\\n          </select>\\n          </aside>\\n          <section class=\\\"products-section\\\">\\n              \").concat(allProducts.map(function (product) {\n      return \"\\n              <div class=\\\"product-card \".concat(product.category, \"\\\">\\n                <h2 class=\\\"product-title\\\">\").concat(product.name, \"</h2>\\n                <img\\n                  class=\\\"product-img\\\"\\n                  src=\\\"\").concat(product.imageURL, \"\\\"\\n                  alt=\\\"\").concat(product.name, \"\\\"\\n                />\\n                <p class=\\\"product-description\\\">\").concat(product.description, \"</p>\\n                <div class=\\\"product-price-container\\\">\\n                  <p class=\\\"product-price\\\">MRP Rs.\").concat(product.price, \"</p>\\n                  <button class=\\\"btn btn-buy-now\\\" id=\\\"\").concat(product.id, \"\\\">Buy Now</button>\\n                </div>\\n                <button class=\\\"btn btn-buy-now-mobile\\\" id=\\\"\").concat(product.id, \"\\\">Buy Now @\").concat(product.price, \"</button>\\n              </div>\\n              \");\n    }).join(\"\"), \"\\n          </section>\\n        </div>\\n      </div>\\n    \");\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductScreen);\n\nfunction filterProducts(theCategoryId) {\n  var filteredItems = [];\n\n  if (theCategoryId) {\n    filteredItems = products.data.filter(function (item) {\n      return item.category === theCategoryId;\n    });\n  } else {\n    filteredItems = products.data;\n  }\n\n  var productContainerEl = document.querySelector(\".products-section\");\n  productContainerEl.innerHTML = \"\";\n  filteredItems.forEach(function (item) {\n    return generateProducts(item);\n  });\n}\n\nfunction generateProducts(product) {\n  var productContainerEl = document.querySelector(\".products-section\");\n  productContainerEl.innerHTML += \"\\n    <div class=\\\"product-card \".concat(product.category, \"\\\">\\n      <h2 class=\\\"product-title\\\">\").concat(product.name, \"</h2>\\n      <img\\n        class=\\\"product-img\\\"\\n        src=\\\"\").concat(product.imageURL, \"\\\"\\n        alt=\\\"\").concat(product.name, \"\\\"\\n      />\\n      <p class=\\\"product-description\\\">\").concat(product.description, \"</p>\\n      <div class=\\\"product-price-container\\\">\\n        <p class=\\\"product-price\\\">MRP Rs.\").concat(product.price, \"</p>\\n        <button class=\\\"btn btn-buy-now\\\" id=\\\"\").concat(product.id, \"\\\">Buy Now</button>\\n      </div>\\n      <button class=\\\"btn btn-buy-now-mobile\\\" id=\\\"\").concat(product.id, \"\\\">Buy Now @\").concat(product.price, \"</button>\\n    </div>\\n  \");\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://static/./public/src/screens/products.js?");

/***/ }),

/***/ "./public/src/screens/register.js":
/*!****************************************!*\
  !*** ./public/src/screens/register.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utility */ \"./public/src/utility.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utility__WEBPACK_IMPORTED_MODULE_0__]);\n_utility__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nvar RegisterScreen = {\n  after_render: function after_render() {\n    document.querySelector(\".btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n    document.querySelector(\".btn-close-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.closeCart)();\n    });\n    document.querySelector(\"#registrationForm\").addEventListener(\"submit\", function (e) {\n      e.preventDefault();\n\n      if (e.target && e.target.nodeName === \"FORM\") {\n        (0,_utility__WEBPACK_IMPORTED_MODULE_0__.addNewUser)();\n      }\n    });\n    document.querySelector(\".mobile-menu .btn-cart\").addEventListener(\"click\", function () {\n      return (0,_utility__WEBPACK_IMPORTED_MODULE_0__.showCart)();\n    });\n  },\n  render: function render() {\n    return \"\\n      <div class=\\\"container\\\">\\n        <div class=\\\"registration-form-container\\\">\\n          <div class=\\\"registration-form-text\\\">\\n            <h2 class=\\\"registration-form-title\\\">Sign Up</h2>\\n            <p>We do not share your personal details with anyone.</p>\\n          </div>\\n          <form\\n            class=\\\"registration-form\\\"\\n            id=\\\"registrationForm\\\"\\n          >\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"text\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"fname\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"fname\\\">First Name</label>\\n            </div>\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"text\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"lname\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"lname\\\">Last Name</label>\\n            </div>\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"email\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"email\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"email\\\">Email</label>\\n            </div>\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"password\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"password\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"password\\\">Password</label>\\n            </div>\\n            <div class=\\\"form-group floating-label-group\\\">\\n              <input\\n                type=\\\"password\\\"\\n                class=\\\"form-control\\\"\\n                id=\\\"cpassword\\\"\\n                required\\n                placeholder=\\\" \\\"\\n              />\\n              <label class=\\\"floating-label\\\" for=\\\"cpassword\\\"\\n                >Confirm Password</label\\n              >\\n            </div>\\n            <button type=\\\"submit\\\" id=\\\"btnAddNewUser\\\" class=\\\"btn btn-sign-up\\\">\\n              Signup\\n            </button>\\n          </form>\\n        </div>\\n      </div>\\n    \";\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterScreen);\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://static/./public/src/screens/register.js?");

/***/ }),

/***/ "./public/src/utility.js":
/*!*******************************!*\
  !*** ./public/src/utility.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewUser\": () => (/* binding */ addNewUser),\n/* harmony export */   \"addToCart\": () => (/* binding */ addToCart),\n/* harmony export */   \"changeItemQuantity\": () => (/* binding */ changeItemQuantity),\n/* harmony export */   \"closeCart\": () => (/* binding */ closeCart),\n/* harmony export */   \"loginUser\": () => (/* binding */ loginUser),\n/* harmony export */   \"parseRequestUrl\": () => (/* binding */ parseRequestUrl),\n/* harmony export */   \"renderCartItems\": () => (/* binding */ renderCartItems),\n/* harmony export */   \"renderSubTotal\": () => (/* binding */ renderSubTotal),\n/* harmony export */   \"showCart\": () => (/* binding */ showCart)\n/* harmony export */ });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar products = await axios.get(\"http://localhost:3000/productsdata\");\nvar parseRequestUrl = function parseRequestUrl() {\n  var url = document.location.pathname.toLowerCase();\n  var request = url.split(\"/\");\n  return {\n    resource: request[1],\n    id: request[2],\n    action: request[3]\n  };\n};\nvar storedItems = JSON.parse(localStorage.getItem(\"cartItems\"));\nvar cartItems = storedItems !== null ? storedItems : []; // show cart on click of cart btn\n\nvar showCart = function showCart() {\n  var bodyEl = document.querySelector(\"body\");\n  var overlayEl = document.createElement(\"div\");\n  var viewPortWidth = window.innerWidth;\n\n  if (viewPortWidth > 1024) {\n    overlayEl.setAttribute(\"class\", \"overlay\");\n    bodyEl.appendChild(overlayEl);\n  }\n\n  if (viewPortWidth < 1024) {\n    bodyEl.style.overflowY = \"hidden\";\n  }\n\n  var cartHeaderTitleEl = document.querySelector(\".cart-header-title\");\n  var cartItemsEl = document.querySelector(\".cart-items-row\");\n  var cartFooterEl = document.querySelector(\".cart-footer\");\n\n  if (cartItems.length === 0) {\n    cartHeaderTitleEl.innerHTML = \"My Cart\";\n    cartItemsEl.innerHTML = \"<div class=\\\"no-items\\\">\\n    <h4>No items in your cart</h4>\\n    <p>Your favourite items are just a click away</p>\\n  </div>\";\n    cartFooterEl.innerHTML = \"<a class=\\\"btn btn-start-shopping\\\" href=\\\"/products\\\">Start Shopping</a>\";\n  }\n\n  alignCartPosition();\n  document.querySelector(\".cart-items-row\").addEventListener(\"click\", function (e) {\n    e.stopPropagation();\n    e.stopImmediatePropagation();\n\n    if (e.target && e.target.nodeName === \"BUTTON\") {\n      changeItemQuantity(e.target.className, e.target.id);\n    }\n  });\n}; // calculates popup height and position from the right\n\nfunction alignCartPosition() {\n  var addToCartContainerEl = document.querySelector(\".add-to-cart\");\n  var headerEl = document.querySelector(\"header\");\n  var mainContainerEl = document.querySelector(\"#mainContainer .container\");\n  var cartItemsRow = document.querySelector(\".add-to-cart .cart-items-row\");\n  var cartFooter = document.querySelector(\".add-to-cart .cart-footer\");\n  var containerMargin = mainContainerEl.currentStyle || window.getComputedStyle(mainContainerEl);\n  var cartFooterHeight = cartFooter.clientHeight;\n  var headerHeight = headerEl.clientHeight;\n  var viewPortWidth = window.innerWidth;\n  var viewPortHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);\n\n  if (viewPortWidth > 1024) {\n    addToCartContainerEl.style.right = containerMargin.marginLeft;\n  }\n\n  addToCartContainerEl.style.height = viewPortHeight - headerHeight + \"px\";\n  addToCartContainerEl.style.display = \"block\";\n  cartItemsRow.style.marginBottom = cartFooterHeight + 15 + \"px\";\n} // close cart on click of X button\n\n\nvar closeCart = function closeCart() {\n  var bodyEl = document.querySelector(\"body\");\n  var overlayEl = document.querySelector(\".overlay\");\n  var viewPortWidth = window.innerWidth;\n\n  if (viewPortWidth > 1024) {\n    bodyEl.removeChild(overlayEl);\n  }\n\n  if (viewPortWidth < 1024) {\n    bodyEl.style.overflowY = \"auto\";\n  }\n\n  var addToCartContainerEl = document.querySelector(\".add-to-cart\");\n  addToCartContainerEl.style.display = \"none\";\n}; // add selected item to the cart\n\nvar addToCart = function addToCart(productId) {\n  var product = products.data.find(function (item) {\n    return item.id === productId;\n  });\n\n  if (cartItems.some(function (item) {\n    return item.id === productId;\n  })) {\n    changeItemQuantity(\"plus\", productId);\n  } else {\n    cartItems.push(_objectSpread(_objectSpread({}, product), {}, {\n      quantity: 1\n    }));\n    updateCart();\n  }\n\n  localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n}; // update cart items, quantity and total price\n\nfunction updateCart() {\n  renderCartItems();\n  renderSubTotal();\n} // calculate total items ans total price\n\n\nvar renderSubTotal = function renderSubTotal() {\n  var totalItems = 0;\n  var totalAmount = 0;\n  cartItems.forEach(function (item) {\n    totalItems += item.quantity;\n    totalAmount += item.price * item.quantity;\n  });\n  var viewPortWidth = window.innerWidth;\n\n  if (viewPortWidth < 1024) {\n    var _cartItemCountEl = document.querySelector(\".mobile-menu .item-count\");\n\n    _cartItemCountEl.innerHTML = \"\".concat(totalItems, \" items\");\n  }\n\n  var cartItemCountEl = document.querySelector(\".item-count\");\n  cartItemCountEl.innerHTML = \"\".concat(totalItems, \" items\");\n  var cartHeaderTitleEl = document.querySelector(\".cart-header-title\");\n  cartHeaderTitleEl.innerHTML = \"My Cart <span>(\".concat(totalItems, \" item)</span>\");\n  var cartFooterEl = document.querySelector(\".cart-footer\");\n  cartFooterEl.innerHTML = \"\\n  <p class=\\\"promo-text\\\">Promo code can be applied on payment page</p>\\n    <a href=\\\"/login\\\" class=\\\"btn-items-checkout\\\">\\n      <p>Proceed to checkout</p>\\n      <p>Rs.\".concat(totalAmount, \" &rangle;</p>\\n    </a>\\n  \");\n}; // render cart items in the cart\n\nvar renderCartItems = function renderCartItems() {\n  var cartItemRowEL = document.querySelector(\".cart-items-row\");\n  cartItemRowEL.innerHTML = \"\"; // clear cart row\n\n  cartItems.forEach(function (item) {\n    cartItemRowEL.innerHTML += \"\\n    <div class=\\\"cart-item\\\">\\n      <img\\n          class=\\\"cart-item-img\\\"\\n          src=\\\"\".concat(item.imageURL, \"\\\"\\n          alt=\\\"\").concat(item.name, \"\\\"\\n        />\\n        <div class=\\\"cart-item-details\\\">\\n          <h4 class=\\\"cart-item-title\\\">\").concat(item.name, \"</h4>\\n          <div class=\\\"add-or-remove-cart-item\\\">\\n            <button class=\\\"minus\\\" id=\\\"\").concat(item.id, \"\\\">-</button\\n            ><span class=\\\"cart-item-quantity\\\">\").concat(item.quantity, \"</span\\n            ><button class=\\\"plus\\\" id=\\\"\").concat(item.id, \"\\\">+</button\\n            ><span>X</span>\\n            <span class=\\\"item-actual-price\\\">Rs.\").concat(item.price, \"</span>\\n          </div>\\n        </div>\\n        <div class=\\\"cart-final-price\\\">Rs. <span>\").concat(item.quantity * item.price, \"</span></div>\\n    </div>\\n    \");\n  });\n  cartItemRowEL.innerHTML += \"\\n    <div class=\\\"lowest-price-row\\\">\\n      <div class=\\\"lowest-price-content\\\">\\n        <img class=\\\"lowest-price-img\\\" src=\\\"./public/images/lowest-price.png\\\" alt=\\\"lowest price image\\\" />\\n        <p>You won't find it cheaper anywhere</p>\\n      </div>\\n    </div>\\n  \";\n}; // change item quantity\n\nvar changeItemQuantity = function changeItemQuantity(action, id) {\n  cartItems = cartItems.map(function (item) {\n    var quantity = item.quantity;\n\n    if (item.id === id) {\n      if (action === \"minus\" && quantity > 1) {\n        quantity--;\n      } else if (action === \"plus\" && quantity < item.stock) {\n        quantity++;\n      }\n    }\n\n    return _objectSpread(_objectSpread({}, item), {}, {\n      quantity: quantity\n    });\n  });\n  updateCart();\n  localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n}; // -------------- register user functionality -----------------\n\nfunction getInputData(formName) {\n  var allInputsData = document.querySelectorAll(\"\".concat(formName, \" input\"));\n  var newUserData = Array.from(allInputsData).reduce(function (newUser, input) {\n    return _objectSpread(_objectSpread({}, newUser), {}, _defineProperty({}, input.id, input.value));\n  }, {});\n  return newUserData;\n}\n\nvar addNewUser = function addNewUser() {\n  var newUser = getInputData(\".registration-form\");\n\n  if (newUser.password !== newUser.cpassword) {\n    alert(\"password and confirm password does not match\");\n  } else {\n    fetch(\"http://localhost:3000/newuser\", {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify(newUser)\n    }).then(function (res) {\n      return res.json();\n    }).then(function (message) {\n      if (message.msg == \"success\") {\n        alert(\"user added successfully!\");\n        window.location.reload();\n      } else {\n        alert(message.msg);\n        window.location.reload();\n      }\n    });\n  }\n}; // ------------- login form functionality ---------------\n\nvar loginUser = function loginUser() {\n  var validateUser = getInputData(\".login-form\");\n  fetch(\"http://localhost:3000/users\").then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    var userExists = res.some(function (user) {\n      return user.email === validateUser.email;\n    });\n    var validUserNamePassword = res.some(function (user) {\n      return user.email === validateUser.email && user.password === validateUser.password;\n    });\n    var invalidUserNamePassword = res.some(function (user) {\n      return user.email === validateUser.email && user.password !== validateUser.password;\n    });\n\n    if (userExists) {\n      if (validUserNamePassword) {\n        window.location.href = \"/\";\n      } else if (invalidUserNamePassword) {\n        alert(\"invalid username and password\");\n        window.location.reload();\n      }\n    } else {\n      alert(\"user does not exist\");\n      window.location.reload();\n    }\n  });\n};\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://static/./public/src/utility.js?");

/***/ }),

/***/ "./public/src/style.scss":
/*!*******************************!*\
  !*** ./public/src/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://static/./public/src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./public/src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./public/src/style.scss");
/******/ 	
/******/ })()
;