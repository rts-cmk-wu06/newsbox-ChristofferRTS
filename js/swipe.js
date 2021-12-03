console.log('* ---swipe.js virker--- *');

let details = document.querySelector('.details');

    document.querySelector(".archiveIcon").addEventListener("click", (e) => {
        const article = e.target.closest(".article");

        article.classList.add('slideOpen');

        console.log('message');
      });
