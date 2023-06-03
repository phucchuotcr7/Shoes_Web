const product_list = [
  {
    id: 1,
    name: "Men's Nike Concepts X Kyrie 5 Ep 'ikhet",
    image:
      "https://i.pinimg.com/564x/e6/80/5f/e6805fddb7c95974008907cdb0d1cdbf.jpg",
    price: "2.000.000đ",
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
  },
  {
    id: 6,
    name: "Men's PUMA Clyde Hardwood Team 'strong Blue'",
    image:
      "https://i.pinimg.com/564x/36/d2/af/36d2af578c80739feeb3a44c26cf9022.jpg",
    price: "2.000.000đ",
  },
  {
    id: 7,
    name: "Men's Nike Zoom Freak 2 'denim'",
    image:
      "https://i.pinimg.com/564x/77/32/3f/77323f3b5f36ccd4ca46f9c6ecbb587a.jpg",
    price: "2.000.000đ",
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
  },
];

let shop = document.getElementById("shop");
const header = document.getElementById("header");
console.log(header);
console.log(shop);

const goNext = () => {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
};

shop.innerHTML = product_list
  .map((element) => {
    return `<div id="product" ${element.id}>
  <img
    src=${element.image}
    alt=""
  />
  <p>${element.name}</p>
  <h4>${element.price}</h4>
</div>`;
  })
  .join("");
