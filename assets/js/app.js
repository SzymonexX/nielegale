function filter(){
    
    var filterValue, input, ul,li,p,i;
     input = document.getElementById("search");
     filterValue = input.value.toUpperCase();
    ul = document.getElementById("Menu");
     li = ul.getElementsByTagName("li");

        for (i = 0 ; i < li.length ; i++){
            p = li[i].getElementsByTagName("p")[0];
            if(p.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
                
            }else{
                li[i].style.display = "none";
            }
        }
    }


    var button, tlo, input, li, content

    ul = document.getElementById("Menu");
    tlo = document.querySelector('body');
    input = document.querySelector("#search");
    button = document.querySelector('.button');
    content = document.querySelector('.container');
    
    button.onclick = function(){

    button.classList.toggle('darkmode--button')
    tlo.classList.toggle('darkmode--body')
    input.classList.toggle('darkmode--input')
    content.classList.toggle('darkmode--container')
   
    }

    $( ".button" ).on("click", function() {
        if( $( "ul li" ).hasClass( "darkmode--li" )) {
            $( "ul li" ).removeClass( "darkmode--li" );
        } else {
            $( "ul li" ).addClass( "darkmode--li" );
        }
    });

    $( ".button" ).on("click", function() {
        if( $( "ul li p" ).hasClass( "darkmode--p" )) {
            $( "ul li p" ).removeClass( "darkmode--p" );
        } else {
            $( "ul li p" ).addClass( "darkmode--p" );
        }
    });

    $( ".button" ).on("click", function() {
        if( $( "ul li p strong" ).hasClass( "darkmode--strong" )) {
            $( "ul li p strong" ).removeClass( "darkmode--strong" );
        } else {
            $( "ul li p strong" ).addClass( "darkmode--strong" );
        }
    });

    $( ".button" ).on("click", function() {
        if( $( "footer" ).hasClass( "darkmode--footer" )) {
            $( "footer" ).removeClass( "darkmode--footer" );
        } else {
            $( "footer" ).addClass( "darkmode--footer" );
        }
    });

    function change (iconID){
        if(document.getElementById(iconID).className=="fa-solid fa-sun"){
          document.getElementById(iconID).className = "fa-solid fa-moon";
        }else{
          document.getElementById(iconID).className = "fa-solid fa-sun";
        }
      }

      console.log("Załadowano Wszystko");
      console.image("http://i.imgur.com/hv6pwkb.png");

      /*$(document).keyup(function(event) {
        if (event.which === 75) {
            alert('Enter is pressed!');
        }
    });*/