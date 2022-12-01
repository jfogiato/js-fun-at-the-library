function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book) {
  var shelf = book.genre
  return library.shelves[shelf].unshift(book)
}

// function checkoutBook(library, title, genre) { 
//     var bookGrab = library.shelves[genre].findIndex((book) => book.title === title)
//     if (bookGrab === -1) {
//       return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
//     } else {
//       library.shelves[genre].splice(bookGrab, 1)
//       return `You have now checked out ${title} from the ${library.name}`
//     }
// }

function checkoutBook(library, title, genre) {
  var shelf = -1
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === title) {
      shelf = i
    }
  } if (shelf === -1) {
    return `Sorry, there are currently no copies of ${title} available at the ${library.name}`
  } else {
    library.shelves[genre].splice(shelf, 1)
    return `You have now checked out ${title} from the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};