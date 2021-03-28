const elRatingsOutput = document.querySelector('#ratingOutput');
const elFormNew = document.querySelector('#formNewRating');
const elNewMovie = document.querySelector('#txtNewMovie');
const elNewRating = document.querySelector("#txtNewRating")
const elNewOutput = document.querySelector('#formNewOutput');
const elUpdateOutput = document.querySelector('#formUpdateOutput');
const elBtnShowRatings = document.querySelector('#btnShowRatings');
let ratings = [];

function newRating (event) {
    let newRating = elNewMovie.value + " - " + elNewRating.value + " ⭐";
    ratings.push(newRating);

    elNewOutput.textContent = 'The Movie ' + elNewMovie.value + " has been added to the list with a rating "
        + elNewRating.value + " ⭐";


    event.preventDefault(); //
}

function showRatings () {
    let output = '';

    elNewOutput.textContent = '';
    elUpdateOutput.textContent = '';

    ratings.forEach(function(item, index, array) {
        output = output + ' ' + item + "\n";
    })
    elRatingsOutput.textContent = output;
}


elFormNew.addEventListener('submit', newRating, false);
elBtnShowRatings.addEventListener('click', showRatings, false);
