const header = document.getElementById("header");
const shop = document.getElementById("shop");
const pagination = document.getElementById("pagination");

let current_page = 1;
let row = 5;

// Display Shop

const DisplayShop = (products, wrapper, rows_per_page, page) => {
  wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = products.slice(start, end);
  console.log(paginatedItems);

  for (let i = 0; i < paginatedItems.length; i++) {
    let product = paginatedItems[i];
    let product_element = document.createElement("div");
    product_element.setAttribute("id", "product");
    product_element.setAttribute("data-id", product.id);
    product_element.innerHTML = `
    <img src=${product.image} alt="">
    <p>${product.name}</p>
    <h4>$${product.price / 100}</h4>
    `;

    wrapper.appendChild(product_element);

    product_element.addEventListener("click", function () {
      const productId = product_element.getAttribute("data-id");

      const productURL = "./productDetails.html?id=" + productId;
      window.location.href = productURL;
    });
  }
};

// Pagination

const SetupPagination = (products, wrapper, rows_per_page) => {
  wrapper.innerHTML = "";

  let page_count = Math.ceil(products.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, products);
    wrapper.appendChild(btn);
  }
};

// Pagination Button

const PaginationButton = (page, products) => {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayShop(products, shop, row, current_page);

    let current_btn = document.querySelector(".page-numbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
};

DisplayShop(product_list, shop, row, current_page);
SetupPagination(product_list, pagination, row);

const goNext = () => {
  window.scrollTo({
    top: 600,
    behavior: "smooth",
  });
};

// shop.innerHTML = product_list
//   .map((element) => {
//     return `<div id="product" ${element.id}>
//   <img
//     src=${element.image}
//     alt=""
//   />
//   <p>${element.name}</p>
//   <h4>${element.price}</h4>
// </div>`;
//   })
//   .join("");

// Display Product Detail Page
const fashion_shoes = document.getElementById("fashion-shoes");
const men_shoes = document.getElementById("men-shoes");
console.log(men_shoes);
const women_shoes = document.getElementById("women-shoes");
console.log(women_shoes);

const DisplayProductByCategory = () => {
  var fashion_category = product_list.find((item) => {
    return item.category === "Fashion_Shoes";
  });
  var men_category = product_list.find((item) => {
    return item.category === "Men_Shoes";
  });
  var women_category = product_list.find((item) => {
    return item.category === "Women_Shoes";
  });

  if (fashion_category.category) {
    fashion_shoes.addEventListener("click", function () {
      let categoryURL = "./category.html?category=" + fashion_category.category;
      window.location.href = categoryURL;
      console.log("Thanh Cong");
    });
  }

  if (men_category.category) {
    men_shoes.addEventListener("click", function () {
      let categoryURL = "./category.html?category=" + men_category.category;
      window.location.href = categoryURL;
      console.log("Thanh Cong");
    });
  }
  if (women_category.category) {
    women_shoes.addEventListener("click", function () {
      let categoryURL = "./category.html?category=" + women_category.category;
      window.location.href = categoryURL;
      console.log("Thanh Cong");
    });
  }
};

DisplayProductByCategory();
