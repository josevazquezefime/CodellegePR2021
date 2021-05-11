$(function() {
   $.ajax({
       type: "GET",
       url:"/products/all",
       success: function (response) {
            console.log(products);          
       },
       error: function (error) {
           console.log('error ocurrido');
       }
   });
});