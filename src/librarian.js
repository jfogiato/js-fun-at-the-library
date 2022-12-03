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
    for (var i = 0; i < genreArray.length; i++) { // loop running according to the length of the array of shelves
      var genre = Object.keys(this.library.shelves)[i] // returns keys of all genres within the shelf object as an array, then looks at only the i index of that array and returns one individual genre/key based on the iteratoin of the for loop
      var shelf = this.library.shelves[genre] // returns all properties of the specific genre object
      var isHere = 1 // sets a new variable to the value of 1 to be used within the "j" for loop
      for (var j = 0; j < shelf.length; j++) { // loop runs according to the length of the specific genre shelf
        if (shelf[j].title === bookString) { // checks if the genre object [title] property at index j is equal to the bookString (value we passed as an argument)  
          shelf.splice(j, 1) // if it IS equal, that means we found that book, so we want to remove it from the array, otherwise, we go back to the "i" loop and increment by 1 to check the next shelf index
          isHere = 0 // reset variable to 0 
          return `Yes, we have ${bookString}` // return confirmation, end the loop
        }
      }
    }
    if (isHere === 1) { // if the entire j loop runs and never finds the book, isHere is never changed and will still be one. If that is the case, then we know we've looped through all books and shelves without finding the book. 
      return `Sorry, we do not have ${bookString}`
    }
  }

  calculateLateFee(days) {
    return Math.ceil(days * .25)
  }
}


module.exports = Librarian;