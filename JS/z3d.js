// All Filters
let containerAllFilters = document.getElementById('container-all-filters');

const btnOpenFilters = document.getElementById('btn-open-filters');

let stateToggleFilterAll = true;
btnOpenFilters.addEventListener('click', () => {

    if (stateToggleFilterAll) {
        containerAllFilters.style.display = 'flex';
    } else {
        containerAllFilters.style.display = 'none';
    }
    stateToggleFilterAll = ! stateToggleFilterAll;
})


    const modalPrevImages = document.getElementById('modal-prev-images');
    const itemOpen = document.getElementById('item-open');
    const closeModalItem = document.querySelector('.close-modal-item');
    const txItem = document.querySelectorAll('.tx-item');
    document.addEventListener('DOMContentLoaded', function() {
        txItem.forEach(txItem => {
            txItem.classList.add('animation');
        });
});

    const image = document.querySelectorAll('.image');

        txItem.forEach(txItem => {
            txItem.addEventListener('click', () => {
            modalPrevImages.style.display = 'block';
            itemOpen.src = txItem.src;
            document.body.classList.add('overflow-hidden');
            itemOpen.classList.add('container-images');
            txItem.classList.add('visible');
})});


closeModalItem.addEventListener('click', () => {
    modalPrevImages.style.display = 'none';
    document.body.classList.remove('overflow-hidden');

});


modalPrevImages.addEventListener('click', () => {
    modalPrevImages.style.display = 'none';
    document.body.classList.remove('overflow-hidden');
});

// Add animation to bottom
// window.addEventListener('load', function() {
//     setTimeout(function() {
//         document.getElementById('btn-open-filters').scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     }, 100); 
// })
