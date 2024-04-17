 // document.addEventListener('DOMContentLoaded', Function ()}): 
 
 window.addEventListener('scroll', function() {
    var header = document.getElementById('header-01');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 850) {
        header.style.boxShadow = '2px 2px 10px #64409286';
    } else {
        header.style.boxShadow = '2px 2px 10px #ffffff86';
    }
}); 

let value
if (typeof window !== 'undefined') {
  value = window.localStorage.getItem('key')
}






