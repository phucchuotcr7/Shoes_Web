var urlParams = new URLSearchParams(window.location.search);
var productId = parseInt(urlParams.get("id"));
console.log(productId);

var product = product_list.find(function (item) {
  return item.id === productId;
});

var productDetails = document.getElementById("product-detail");
const getProductDetail = () => {
  if (product) {
    // var details = document.createElement("p");
    // details.innerText = product.id;
    // productDetails.appendChild(details);

    productDetails.innerHTML = `
    <div class="img-product">
    <img src=${product.image} alt="" />
  </div>
  <div class="infor-product">
    <h3>${product.name}</h3>
    <div class="product-rating">
    <img src="./images/ratings/product-rating-${
      product.rating.star * 10
    }.png" alt="">
    <div class="product-rating-count">(${product.rating.count})</div>
    </div>
    <h2>$${product.price / 100}</h2>
    <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            culpa necessitatibus eligendi dolore corporis quaerat molestiae
            neque. Et iusto dignissimos veniam, quos maiores excepturi officia
            quod nobis, earum, harum non!
    </p>
    <div class="product-actions">
    <div class="quantity">1</div>
    <button class="add-to-cart">ADD TO CART</button>
    </div>
    </div>

    `;
  }
};
getProductDetail();

let description = true;
let reviews = false;

var product_overview = document.getElementById("product-overview");
var overview_element = document.getElementById("content-overview");

product_overview.innerHTML = `
<div id="description">Description</div>
<div id="reviews">Reviews</div>
`;

var description_element = document.getElementById("description");
var reviews_element = document.getElementById("reviews");

overview_element.innerHTML = `
<div class="content-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            inventore odio iusto laborum. Beatae hic officiis exercitationem
            aspernatur. Deserunt neque et minima non iste consectetur sunt,
            laudantium vel modi nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            inventore odio iusto laborum. Beatae hic officiis exercitationem
            aspernatur. Deserunt neque et minima non iste consectetur sunt,
            laudantium vel modi nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            inventore odio iusto laborum. Beatae hic officiis exercitationem
            aspernatur. Deserunt neque et minima non iste consectetur sunt,
            laudantium vel modi nesciunt.</p>
          </div>
`;

description_element.addEventListener("click", function () {
  overview_element.innerHTML = `
    <div class="content-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            inventore odio iusto laborum. Beatae hic officiis exercitationem
            aspernatur. Deserunt neque et minima non iste consectetur sunt,
            laudantium vel modi nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            inventore odio iusto laborum. Beatae hic officiis exercitationem
            aspernatur. Deserunt neque et minima non iste consectetur sunt,
            laudantium vel modi nesciunt.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            inventore odio iusto laborum. Beatae hic officiis exercitationem
            aspernatur. Deserunt neque et minima non iste consectetur sunt,
            laudantium vel modi nesciunt.</p>
          </div>
    `;
});

reviews_element.addEventListener("click", function () {
  overview_element.innerHTML = `
    <div class="content-reviews">Sản phẩm rất hay</div>
    `;
});

// Related Product

const getRelatedProduct = (category) => {
  var relatedProduct = product_list.filter((element) => {
    return element.category === category;
  });
  return relatedProduct;
};

var relatedCategory = getRelatedProduct(product.category);

relatedCategory = relatedCategory.filter((productId) => {
  return productId.id !== product.id;
});

const paginationRelatedProduct = (product, row, page) => {
  page--;
  let start = row * page;
  let end = start + row;
  let pagination = product.slice(start, end);
  return pagination;
};

var relatedProducts = document.getElementById("related-product");
var paginatedProduct = paginationRelatedProduct(relatedCategory, 4, 1);

paginatedProduct.forEach((product) => {
  var productElement = document.createElement("div");
  productElement.setAttribute("class", "product");
  productElement.setAttribute(
    "data-url",
    "./productDetails.html?id=" + product.id
  );
  productElement.innerHTML = `
  <img src=${product.image} alt="" />
  <p>${product.name}</p>
  <img src="./images/ratings/product-rating-${
    product.rating.star * 10
  }.png" alt="">
  <h5>$${product.price / 100}</h5>
  `;
  relatedProducts.appendChild(productElement);

  productElement.addEventListener("click", function () {
    let productURL = productElement.getAttribute("data-url");
    window.location.href = productURL;
  });
});

const DisplayRelatedProduct = () => {};
