const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

function getSeventies(humanArray) {
    seventies = [];
    humanArray.forEach(human => {
        if (human.year >= 1970 && human.year < 1980) {
            seventies.push(human);
            console.log(human);
        }
    });
    return seventies;
}

function getFullNamesArray(humanArray) {
    fullNamesArray = [];
    humanArray.forEach(human => {
        str = human.first + " " + human.last;
        fullNamesArray.push(str);
    });
    return fullNamesArray;
}

function showAge(humanArray) {
    humanArray.forEach(human => {
        age = 2021 - human.year;
        console.log(`${human.first} ${human.last} aurait ${age} ans cette année.`)
    });
}

function orderByLastName(humanArray) {
    lastNamesArray = [];
    humanArray.forEach(human => {
        lastNamesArray.push(human.last);
    });
    return lastNamesArray.sort();
}

console.log(getSeventies(entrepreneurs));
console.log(getFullNamesArray(entrepreneurs));
showAge(entrepreneurs);
console.log(orderByLastName(entrepreneurs));