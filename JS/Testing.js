$(document).ready(function() {
    
    function showPopup(){
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
    }
    
    $("#Btn-Close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });
    
    $(".B-Open").click(showPopup);
    
    setTimeout(showPopup, 5000);
    
    });