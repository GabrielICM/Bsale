const mostradorProductos = document.querySelector('#mostrador');
const carrito = document.querySelector('#carrito');
const agregarCarrito = document.querySelector('#agregarCarrito');
const url = 'http://localhost:3000/api/products';
addEventListeners();

function addEventListeners(){
    document.addEventListener('DOMContentLoaded',traerProductos);
}

function traerProductos(){
    fetch(`${url}`)
        .then(res => res.json())
        .then(data => displayProducto(data)) 
}

function displayProducto(producto){  
console.log(producto)
producto.forEach(product =>{
    const divCol = document.createElement('div');
    const card = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardFooter = document.createElement("div");

    const linkImagen = document.createElement("a");
    const imagen = document.createElement("img");

    const nombreProducto = document.createElement("h6");
    const precioProducto = document.createElement("h5");

    const linkAgregarCarrito = document.createElement("a");
    const agregarCarrito = document.createElement("img");

    //Se agregan clases
    divCol.classList.add('col-lg-4','col-md-6','mb-4','mt-5')
    card.classList.add('card','shadow-sm','h-100');

    imagen.classList.add('shadow-sm','card-img-top');
    
    cardBody.classList.add('card-body','shadow-sm');
    nombreProducto.classList.add('card-title','text-center','mt-3');
    precioProducto.classList.add('text-center')
    //Se agrega atributos
    cardFooter.classList.add('mx-auto','my-2');
    linkAgregarCarrito.setAttribute('href','#!')
    agregarCarrito.setAttribute('src','/img/outline_add_shopping_cart_black_24dp.png');


    if(producto.image !== 1){
        imagen.setAttribute('src',`${product.image}`);
    }
    nombreProducto.textContent = `${product.name}`;
    precioProducto.textContent = `$ ${product.price}`
 
    mostrador.appendChild(divCol);
    divCol.appendChild(card);
    card.appendChild(linkImagen);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    linkImagen.appendChild(imagen);
    cardBody.appendChild(nombreProducto)
    cardBody.appendChild(precioProducto)
    cardFooter.appendChild(linkAgregarCarrito);
    linkAgregarCarrito.appendChild(agregarCarrito);
    });
}


/*! --------Product example--------

<div class="col-lg-4 col-md-6 mb-4">
    <div class="card shadow-sm h-100">
        <a href="#!"><img class="shadow-sm card-img-top" src="https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg"
                alt="..." /></a>
        <div class="card-body shadow-sm">
            <h6 class="card-title text-center mt-3">Energetica MR BIG</h6>
            <h5 class="text-center">$ 1.990</h5>
        </div>
        <div class="mx-auto my-2 ">
            <a href="#!">
                <img  src="/img/outline_add_shopping_cart_black_24dp.png" alt="">
            </a>
        </div>
</div>
*/