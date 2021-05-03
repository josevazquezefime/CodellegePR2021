$(function(){
    $.ajax({
        type: "GET",
        url: "/products/all",
        success: function(products){
            var body =  $(document.body);
            for (var i = 0; i < products.length; i++){
                const producto = products[i];
                console.log(producto);
                //body.append(`<div>${ producto.name } - ${ producto.description }</div>`)
                body.append(`
                    <div class="card product-card">
                        <h5 class="card-header">${producto.name}</h5>
                        <div class="card-body">
                        <h5 class="card-title">${producto.description}</h5>
                        <p class="card-text"${producto.price}</p>
                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                        </div>
                    </div>`)
            }
            console.log(products);
        },
        error: function (error) {
            console.log('Ha ocurrido un error');
        }
    });

    $('#nav-title').text('JQuery hizo esto :0');
});