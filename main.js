class Producto {
    constructor(marca, precio, modelo, img) {
        this.marca = marca
        this.precio = precio
        this.modelo = modelo
        this.img
    }
}

let productos = [
    new Producto('Honda', '1000$', '2020','https/i'),
    new Producto('Yamaha', '500$', '2019'),
    new Producto('Rouser', '300$', '2024'),
    new Producto('Suzuki', '200$', '2018')
]
//Lo convierto en string

let moto_JSON = JSON.stringify(productos)

//Guardo la informacion en Storage//

localStorage.setItem('motos_stock', moto_JSON)

//Recupero de Storage

let moto_storage = localStorage.getItem('motos_stock')

// lo convierto en obj

let moto_obj = JSON.parse(moto_storage)

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

let container_cards = document.querySelector('#container')

productos.forEach((moto) => {
    let copia = document.querySelector('template').content.cloneNode(true)
    copia.querySelector('h5').innerText += moto.marca
    copia.querySelector('p').innerText += moto.precio

    copia.querySelector('button').addEventListener('click', () => {
        alert(`Compraste una ${moto.marca}`)
     
       
    })

    container_cards.appendChild(copia)



})

function comprar(marcaProducto) {
    let producto = productos.find(p => p.marca === marcaProducto);

    if (producto) {

        let enCarrito = carrito.find(p => p.marca === marcaProducto);

        if (enCarrito) {
            console.log(`El producto ${marcaProducto} ya esta en el carrito `);
        } else {
            // Agregar el producto al carrito

            carrito.push(producto);

            // Actualizar LocalStorage

            localStorage.setItem('carrito', JSON.stringify(carrito));
            console.log(`Producto agregado: ${producto.marca}`)
        }
    }else {
        alert(`Producto no encontrado: ${marcaProducto}`);

    }
}
