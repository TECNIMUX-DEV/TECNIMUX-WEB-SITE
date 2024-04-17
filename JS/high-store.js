window.addEventListener('scroll', function() {
    var pI = document.getElementById('pI');
    if (window.scrollY > 0) {
        pI.style.display = 'none';
    }
    else {
        pI.style.display ='block';
    }
});

let value
if (typeof window !== 'undefined') {
  value = window.localStorage.getItem('key')
}