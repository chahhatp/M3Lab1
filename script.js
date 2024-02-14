//1
var favoriteMovies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar"
];
console.log(favoriteMovies[1]);

//2
var movies = new Array(5);
movies[0] = "Frozen";
movies[1] = "Epic";
movies[2] = "Kung fu Panda";
movies[3] = "Blended";
movies[4] = "Interstellar";
console.log("First favorite movie:", movies[0]);

//3
movies.splice(2, 0, "Barbie");
console.log("Number of movies in the array:", movies.length);

//4
var movies = [];
movies[0] = "Frozen";
movies[1] = "Epic";
movies[2] = "Kung fu Panda";
movies[3] = "Blended";
movies[4] = "Interstellar";
delete movies[0];
console.log("Movies array after deleting the first movie:", movies);

//5
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
for (var index in movies) {
    console.log("Movie:", movies[index]);
}

//6
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
for (var movie of movies) {
    console.log("Movie:", movie);
}

//7
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
movies.sort();
for (var movie of movies) {
    console.log("Movie:", movie);
}

//8
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
console.log("Movies I like:");
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
var leastFavMovies = [
    "X-Men",
    "Victoria",
    "Omen"
];
console.log("\nMovies I regret watching:");
for (var j = 0; j < leastFavMovies.length; j++) {
    console.log(leastFavMovies[j]);
}

//9
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
console.log("Movies I like:");
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
var leastFavMovies = [
    "X-Men",
    "Victoria",
    "Omen"
];
console.log("\nMovies I regret watching:");
for (var j = 0; j < leastFavMovies.length; j++) {
    console.log(leastFavMovies[j]);
}
var allMovies = movies.concat(leastFavMovies);
console.log("\nMerged and reverse sorted movies list:");
allMovies.sort().reverse().forEach(function(movie) {
    console.log(movie);
});


//10
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
console.log("Movies I like:");
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
var leastFavMovies = [
    "X-Men",
    "Victoria",
    "Omen"
];
console.log("\nMovies I regret watching:");
for (var j = 0; j < leastFavMovies.length; j++) {
    console.log(leastFavMovies[j]);
}
var allMovies = movies.concat(leastFavMovies);
console.log("\nMerged and reverse sorted movies list:");
allMovies.sort().reverse().forEach(function(movie) {
    console.log(movie);
});
var lastMovie = allMovies.slice(-1)[0];
console.log("\nLast movie in the merged array:", lastMovie);

//11
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
console.log("Movies I like:");
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}
var leastFavMovies = [
    "X-Men",
    "Victoria",
    "Omen"
];
console.log("\nMovies I regret watching:");
for (var j = 0; j < leastFavMovies.length; j++) {
    console.log(leastFavMovies[j]);
}
var allMovies = movies.concat(leastFavMovies);
console.log("\nMerged and reverse sorted movies list:");
allMovies.sort().reverse().forEach(function(movie) {
    console.log(movie);
});
var lastMovie = allMovies.slice(-1)[0];
console.log("\nLast movie in the merged array:", lastMovie);

var firstMovie = allMovies.shift();
console.log("\nFirst movie in the merged array:", firstMovie);

//12
var movies = [
    "Frozen",
    "Epic",
    "Kung fu Panda",
    "Blended",
    "Interstellar",
    "Migration",
    "Terminator"
];
console.log("Movies I like:");
for (var i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

var leastFavMovies = [
    "X-Men",
    "Victoria",
    "Omen"
];

console.log("\nMovies I regret watching:");
for (var j = 0; j < leastFavMovies.length; j++) {
    console.log(leastFavMovies[j]);
}

var dislikeIndices = [];
for (var k = 0; k < leastFavMovies.length; k++) {
    var index = allMovies.indexOf(leastFavMovies[k]);
    dislikeIndices.push(index);
}

console.log("\nIndices of movies I do not like:", dislikeIndices);

var likeMoviesToAdd = ["Forrest Gump", "The Lord of the Rings", "The Avengers"];

for (var l = 0; l < dislikeIndices.length; l++) {
    var indexToAdd = dislikeIndices[l];
    movies[indexToAdd] = likeMoviesToAdd[l];
}

console.log("\nUpdated movies array:");
for (var m = 0; m < movies.length; m++) {
    console.log(movies[m]);
}

//13
var movies = [
    ["Frozen", 1],
    ["Epic", 2],
    ["Kung fu Panda", 3],
    ["Blended", 4],
    ["Interstellar", 5]
];
var movieNames = movies.filter(function(movie) {
    return typeof movie[0] === 'string'; 
}).map(function(movie) {
    return movie[0];
});
console.log("Filtered movie names:", movieNames);

//14
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
var showEmployee = function(array) {
    console.log("Employees:");
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
};
showEmployee(employees);

//15
function filterValues(array) {
    function filterCallback(value) {
        return value !== false && value !== null && value !== 0 && value !== '';
    }
    return array.filter(filterCallback);
}

// Test Data
console.log(filterValues([5, '', 'spikk', true, null, false, 0]));


//16

function getRandomItemFromArray(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

// Example usage:
var numericArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var randomItem = getRandomItemFromArray(numericArray);
console.log("Random item from the array:", randomItem);

//17
function getLargestNumber(array) {
    return Math.max(...array);
}
// Example usage:
var numericArray = [6,4,78,5,9,63,77,7,8];
var largestNumber = getLargestNumber(numericArray);
console.log("Largest number in the array:", largestNumber);
