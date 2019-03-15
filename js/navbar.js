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


$(document).ready(function(){

  //hide who by default 
  $("#left").hide()

  animWho()
})