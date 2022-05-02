// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";

// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {searchnews,append} from "../scripts/fetch.js"
document.querySelector("#navbar").innerHTML=navbar();

let search=(e)=>{
    
    if(e.key==="Enter"){
        let query=document.querySelector("#search_input"). value;
        let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`
        // let container=document.querySelector("#results")
        searchnews(query,url).then((data) => {
         
           //console.log("data:",data.articles,container)
        //    let newdata=data.articles;
           localStorage.setItem("searchdata",JSON.stringify(data.articles))
           window.location.href="./search.html"
          // append(data.articles,container)
        })
    }
}
document.querySelector("#search_input").addEventListener("keydown",search)
let sidebar=document.querySelector("#sidebar").children
function cSearch(){
    let cc=this.id;
    console.log(cc)
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${cc} `;
    let container=document.querySelector("#results");
    searchnews(cc,url).then((data)=>{
        console.log(data.articles);
        append(data.articles,container)

    })

}
for (let el of sidebar){
    el.addEventListener("click",cSearch)
}