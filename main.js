const product_list = [
  {
    id: 1,
    name: "Men's Nike Concepts X Kyrie 5 Ep 'ikhet",
    image:
      "https://i.pinimg.com/564x/e6/80/5f/e6805fddb7c95974008907cdb0d1cdbf.jpg",
    price: "2.000.000đ",
    category: "Men_Shoes",
  },
  {
    id: 2,
    name: "Nike Cosmic Unity EP Amalgam Basketball Shoes/Sneakers",
    image:
      "https://i.pinimg.com/564x/fa/5d/9f/fa5d9fe707cd8dabc596ef6beb5cdd82.jpg",
    price: "2.000.000đ",
  },
  {
    id: 3,
    name: "Men's Nike Zoom Freak 3 Ep 'n.i.k.e.' - Blue",
    image:
      "https://i.pinimg.com/564x/ba/87/cf/ba87cfe55f98d471b4205b0a81add6f4.jpg",
    price: "2.000.000đ",
    category: "Men_Shoes",
  },
  {
    id: 4,
    name: "Nike Lebron Witness 5 EP Basketball Shoes/Sneakers",
    image:
      "https://i.pinimg.com/564x/7f/95/8c/7f958cedecc3079be8c7e02ed8d38fbf.jpg",
    price: "2.000.000đ",
  },
  {
    id: 5,
    name: "Men's Nike Kd Trey 5 Ix Ep Domestic Edition White/purple",
    image:
      "https://i.pinimg.com/564x/cb/dd/e9/cbdde999b9cc6a5ca3199b948c7f05f5.jpg",
    price: "2.000.000đ",
    category: "Men_Shoes",
  },
  {
    id: 6,
    name: "Men's PUMA Clyde Hardwood Team 'strong Blue'",
    image:
      "https://i.pinimg.com/564x/36/d2/af/36d2af578c80739feeb3a44c26cf9022.jpg",
    price: "2.000.000đ",
    category: "Men_Shoes",
  },
  {
    id: 7,
    name: "Men's Nike Zoom Freak 2 'denim'",
    image:
      "https://i.pinimg.com/564x/77/32/3f/77323f3b5f36ccd4ca46f9c6ecbb587a.jpg",
    price: "2.000.000đ",
    category: "Men_Shoes",
  },
  {
    id: 8,
    name: "Nike KD Trey 5 VIII EP White Basketball Shoes",
    image:
      "https://i.pinimg.com/564x/a3/e9/55/a3e955d38c2133a25a870028cfc961d2.jpg",
    price: "2.000.000đ",
  },
  {
    id: 9,
    name: "Women's Nike Zoom Kobe 6 Protro Low-top Pink/white",
    image:
      "https://i.pinimg.com/564x/14/04/ff/1404ff1fc0f235b4f645f91d8a7f5ec0.jpg",
    price: "2.000.000đ",
    category: "Women_Shoes",
  },
  {
    id: 10,
    name: "Nike KD Trey 5 VIII EP White Basketball Shoes",
    image:
      "https://i.pinimg.com/564x/46/92/66/4692664b7839de60b24bc3efc9634399.jpg",
    price: "2.000.000đ",
  },
  {
    id: 11,
    name: "Nike Air Max 270 React Marathon Running Shoes",
    image:
      "https://i.pinimg.com/564x/36/8b/2f/368b2f1fcc51e5e98bbf7b523c4af320.jpg",
    price: "2.000.000đ",
  },
  {
    id: 12,
    name: "Women's Adidas Trae Young 1 'icee' - Pink",
    image:
      "https://i.pinimg.com/564x/09/cb/b2/09cbb213206a873d6dc9b3731544661e.jpg",
    price: "2.000.000đ",
    category: "Women_Shoes",
  },
];

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

    // let link = document.createElement("a");
    // link.href = "productDetails.html?id=" + product.id;
    // link.append(img_element);
    // product_element.appendChild(link);

    let img_element = document.createElement("img");
    img_element.src = product.image;
    product_element.appendChild(img_element);

    let name_element = document.createElement("p");
    name_element.innerText = product.name;
    product_element.appendChild(name_element);

    let price_element = document.createElement("h4");
    price_element.innerText = product.price;
    product_element.appendChild(price_element);

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

const men_shoes = document.getElementById("men-shoes");
console.log(men_shoes);
const women_shoes = document.getElementById("women-shoes");
console.log(women_shoes);

const DisplayProductByCategory = () => {
  var men_category = product_list.find((item) => {
    return item.category === "Men_Shoes";
  });
  var women_category = product_list.find((item) => {
    return item.category === "Women_Shoes";
  });

  if (men_category.category) {
    men_shoes.addEventListener("click", function () {
      const categoryURL = "./category.html?category=" + men_category.category;
      window.location.href = categoryURL;
      console.log("Thanh Cong");
    });
  }
  if (women_category.category) {
    women_shoes.addEventListener("click", function () {
      const URL = "./category.html?category=" + women_category.category;
      window.location.href = URL;
      console.log("Thanh Cong");
    });
  }
};

DisplayProductByCategory();
