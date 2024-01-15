const btn = document.querySelector('.btn');
const quote = document.querySelector('.quote');
const url = 'https://api.quotable.io/quotes/random';

async function FetchQuotes(){
    try{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    quote.innerText = data[0].content;
    } catch(error){
        if (error instanceof TypeError && error.message === "Failed to fetch") {
            alert("Отсутствует подключение к интернету");
        } else {
            console.log(error);
        }
    }
}

btn.addEventListener('click', ()=>{
    FetchQuotes();
});


