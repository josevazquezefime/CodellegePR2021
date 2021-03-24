var productos = [
    {
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        description: "The new 2020 iPhone 12. This Max Pro version has a better camera",
        image: "https://images-na.ssl-images-amazon.com/images/I/71fJ-gmBZtL._AC_SX466_.jpg",
        price: 1800.50,
        stock: 15
    },
    {
        name: "Mi 11",
        brand: "Xiaomi",
        description: "The New 2021 Xiaomi Mi 11",
        image: "https://cdn.shopify.com/s/files/1/0512/1694/1248/products/CapturadePantalla2021-01-03ala_s_9.30.09_800x.png",
        price: 800,
        stock: 16
    },
    {
        name: "iPhone 12 Pro Max",
        brand: "Apple",
        description: "The new 2020 iPhone 12. This Max Pro version has a better camera",
        image: "https://images-na.ssl-images-amazon.com/images/I/71fJ-gmBZtL._AC_SX466_.jpg",
        price: 1800.50,
        stock: 15
    },
    {
        name: "Mi 11",
        brand: "Xiaomi",
        description: "The New 2021 Xiaomi Mi 11",
        image: "https://cdn.shopify.com/s/files/1/0512/1694/1248/products/CapturadePantalla2021-01-03ala_s_9.30.09_800x.png",
        price: 800,
        stock: 17
    }
];

$(function(){
    for (var i = 0; i < productos.length; i++) {
        const producto = productos[i];
        $('body').append(
        `<div class="card mb-3 producto" onclick="MostrarDetalleProducto(${i})">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${producto.image}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"> ${producto.brand} - ${producto.name}</h5>
                        <p class="card-text">${producto.description}</p>
                        <p class="card-text">
                            <small class="text-muted">In Stock: ${producto.stock} units</small>
                        </p>
                    </div>
                </div>
            </div>
         </div>`);
    }
});

function MostrarDetalleProducto(productIndex) {

    const producto = productos[productIndex];

    var modal = $('.modal');
    modal.find('h5').text(producto.brand + " - " + producto.name);
    modal.find('.modal-body p').text(producto.description);

    $('.modal').modal('toggle');
}

// function MostrarMensaje() {
//     $('body').prepend(
//     `<div class="alert alert-warning alert-dismissible fade show custom-alert" role="alert">
//             <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//             <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//      </div>`);
// }