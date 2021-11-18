const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

function hasBeenRented(bookObject) {
    if (bookObject.rented > 0) {
        return true;
    }
    else {
        return false;
    }
}

function allHasBeenRented(booksArray) {
    booksArray.forEach(book => {
        if (book.rented == 0) {
            return false;
        }
    });
    return true;
}

function getMostRented(booksArray) {
    let rentedArray = [];
    booksArray.forEach( book => {
        rentedArray.push(book.rented);
    });
    rentedArray.sort();
    console.log(rentedArray);
    let maxRented = rentedArray[rentedArray.length-1];
    booksArray.forEach( book => {
        if (book.rented == maxRented) {
            let mostRentedBook = book;
            console.log("le livre le plus emprunté:");
            console.log(book);
            return mostRentedBook;
        }
    });
    let minRented = rentedArray[0];
    booksArray.forEach( book => {
        if (book.rented == minRented) {
            let lessRentedBook = book;
            console.log("le livre le moins emprunté:");
            console.log(book);
            return lessRentedBook;
        }
    });
}

function findBookById(booksArray, id) {
    booksArray.forEach( book => {
        if (book.id == id) {
            console.log("le livre 873495:");
            console.log(book);
        }
    });
}


console.log("Les livres ont ils tous été empruntés au moins une fois?");
console.log(allHasBeenRented(books));

console.log(getMostRented(books));
findBookById(books, 873495);
