$(function(){
   $(".btn1").click(function(){
      alert("Text is:" + $("h1").text());  
   }); 
});

$(function(){
   $(".btn2").click(function(){
      alert("Html is:" + $("h1").html()); 
   }); 
});

$(function(){
   $(".btn3").click(function(){
      alert("Value is: " + $("input").val());  
   }); 
});
$(function(){
   $(".btn4").click(function(){
      alert("Attribute is: " + $("a").attr("href"));  
   }); 
});
