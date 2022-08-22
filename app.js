/*  modal   */
function openModal(item) {
    document.getElementById('modals').classList.add('active');
    document.querySelector('#modals .' + item).classList.add('active');
}
document.querySelector('#modals .overlay').addEventListener('click', function(){
    let modal = document.getElementById('modals');
    modal.classList.remove('active');
    Object.values(modal.children).forEach(item=>{
        item.classList.remove('active');
    })
});

/*  target-group system   */
document.querySelectorAll('[data-target]').forEach(item=>{
    item.addEventListener('click', function(){
        let target = document.querySelector(item.getAttribute('data-target'));
        document.querySelectorAll(`[data-group=${target.dataset.group}]`).forEach(i=>{
            i.classList.remove('active');
        })
        target.classList.add('active');
    })
})

/*  onclick system  */
document.querySelectorAll(`[data-onclick]`).forEach(i=>{
    i.addEventListener('click', ()=>{
        eval(i.dataset.onclick)        
    })
})