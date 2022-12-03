class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(name, bool) {
    return (bool ?  `Good morning, ${name}!` : `Hello, ${name}!`)
  }
  findBook(bookString) {
    var genreArray = Object.keys(this.library.shelves) // returns array of shelves labeled by genre to be used in the loop as the number of times to loop through and check each shelf
    for (var i = 0; i < genreArray.length; i++) {
      var genre = Object.keys(this.library.shelves)[i]
      var shelf = this.library.shelves[genre]
      for (var j = 0; j < shelf.length; j++) {
        if (shelf[i].title === bookString) {
          shelf.splice(i, 1)
          return `Yes, we have ${bookString}`
      } else {
        return `Sorry, we do not have ${bookString}`
      }
      }
    }
  }
  calculateLateFee(days) {
    return Math.ceil(days * .25)
  }
}


module.exports = Librarian;