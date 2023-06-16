var urlParams = new URLSearchParams(window.location.search);
var productId = parseInt(urlParams.get("id"));

var product = product_list.find(function (item) {
  return item.id === productId;
});

var productDetails = document.getElementById("product-detail");
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
    <p>${product.price}</p>
    <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            culpa necessitatibus eligendi dolore corporis quaerat molestiae
            neque. Et iusto dignissimos veniam, quos maiores excepturi officia
            quod nobis, earum, harum non!
          </p>
          <div class="quantity">1</div>
          <button class="add-to-cart">ADD TO CART</button>
  </div>
    `;

  // let details = document.createElement("div");
  // details.setAttribute("class", "img-product");

  // let img_product = document.createElement("img");
  // img_product.src = product.image;
  // details.appendChild(img_product);

  // productDetails.appendChild(details);
}
