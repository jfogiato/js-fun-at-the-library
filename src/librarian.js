class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name, bool) {
    return (bool ?  `Good morning, ${name}!` : `Hello, ${name}!`)
  }
  findBook(bookString) {
    var genreArray = Object.keys(this.library.shelves)
    for (var i = 0; i < genreArray.length; i++) {
      var genre = Object.keys(this.library.shelves)[i]
      if (this.library.shelves[genre][i].title === bookString) {
        this.library.shelves[genre].splice(i, 1)
        return `Yes, we have ${bookString}`
      } else {
        return `Sorry, we do not have ${bookString}`
      }
    }
  }
  calculateLateFee(days) {
    return Math.ceil(days * .25)
  }
}

// ***createLibrary & checkoutBook FUNCTIONS FROM LIBRARY.JS FOR DATA STRUCTURE REFERENCE***
// function createLibrary(name) {
//   return {
//     name: name,
//     shelves: {
//       fantasy: [{title: 'The Fifth Season', genre: 'fantasy'}],
//       fiction: [],
//       nonFiction: []
//     }
//   }
// }

module.exports = Librarian;