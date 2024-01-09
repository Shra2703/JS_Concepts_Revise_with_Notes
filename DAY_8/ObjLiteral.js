// this type of object creation is called object literal

const movie = {
    // properties
    title: "The Avenger",
    year: 2023,
    genre:"Sco-fi",
    cast: ["Robert downy jr.", "Shraddha Goyal"],
    // methods
    working: function(){
        console.log(`title: ${movie.title}`)
    },

    getDetailsMovie: function(details){
        console.log(movie[details]);
    }
}

// accessing the properties and function of the objects
console.log(movie.title);
console.log(movie.working())

console.log(movie.getDetailsMovie("year"));