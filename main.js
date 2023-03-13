/*Variables del menu email en desktop */
const btnMenuEmailDesktop = document.querySelector('.navbar-email');
const menuEmailDesktop = document.querySelector('.desktop-menu');

/*Variables del menu mobile */
const menuHambIcon = document.querySelector('.menu');
const menuHamb = document.querySelector('.mobile-menu');

/*Variables del aside carrito de compras y detalles */
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

/* Variables  del asode de detalles del producto*/
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

btnMenuEmailDesktop.addEventListener('click', toggleMenuEmailDesktop);
menuHambIcon.addEventListener('click', toggleMenuHamb);
iconCarrito.addEventListener('click', toggleCarritoCompras);

//bandera
let band = 0;

/* Toggle del menu emal en desktop */
function toggleMenuEmailDesktop() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  menuEmailDesktop.classList.toggle('inactive');
}

/* Toggle del menú mobile */
function toggleMenuHamb() {
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  menuHamb.classList.toggle('inactive');
}

/* Toggle del Aside carrito de compras y detalles */
function toggleCarritoCompras() {
  menuEmailDesktop.classList.add('inactive');
  menuHamb.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
}

/* Abriendo detalles del producto haciendo click a cada imagen */
function openProductDetailAside(e) {
  menuHamb.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  menuEmailDesktop.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
    if(band == 1){
      contenedor.remove();
      renderProductDetailAside(e);
    }
    else{
      renderProductDetailAside(e);
      band = 1;
    }
}

function renderProductDetailAside(e){
  productList.forEach(product => {
    if(e.target.src === product.image) {
      
      const contenedorDetallesProducto = document.createElement('div');
      contenedorDetallesProducto.setAttribute('id', 'contenedor')
       productDetailContainer.appendChild(contenedorDetallesProducto);

    //creación del contenedor de la img icon close
    const productDetailIconCloseAside = document.createElement('div');
    productDetailIconCloseAside.classList.add('product-detail-close');
    //creacion de ls img icon close con attributos src y alt
    const productDetailIconCloseImgAside = document.createElement('img');
    productDetailIconCloseImgAside.setAttribute('src', "./icons/icon_close.png");
    productDetailIconCloseImgAside.setAttribute('alt', "Close image");
    //Introducir la img icon close en su contenedor
    productDetailIconCloseAside.appendChild(productDetailIconCloseImgAside);
    productDetailIconCloseAside.addEventListener('click', closeProductDetailAside);
    

    //crear la img del producto en el aside detalles y atributos src y alt
    const productDetailImgAside = document.createElement('img');
    productDetailImgAside.setAttribute('src', product.image);
    productDetailImgAside.setAttribute('alt', product.name);
    

    //crear contenedor de product info y clase
    const productInfoAside = document.createElement('div');
    productInfoAside.classList.add('product-info');

    //crear parrafo con precio de product 
    const productInfoPriceAside = document.createElement('p');
    productInfoPriceAside.innerText = product.price;
    
    //crear parrafo con nombre de producto
    const productInfoNameAside = document.createElement('p');
    productInfoNameAside.innerText = product.name;
    
    //crear parrafo con descripcion del producto
    const productInfoDescriptionAside = document.createElement('p');
    productInfoDescriptionAside.innerText = "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.";

    //crear botón de agragar al carrito, sus clases y texto
    const productInfoButtonAside = document.createElement('button');
    productInfoButtonAside.classList.add('primary-button', 'add-to-cart-button');
    productInfoButtonAside.innerText = "Add to cart";

    //crear la imagen de carrito dentro del boton
    const productInfoImgCartAside = document.createElement('img');
    productInfoImgCartAside.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoImgCartAside.setAttribute('alt', 'add to cart');

   
    //Agregar la img del carrito al boton
    productInfoButtonAside.appendChild(productInfoImgCartAside);
    

    //Agregamos precio, nombre, descripcion y boton al product info
    productInfoAside.append(productInfoPriceAside, productInfoNameAside, productInfoDescriptionAside, productInfoButtonAside);
 
    //********agregar la imagen en el aside
    contenedorDetallesProducto.append(productDetailIconCloseAside, productDetailImgAside, productInfoAside);
  }
  });
}

/* Cerrar el aside de detalles de cada producto */
function closeProductDetailAside() {
  const contenedorDetalles = document.querySelector('#contenedor')
  productDetailContainer.classList.add('inactive');
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
  image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

});
productList.push({
  name: 'IWatch',
  price: 390,
  image: 'https://cdn.lorem.space/images/watch/.cache/640x480/malik-shibly-Yx-egSamtKQ-unsplash.jpg'

});

productList.push({
  name: 'Celular',
  price: 720,
  image: 'https://m.media-amazon.com/images/I/41kjNX7OfkL._AC_SS450_.jpg'

});
productList.push({
  name: 'Mouse Gamer',
  price: 190,
  image: 'https://www.radioshack.com.mx/medias/100005651.jpg-515ftw?context=bWFzdGVyfHJvb3R8ODczMzl8aW1hZ2UvanBlZ3xoNGQvaDdhLzg5NzkwMjE5NTUxMDIuanBnfGE4NWQ0NWFkZTRiNThhNTRkMTIwNDc4ZGRkZTljNmNjZDljMDg1YjUwYTkxMzI0OTZhNWZkZjU5MTNkYmU4ZWU'

});
productList.push({
  name: 'Teclado',
  price: 175,
  image: 'https://m.media-amazon.com/images/I/61aezyfO5cL._AC_SY355_.jpg'

});


//creamos una función que guarde los nodos  html que se insertaran al DOM
// y pasamos como argumento a arr, es el array que se usaría en la función
function listaDeProductos(arr) {
  const cardsContainer = document.querySelector(".cards-container");
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
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