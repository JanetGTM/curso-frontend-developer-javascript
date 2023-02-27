
/*Variables del menu email en desktop */
const btnMenuEmailDesktop = document.querySelector('.navbar-email');
const menuEmailDesktop = document.querySelector('.desktop-menu');

/*Variables del menu mobile */
const menuHambIcon = document.querySelector('.menu');
const menuHamb = document.querySelector('.mobile-menu');

/*Variables del aside carrito de compras y detalles */
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const detallesProducto = document.querySelector('.product-detail');

/* Toggle del menu emal en desktop */ 
btnMenuEmailDesktop.addEventListener('click', toggleMenuEmailDesktop);

function toggleMenuEmailDesktop(){
  detallesProducto.classList.add('inactive');
  menuEmailDesktop.classList.toggle('inactive');
}

/* Toggle del menú mobile */
menuHambIcon.addEventListener('click', toggleMenuHamb);

function toggleMenuHamb(){
  detallesProducto.classList.add('inactive');
  menuHamb.classList.toggle('inactive');
}

/* Toggle del Aside carrito de compras y detalles */
iconCarrito.addEventListener('click', toggleCarritoCompras);

function toggleCarritoCompras(){
  detallesProducto.classList.toggle('inactive');
  menuEmailDesktop.classList.add('inactive');
  menuHamb.classList.add('inactive');

}

/* Lista de productos */
const productList = [];

//Insertamos los objetos a nuestro array productList
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
  name: 'Audífonos',
  price: 90,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});

//creamos una función que guarde los nodos  html que se insertaran al DOM
// y pasamos como argumento a arr, es el array que se usaría en la función
function listaDeProductos(arr){
  const cardsContainer = document.querySelector(".cards-container");
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    
    const productPrice= document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName= document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
  
    cardsContainer.appendChild(productCard);
  
  }
  

}

//se manda llamar la función con el parámetro productList que representa el array a utilizar
listaDeProductos(productList);