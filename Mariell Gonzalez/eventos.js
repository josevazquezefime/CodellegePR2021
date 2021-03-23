var productos = [
    {

        name: "Iphone 12 Pro Max",
        brand: "Apple", 
        Description: "The new 2021 Iphone Max",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551226038992",
        Price: 18000,
        Stock: 15
    },
    {

        name: "Iphone 13 Pro Max",
        brand: "Apple", 
        Description: "The best Iphone",
        Image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1604343703000",
        Price: 18000, 
        Stock: 15
    }

];

$(function(){
    for(var i = 0; i < productos.length; i++) {
    const producto = productos[i];
    $('body').append(
`<div class="card mb-3 producto" onclick="MostrarDetalleProducto()">
<div class="row g-0">
  <div class="col-md-4">
  <img src="${producto.image}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${producto.brand} - ${producto.name} </h5>
      <p class="card-text">${producto.Description}</p>
      <p class="card-text"><small class="text-muted"> Stock: ${producto.stock}</small></p>
    </div>
  </div>
</div>
</div>`
    );
    }
});


function MostrarMensaje() {
    $('body').prepend(
`<div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`);
}

function MostrarDetalleProducto() {

    var modal = $(".modal");
    modal.find ("h5") .text ("New Apple Iphone 12 Max Pro");
    modal.find (".modal-body p") .text("Buy it now!");
    $('.modal').modal('toggle');
}

//selectores van con . --> se buscan aquellos elementos que tienen la clase modal .modal 