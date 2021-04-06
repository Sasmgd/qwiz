const tabs=document.getElementById('tabs');
const contents=document.querySelectorAll('.content');
const changeclas=el=>{

    for(let i=0;i<tabs.children.length;i++){
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click',e=>{
    const carrtab=e.target.dataset.btn;
    changeclas(e.target);
    for(let i=0;i<contents.length;i++){
        contents[i].classList.remove('active');
        if(contents[i].dataset.content===carrtab){
            contents[i].classList.add('active');
        }
    }
})
const changeclass=el=>{

    for(let i=0;i<tabss.children.length;i++){
        tabss.children[i].classList.remove('active');
    }
    el.classList.add('active');
}