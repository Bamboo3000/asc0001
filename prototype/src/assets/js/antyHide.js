

// $(document).ready(function() {
//     var x = window.innerWidth;
//     console.log(x);

//     if(x >= 991 ){
//         $("#navbarCollapse").css({"-webkit-transition": " none",
//                                  "transition" : "none" });   
//     }
// });

jQuery(window).on('load', function() { // <-- dzięki temu wszystko wykona się dopiero jak strona będzie w pełni załadowana, czyli jQuery będzie na pewno załadowane.
    
    $("#navbarCollapse").find('.navbar-nav').find('li > a').on('click', function() { // <-- Szukamy elementu a w menu i dopisujemy mu funkcję po kliknięciu
        if( $(window).width() <= 991 ) { // <-- Sprawdzamy czy okno jest wystarczająco małe
            $("#navbarCollapse").collapse('hide'); // <-- Uyzywamy natywnej funkcji collapse, która jest w dokumentacji Bootstrap'a
        }
    });

});