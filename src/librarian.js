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
      var genre = Object.keys(this.library.shelves)[i] // returns keys of all genres within the shelf object as an array, then looks at only the i index of that array and returns one individual genre/key based on the iteratoin of the for loop
      var shelf = this.library.shelves[genre] // returns all properties of the specific genre object
      var isHere = 1
      for (var j = 0; j < shelf.length; j++) {
        if (shelf[j].title === bookString) {
          shelf.splice(j, 1)
          isHere = 0 
          return `Yes, we have ${bookString}`
        }
      }
    }
    if (isHere === 1) {
      return `Sorry, we do not have ${bookString}`
    }
  }

  calculateLateFee(days) {
    return Math.ceil(days * .25)
  }
}


module.exports = Librarian;