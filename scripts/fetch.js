let searchnews=async(query,url)=>{

try{
    
    let res=await fetch(url)
    let  data= await res.json();
    return data;
}catch(err){
    console.log("err:",err)
}

}
let append = async (data,container)=> {
    container.innerHTML=null;
    data.map(({urlToImage,title,description,source:{id}})=>{

        let div=document.createElement("div");
        div.setAttribute("class","news");
        div.style.cursor="pointer"
        div.onclick = ()=>{
            showNews(singleNews)
        }
        let singleNews={
            urlToImage,title,description
        };

        function showNews(singleNews){
            window.location.href='./news.html'
            localStorage.setItem("news",JSON.stringify(singleNews))
        }
        let left=document.createElement("div");
        let image=document.createElement("img");
        image.src=urlToImage;
        left.append(image);

        let right=document.createElement("div");
        let newsTitle=document.createElement("h4");
        newsTitle.innerText=title;

        let decs=document.createElement("p")
        decs.innerText=description
        right.append(newsTitle,decs);
        div.append(left,right)
        container.append(div)
    
    })
}
export{searchnews,append};