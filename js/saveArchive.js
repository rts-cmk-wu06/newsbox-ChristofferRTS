console.log('* ---saveArchive.js virker--- *');

var icons = document.querySelectorAll('.archiveIcon')



icons.forEach(el => el.addEventListener('click',e =>{
    
    console.log(e.target.closest('.forSave'))
    function remove(){
        e.target.closest('.forSave').remove()
    };


    localStorage.setItem(e.target.closest('.forSave').id,e.target.closest('.forSave').innerHTML)

    e.target.closest('.forSave').classList.add('save');
    

    setTimeout(remove,710);

}));
