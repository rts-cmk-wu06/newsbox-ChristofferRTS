console.log('* ---swipe.js virker--- *');

var icons = document.querySelectorAll('.openIcon')


icons.forEach(el => el.addEventListener('click',e =>{
  const article = e.target.previousElementSibling;
  if(!article.classList.contains('slideOpen')){
    
      article.classList.remove('slideClose')
      e.target.classList.remove('spinBack')
      

      e.target.classList.add('spin');
      article.classList.add('slideOpen');
  
      console.log('open');
  }else{
      article.classList.remove('slideOpen')
      e.target.classList.remove('spin')
      
      article.classList.add('slideClose');
      e.target.classList.add('spinBack');

      console.log('close');
  }
}));
