function shelfBook(title, shelf) {
    if (shelf.length < 3) {
      return shelf.unshift(title)
    }
}

function unshelfBook(name, shelf) {
 for (i = 0; i < shelf.length; i++) {
  if (name === shelf[i].title) {
    return shelf.splice(i,1)
  }
 }
}

function listTitles(shelf) {
  var newShelf = []
  for (i = 0; i < shelf.length; i++) {
    if (i < shelf.length - 1) {
      newShelf += `${shelf[i].title}, `
    } else {
      newShelf += `${shelf[i].title}`
    }
  }
  return newShelf
}

function searchShelf(shelf, name) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === name) {
      return true
    }
  }
return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};