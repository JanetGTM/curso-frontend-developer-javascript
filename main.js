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

//botones del menú

const opcsNav = document.querySelectorAll('nav li a');
const all = document.querySelector('.todo');
const clothes = document.querySelector('.ropa');
const electronics = document.querySelector('.electronica');
const fornitures = document.querySelector('.muebles');
const toys = document.querySelector('.juguetes');
const others = document.querySelector('.otros');

const cardsContainer = document.querySelector('.cards-container');
// const mainContainer = document.querySelector('.main-container');

// function eventosNav(e){
//   console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
// }

function categorias(e){
  console.log(e.target);
  console.log(e.target.className);
  // console.log("INICIO: Se borra y se imprime un nuevo");
  // cardsContainer.removeChild(cardsContainerDos);
  nodos = document.querySelectorAll('.product-card');
  const borrarNodos = [...nodos];
  borrarNodos.forEach(nodo => nodo.remove());
  
  if(e.target.className === 'todos'){
    listaDeProductos(productList);
    e.preventDefault(); 
  }
  else{
     let categoria = productList.filter( item => item.category === e.target.className); 
 // band1 = 0;
  // console.log("FIN: Se borra y se imprime un nuevo");
  e.preventDefault(); 
  listaDeProductos(categoria);
  }
 
  }

  //PROPAGACIÓN DE EVENTOS EM BOTONES DEL NAV
// console.log(opcsNav);
opcsNav.forEach((opc) => {
  opc.addEventListener('click', categorias);
});

btnMenuEmailDesktop.addEventListener('click', toggleMenuEmailDesktop);
menuHambIcon.addEventListener('click', toggleMenuHamb);
iconCarrito.addEventListener('click', toggleCarritoCompras);

// all.addEventListener('click', ordenTodos);
// clothes.addEventListener('click', ordenRopa);
// electronics.addEventListener('click', ordenElectronicos);
// fornitures.addEventListener('click', ordenMuebles);
// toys.addEventListener('click', ordenJuguetes);
// others.addEventListener('click', ordenOtros);
// all.addEventListener('click', categorias);
// clothes.addEventListener('click', categorias);
// electronics.addEventListener('click', categorias);
// fornitures.addEventListener('click', categorias);
// toys.addEventListener('click', categorias);
// others.addEventListener('click', categorias);

//bandera
let band = 0;
let band1 = 0;
// let ropa = [];
// let electronica = [];
// let muebles = [];
// let juguetes = [];
// let otros = [];
// let eliminaCards;

let cardsContainerDos = document.querySelector('.cards-container-2');


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
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  category: 'jugetes'

});
productList.push({

  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  category: 'electronica'
});
productList.push({
  
  name: 'IWatch',
  price: 390,
  image: 'https://cdn.lorem.space/images/watch/.cache/640x480/malik-shibly-Yx-egSamtKQ-unsplash.jpg',
  category: 'electronica'
});
productList.push({
 
  name: 'Celular',
  price: 720,
  image: 'https://m.media-amazon.com/images/I/41kjNX7OfkL._AC_SS450_.jpg',
  category: 'electronica',
});
productList.push({
  name: 'Mouse Gamer',
  price: 190,
  image: 'https://www.radioshack.com.mx/medias/100005651.jpg-515ftw?context=bWFzdGVyfHJvb3R8ODczMzl8aW1hZ2UvanBlZ3xoNGQvaDdhLzg5NzkwMjE5NTUxMDIuanBnfGE4NWQ0NWFkZTRiNThhNTRkMTIwNDc4ZGRkZTljNmNjZDljMDg1YjUwYTkxMzI0OTZhNWZkZjU5MTNkYmU4ZWU',
  category: 'electronica'
});
productList.push({
  name: 'Teclado',
  price: 175,
  image: 'https://m.media-amazon.com/images/I/61aezyfO5cL._AC_SY355_.jpg',
  category: 'electronica'
});
productList.push({
  name: 'Vestido A',
  price: 185,
  image: 'https://img.freepik.com/foto-gratis/modelo-femenino-inspirado-falda-midi-bailando-placer-pared-rosa-chica-sensual-caucasica-blusa-moda-divirtiendose_197531-5280.jpg',
  category: 'ropa'
});
productList.push({
  name: 'Conjunto casual',
  price: 215,
  image: 'https://img.freepik.com/foto-gratis/senora-elegantes-pantalones-mezclilla-top-rayado-posando-espacio-naranja-disparo-cuerpo-entero-chica-pelirroja_197531-15326.jpg',
  category: 'ropa'
});
productList.push({
  name: 'Sombrilla',
  price: 150,
  image: 'https://img.freepik.com/fotos-premium/adolescente-chica-pelirroja-abrigo-impermeable-paraguas-aislado-sobre-fondo-blanco-pensando-idea_1368-251500.jpg',
  category: 'otros'
});
productList.push({
  name: 'Sofá',
  price: 950,
  image: 'https://img.freepik.com/foto-gratis/diseno-interiores-habitaciones_23-2148899445.jpg?w=360',
  category: 'muebles'
});
productList.push({
  name: 'Sillón',
  price: 450,
  image: 'https://img.freepik.com/fotos-premium/sala-estar-tiene-sillon-cuero-oscuro-sobre-fondo-pared-amarillo-vacio_41470-5006.jpg',
  category: 'muebles'
});
productList.push({
  name: 'Carrito',
  price: 250,
  image: 'https://http2.mlstatic.com/D_NQ_NP_681370-MLA45434648368_042021-O.webp',
  category: 'juguetes'
});
productList.push({
  name: 'Figuras pop anti estres',
  price: 90,
  image: 'https://falabella.scene7.com/is/image/Falabella/gsc_112655917_351215_1?wid=800&hei=800&qlt=70',
  category: 'juguetes'
});
productList.push({
  name: 'Tenis Nike',
  price: 390,
  image: 'https://img.freepik.com/fotos-premium/zapatos-moda-estilo-colores-fondo_77190-8753.jpg?w=2000',
  category: 'otros'
});
productList.push({
  name: 'Termo',
  price: 75,
  image: 'https://img.freepik.com/psd-premium/maqueta-termo-metalico-abierto-cerrado_1332-14515.jpg?w=2000',
  category: 'otros'
});

//creamos una función que guarde los nodos  html que se insertaran al DOM
// y pasamos como argumento a arr, es el array que se usaría en la función
function listaDeProductos(arr) {
  // alert("entra a crear las cards");
  // let cardsContainer2 = document.createElement('div');
  // cardsContainer2.classList.add('cards-container-2');
  for (product of arr) {
        
    productCard = document.createElement('div');
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

    const productCategory = document.createElement('p');
    productCategory.classList.add('categoria');
    productCategory.innerText = 'Categoría: ' + product.category;

    productInfo.append(productInfoDiv, productInfoFigure, productCategory);

    productCard.append(productImg, productInfo);

    cardsContainerDos.appendChild(productCard);
    cardsContainer.appendChild(cardsContainerDos);
    band1 = 1;
  }
}

//se manda llamar la función con el parámetro productList que representa el array a utilizar
listaDeProductos(productList);