console.log('Hello World!');
// 8008361acab1446592fff8ea9a7567e5

// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '8008361acab1446592fff8ea9a7567e5';

//grab the news container
let newsAccordion = document.getElementById('accordionExample');

//get post a request for getting the news from API
let xhr = new XMLHttpRequest();
xhr.open('get',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);
console.log(xhr);

//what to do when response is ready
xhr.onload = function(){
   if(this.status === 200){
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      console.log(articles);
      let newsHtml = "";
      articles.forEach(function(element,index){
         
         let news = `<div class="accordion-item">
         <h2 class="accordion-header" id="heading${index}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
               <b>Breaking News ${index + 1} : </b> ${element['title']}
            </button>
         </h2>
         <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
            <div class="accordion-body">
               ${element["content"]}
           <a href="${element["url"]}"target="_blank">read more</a>
            </div>
         </div>
      </div>`;
      newsHtml += news;
      });
      newsAccordion.innerHTML += newsHtml;
   }
   else{
      console.log('some error occured');
   }
}

// sending xhr request
xhr.send();

