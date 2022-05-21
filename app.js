document.querySelector('#modals .overlay').addEventListener('click', function(){
    let modal = document.getElementById('modals');
    modal.classList.remove('active');
    Object.values(modal.children).forEach(item=>{
        item.classList.remove('active');
    })
});