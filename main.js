const accesskey="msSGFa4F6R37Ho4JSmr9oVzRx30W1laCmvzb9yW8KPw"
const inputEl=document.querySelector(".input-el")
const submitBtn=document.querySelector(".submit-btn")
const showMoreBtn=document.querySelector(".showMore-btn")

submitBtn.addEventListener("click" , () => {
     document.querySelector(".results").innerHTML=`
        `
    event.preventDefault()
    searchImages(inputEl.value)
})
let page=1

async function searchImages(userInput){
    const response=await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${userInput}&client_id=${accesskey}`)
   // page++
    const data=await response.json()
    console.log(data)
    let i=0
    while(i<9)
    {
        const imgAdd=data.results[i].urls.full
        document.querySelector(".results").innerHTML+=`
        <div><img src="${imgAdd}" alt="image"></div>
        `
        if(i==8){
            document.querySelector(".results").innerHTML+=`
            <div class="show-more">
            <button class="showMore-btn">SHOW MORE</button>
        </div>
        `
        }
        i++
    }
}
