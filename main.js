
//////////
function selectNumber() {  
     var array = document.querySelectorAll("number");  
     for(var i = 0; i < array.length; i++) {  
       $(array[i]).html(i+1 + ") ");  
     }  
 }  

 selectNumber();  
 $("ul").on("click", "li", function () {  
   $(this).toggleClass("completed");  
 });  

 $("ul").on('click', "span", function (event) {  
   event.stopPropagation();  
   $(this).closest("li").fadeOut(500,function() {  
    $(this).remove();  
     selectNumber()
   });  
 });  

 $(".removeall").on('click', function (event) {  
     $("li").fadeOut(500, function() {  
       $(this).remove()
     });  
 });  

 $("input[type='text']").keypress(function(event) {  
   if(event.which === 13) {  
     var todoText = $(this).val();  
     if( $(this).val() !== "") {  
     $("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span>" + "<number></number>" + todoText + "</li>");  
       }  
     selectNumber();  
     $(this).val("");  
   }  
 }); 

 $(".add").click(function() {  
   $("input[type='text']").fadeToggle(200);  
 });  