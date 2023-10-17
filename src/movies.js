// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movies => movies.director);
}

// Bonus - Iteration 1.1: Clean the array of directors
function getAllDirectorsClean(getAllDirectors) {
  const uniqueDirectors = [];
  getAllDirectors.map(directors => {
    if (uniqueDirectors.includes(directors) === false) {
      uniqueDirectors.push(directors);
    }
  });
  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );
  const dramaSpielberg = dramaMovies.filter(
    movies => movies.director === 'Steven Spielberg'
  );
  return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  } else {
    const scoresArray = moviesArray.map(movies => movies.score);

    const scoresArrayClean = scoresArray.filter(scores => !isNaN(scores));

    if (scoresArrayClean.length === 0) {
      return 0;
    } else {
      const sum = scoresArrayClean.reduce((acc, cur) => acc + cur);

      const averageScores = (sum / scoresArray.length).toFixed(2);

      return +averageScores;
    }
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes('Drama')
  );
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
