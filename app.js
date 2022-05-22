document.querySelector('#modals .overlay').addEventListener('click', function(){
    let modal = document.getElementById('modals');
    modal.classList.remove('active');
    Object.values(modal.children).forEach(item=>{
        item.classList.remove('active');
    })
});

document.querySelectorAll('[data-target]').forEach(item=>{
    item.addEventListener('click', function(){
        document.getElementById(item.getAttribute('data-target')).classList.add('active');
    })
})

document.getElementById('item').addEventListener('click', function(){
    openModal('placeOrder')
})

function openModal(item) {
    document.getElementById('modals').classList.add('active');
    document.querySelector('#modals .' + item).classList.add('active');
}