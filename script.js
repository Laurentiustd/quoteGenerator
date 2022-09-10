function getQuote(){
    return fetch("https://api.quotable.io/random")
    .then((response)=>{
     return response.json()
    })
    .then((response)=>{
        return response
    })
}

function updateUI(response){
    const cards=`<p id="text">
                ${response.content}
                    </p>
                    <p id="author">- ${response.author}</p>`;

    document.querySelector(".quote").innerHTML = cards;
}

const randColor = () =>  {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

document.querySelector(".new-quote").addEventListener('click', async()=>{
    const getQuoteVar = await getQuote();
    updateUI(getQuoteVar);
    document.querySelector(":root").style.setProperty("--color", randColor());

})
