/*!
<div class="card shadow-sm h-100">
    <a href="#!">
        <img class="shadow-sm card-img-top" src="https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg"
            alt="..." />
    </a>
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
const mostradorProductos = document.querySelector('#mostrador');
const carrito = document.querySelector('#carrito');
const agregarCarrito = document.querySelector('#agregarCarrito');
const 

function displayProducto(producto){
    const card = document.createElement("div");
    const cardbody = document.createElement("div");
    const cardfooter = document.createElement("div");

    const linkImagen = document.createElement("a");
    const imagen = document.createElement("img");

    const nombreProducto = document.createElement("h6");
    const precioProducto = document.createElement("h5");

    const LinkAgregarCarrito = document.createElement("a");
    const AgregarCarrito = document.createElement("img");

    card.classList.add('card shadow-sm h-100');
    cardbody.classList.add('card-body shadow-sm');
    cardfooter.classList.add('mx-auto my-2');

    imagen.classList.add('shadow-sm card-img-top');


}
