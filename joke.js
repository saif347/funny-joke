const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

const getJokes = async ()=>{
    const res =await fetch(url);
    const data = await res.json();
    const joke = data.joke;
    const category = data.category;
    showJokes(joke, category);

}

getJokes();

const showJokes = (joke, category)=>{
    const displayJoke = document.getElementById('jokes-text');
    displayJoke.innerText = joke;
    const jokeCategory = document.getElementById('category');
    jokeCategory.innerText = `Category : ${category}`

}