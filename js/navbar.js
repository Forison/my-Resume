/*$(document).ready(function(){
//hide section three on window load 
  //$('#sectionThree').hide();
   $('#sectionThree').css('border','10px solid green');

//activate scroll event 

 $(window).scroll(function(){
 $var myScroll = $(document).scrollTop();
//condition of aninamtion
 if (myScroll =400) {
   $('#sectionThree').addClass('zoomIn');
 }
 //end condition for animatio    
});
//end of scroll event 
});
*/
$(document).ready(function(){
   $('#sectionTwo').hide();
   $('#ourMission').hide();
   $('#ourVision').hide();
   $('#ourCommittment').hide();
   $('#ourCom').hide();
   $('#sectionSeven').hide();
   $('#eighLeft').hide();
   $('#eighLeftOne').hide();
   $('#eighLeftTwo').hide();
     

$(window).scroll(function(){
 //nav un animation point 
      var winScroll=$(document).scrollTop();
     if (winScroll >50) {
      $('#sectionTwo').show('slow');
     }else{
      $('#sectionTwo').hide();
     }


     if (winScroll >1300) {
      $('#ourMission').show('slow');
      }else{
      $('#ourMission').hide();
     }
      // end of first if 

      //beg second if 
      if(winScroll >1300){
          $('#ourVision').show('slow');  
      }else{
      $('#ourVision').hide();
     }
      //end of anoda if

      //beg of if
        if (winScroll >1200) {
          $('#ourCommittment').show('slow');
        }else{
      $('#ourCommittment').hide();
     }
      //end of anoda

      //beg of anoda
          if (winScroll >1550) {
            $('#ourCom').show('slow');
      //end of anoda
     }else{
      $('#ourCom').hide();
     }

      //beg of anoda
          if (winScroll >1050) {
            $('#sectionSeven').show('slow');
          }

          if(winScroll>2000){
            $('#eighLeft').show('slow'); 
          }else{
           $('#eighLeft').hide();
          }
          if(winScroll>2200){
            $('#eighLeftOne').show('slow'); 
          }else{
            $('#eighLeftOne').hide();
           }
          if(winScroll>2500){
            $('#eighLeftTwo').show('slow'); 
          }else{
           $('#eighLeftTwo').hide();
          }
      //end of anoda
     //end of nuav Un nav bar
 //end condition for animatio    
});















//
 particlesJS.load('footer','particles.json',function(){
             console.log('particles loaded...');
               });
  });