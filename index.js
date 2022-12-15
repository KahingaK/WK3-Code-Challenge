let baseURL = "http://localhost:3000";
let filmsEndpoint = "/films";

// post url [baseurl + endpoint]
let url = `${baseURL}${filmsEndpoint}`;
console.log(url);

function getFilms() {
    
 fetch(url)
    .then(res => res.json())    
    .then(films => films.forEach(film => renderOneFilm(film) ))

    
    
} 

getFilms()

// Function to render the movie details box
  
function renderOneFilm(film){
    
    
    
    let filmBox = document.createElement("li")
     
    filmBox.className = "card"
    filmBox.innerHTML = `
        
        <div class = "details">
            <img id = "img" src = "${film.poster}">
            <h4>Title: ${film.title}</h4>
            <p>Runtime: ${film.runtime}</p>
            <p>Capacity: ${film.capacity}</p>
            <p>Showtime: ${film.showtime}</p>
            <p>Tickets sold: ${film.tickets_sold}</p>
            <p>Description: ${film.description}</p>
            <button id = "buttons" > Buy Tickets </button>
            

        </div>
        <br/>

    `
   
    document.querySelector("#movie-list").appendChild(filmBox) 
    

}
 function capacityCheck() {
    fetch(url)
    .then(res => res.json())    
    .then(data=> (data))
    let availableTickets=film.capacity-film.tickets_sold 
    let tickets = document.getElementById(buttons)

    
       
   
    ticket.addEventListener('click',()=>{
        if (availableTickets>0){
        p.textContent=`Available tickets: ${--availableTickets}`
        }
        else{
            p.textContent='Sold Out'
        }
    })
    
 }
function getList(names) {
    fetch(url)
    .then(res => res.json())    
    .then(films => names.forEach(film => getList(names) ))

    for (names of films) {

        
    }
}




function initialize() {

    films.forEach(film => renderOneFilm(film) );
    
}   