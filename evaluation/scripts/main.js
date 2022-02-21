async function apiCall(url) {

try {
    
    let res = await fetch(url);
    let data = await res.json();

    return data;

} catch (error) {
    console.log(error)
}
    //add api call logic here


}


function appendArticles(articles, main) {
    main.innerHtml = null;
    articles.map(function(el){

        let div = document.createElement("div");
        div.id = "news";

        let title = document.createElement("p");
        title.innerHTML = el.title;

        let desc = document.createElement("p");
        desc.innerHTML = el.description;

        let image = document.createElement("img");
        image.src = el.urlToImage;

        div.addEventListener("click",function(){
            localStorage.setItem("article",JSON.stringify(el));
            window.location.href = "news.html";
        })

        div.append(title,desc,image);
        main.append(div);

    })
    //add append logic here

}

export { apiCall, appendArticles }