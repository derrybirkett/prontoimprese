/* Custom JS */


$(document).ready(function() {

    
    /*

    Usher
    Classes with .usher class need a data-target and will open/close that target div

    */

    $(".usher").on("click", function() {
        target = $(this).data("target");
        $(target).slideToggle();
        return false;
    });


    /* 

    Tooltips 

    */

    $('.tooltipped').tooltip({
       delay: { show: 500, hide: 100 } 
    });

});
