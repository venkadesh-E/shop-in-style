import "./App.css";
import Head from "./head";
import Card from "./card";
import { useState } from "react";
import Cartitems from "./Cartitems";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.css";

function App() {
  let products = [
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/427917/item/ingoods_09_427917.jpg?width=1600&impolicy=quality_75",
      title: "Nike",
      description: "Unisex Adilettle ",
      price: 3199,
      price1: 4199,
      isIfen: true,
    },
    {
      id: 2,
      img: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/427917/sub/ingoods_427917_sub5.jpg?width=1600&impolicy=quality_75",
      title: "Puma",
      description: "Super Model",
      price: 3299,
      price1: 5999,
      sale: true,
      rating: true,
      isIfen: true,
    },
    {
      id: 3,
      img: "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/427917/sub/ingoods_427917_sub3.jpg?width=1600&impolicy=quality_75",
      title: "Addidas",
      description: "Comfort for Sports",
      price: 2599,
      sale: true,
      isIfen: true,
    },
    {
      id: 4,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/427917/sub/goods_427917_sub14.jpg?width=1600&impolicy=quality_75",
      title: "HRX",
      description: "Fitness",
      price: 1499,
      rating: true,
    },
    {
      id: 5,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F64%2F0a%2F640a2697aa0f22d1f98be32508745938b6d89229.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "Bata",
      description: "bablo Model",
      price: 3000,
      price1: 4699,
      sale: true,
      isIfen: true,
    },
    {
      id: 6,
      img: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3a%2F84%2F3a84cc529b71d32d137f765091c3dec24b2adab5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
      title: "U.S Polo",
      description: "Men fitness",
      price: 1799,
      price1: 2499,
      isIfen: true,
    },
  ];

  const [cartitems, setCartitems] = useState([]);
  const [total, setTotal] = useState(0);

  let handleCart = (item) => {
    setCartitems([...cartitems, item]);
    setTotal(total + item.price);
  };

  let handleRemoveCart = (item) => {
    let itemIndex = cartitems.findIndex((obj) => item.id === obj.id);
    cartitems.splice(itemIndex, 1);
    setCartitems([...cartitems]);
    setTotal(total - item.price);
  };

  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <div class="btn btn-outline-dark">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
                <ol class="list-group list-group-numbered">
                  {cartitems.map((item) => {
                    return (
                      <Cartitems
                        item={item}
                        handleRemoveCart={handleRemoveCart}
                      />
                    );
                  })}
                </ol>
                <h6 className="text-center">Total : {total}</h6>
              </div>
            </form>
          </div>
        </div>
      </nav>

      <Head />

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product) => {
              return (
                <Card
                  data={product}
                  cartItem={cartitems}
                  handleCart={handleCart}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
