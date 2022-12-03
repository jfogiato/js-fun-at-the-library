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
      var shelf = this.library.shelves[genre]
      if (shelf[i].title === bookString) {
        shelf.splice(i, 1)
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


module.exports = Librarian;