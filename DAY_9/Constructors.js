// Problem with object literals are that if we want to perform the repetative task then we need to construct it again and again.

// #1
function movie1(title, year){
    const movie = {
        // properties
        title: title,
        year: year,
        genre:"Sco-fi",
        cast: ["Robert downy jr.", "Shraddha Goyal"],
        // methods
         working(){
            console.log(`title: ${movie.title}`)
         }
    }
    return movie
}

const movie2 = movie1("The avengers", 2023);
console.log(movie2);
console.log(movie2.title);


// #2 using constructor function
function Movie(title, year){
    this.title = title;
    this.year = year;

    this.getDetails = function(){
        console.log(`title: ${movie.title}`)
    }
}


const movie3 = new Movie("Avatar",78);
movie3.name = "Hello"; // by this we can add the properties in the constructor outside it

console.log(movie3);
console.log(movie3.title);