console.log('* ---index.js virker--- *');








axios("https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=2LltgBkOQ8xwCTl7BKyOeMUCBRfkD5oy")
.then(arr => {
    
    let data = arr.data.response.docs.splice(0,100);
    
    
    for (var i = 0; i < data.length-data.length+12; i++){
        
        // console.log(data[i].section_name);
        let detailsContainer = document.getElementById('details__container');
        let summary = document.getElementById(data[i].section_name+'Section')
        let details = document.getElementById(data[i].section_name);
        
        if(!details){    
            
            detailsContainer.appendChild(document.createElement('details')).setAttribute('id',data[i].section_name);
            
            details = document.getElementById(data[i].section_name);
            
            details.appendChild(document.createElement('summary')).setAttribute('id',data[i].section_name+'Section')
        
            summary = document.getElementById(data[i].section_name+'Section')
            
            summary.setAttribute('class','news__option borderColor')
            summary.appendChild(document.createElement('div')).setAttribute('id','icon-text'+i)
            summary.appendChild(document.createElement('i')).setAttribute('class','fas fa-chevron-down interactionIcon-h')

            var iconText = document.getElementById('icon-text'+i);

            iconText.setAttribute('class', 'icon-category')
            iconText.appendChild(document.createElement('div')).setAttribute('id','icon_circle'+i);
            iconText.appendChild(document.createElement('h3')).setAttribute('id','summary_h3'+i);

            var iconCircle = document.getElementById('icon_circle'+i);
            var summaryH3 = document.getElementById('summary_h3'+i);

            iconCircle.setAttribute('class','news-icon__circle');
            summaryH3.setAttribute('class','interactionIcon-h');

            iconCircle.appendChild(document.createElement('i')).setAttribute('class','far fa-clone')
            summaryH3.innerHTML=data[i].section_name;
        };




            
            
            var newsSection = document.getElementById(data[i].section_name);
            
            newsSection.appendChild(document.createElement('div')).setAttribute('id','forSave'+i)

            var for_save = document.getElementById('forSave'+i)

            for_save.classList.add('forSave')

            for_save.appendChild(document.createElement('div')).setAttribute('id','article__wrapper'+i)
            

            var article__wrapper = document.getElementById('article__wrapper'+i)

            article__wrapper.setAttribute('class','borderColor article__wrapper')

            article__wrapper.appendChild(document.createElement('div')).setAttribute('id',data[i].section_name+i);
            
            var article = document.getElementById(data[i].section_name+i);
            
            // article.setAttribute('href',data[i].web_url)
            article.setAttribute('class','article borderColor');

            article.appendChild(document.createElement('a')).setAttribute('id','link'+i)
            article.appendChild(document.createElement('i')).setAttribute('id','iconSlide'+i)
            article.appendChild(document.createElement('i')).setAttribute('id','iconArchive'+i)

            var link = document.getElementById('link'+i)

            link.setAttribute('class','news-content')
            link.setAttribute('href',data[i].web_url)
            document.getElementById('iconSlide'+i).setAttribute('class','fas fa-chevron-left interactionIcon-h borderColor openIcon')
            document.getElementById('iconArchive'+i).setAttribute('class','fas fa-inbox interactionIcon-h borderColor archiveIcon')

            link.appendChild(document.createElement('div')).setAttribute('id',data[i].section_name+'Img'+i);
            link.appendChild(document.createElement('div')).setAttribute('id',data[i].section_name+'Text'+i);
            
            var articleText = document.getElementById(data[i].section_name+'Text'+i);
            var articleImg = document.getElementById(data[i].section_name+'Img'+i);
            
            articleText.setAttribute('class', 'news-content__text interactionIcon-h backgroundColor')
            articleImg.setAttribute('class', 'news-content__img')
            
            
            if(data[i].multimedia.length>0){
                articleImg.style.backgroundImage=`url("https://static01.nyt.com/${data[i].multimedia[0].legacy.xlarge}")`;
            }else{
                articleImg.style.backgroundImage='url("https://static01.nyt.com/vi-assets/images/share/1200x1200_t.png")'
            }
            
            
            
            articleText.appendChild(document.createElement('h5')).setAttribute('id',data[i].section_name+'H5'+i);
            articleText.appendChild(document.createElement('p')).setAttribute('id',data[i].section_name+'P'+i);
            
            var h5 = document.getElementById(data[i].section_name+'H5'+i)
            var p = document.getElementById(data[i].section_name+'P'+i)
            
            h5.innerHTML=data[i].headline.main;
            p.innerHTML=data[i].abstract;
            
            
        };
        

        
        
        document.getElementById('body').appendChild(document.createElement('script')).setAttribute('src','js/swipe.js')
        document.getElementById('body').appendChild(document.createElement('script')).setAttribute('src','js/saveArchive.js')
    });



