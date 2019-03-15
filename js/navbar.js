function animWho(){

  $(window).scroll(function(){


  var scrollLevel=$(document).scrollTop();
  var who=$("#left")

  if (scrollLevel>=130) {
   //show who left by adding a class
   who.show("slow")
  }else{
    who.hide("slow")
  }

  })


}






function navbar() {
  $(window).scroll(function(){

     var scrollLevel=$(document).scrollTop();
     var who=$("#mynavbar")

   
     if (scrollLevel++) {
      who.css('background-color','transparent')
     } else  {
              who.css('background-color','white')
     

  }


})
}

$(document).ready(function(){

  //hide who by default 
  $("#left").hide()
  navbar()
  animWho()
})