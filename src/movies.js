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
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
  const moviesCopyTitles = moviesCopy.map(movies => movies.title);
  const moviesTitles = moviesCopyTitles.filter((movies, index) => index < 20);
  return moviesTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
  const newMoviesDuration = moviesCopy.map(movies => {
    const currentDuration = movies.duration;
    let hours;
    let minutes;
    let newDuration;
    if (currentDuration.includes(' ')) {
      const durationArray = currentDuration.split(' ');
      hours = durationArray[0].replace('h', '');
      hours = +hours;
      minutes = durationArray[1].replace('min', '');
      minutes = +minutes;
      newDuration = hours * 60 + minutes;
    } else {
      if (currentDuration.includes('h')) {
        hours = currentDuration.replace('h', '');
        hours = +hours;
        newDuration = hours * 60;
      } else if (currentDuration.includes('min')) {
        minutes = currentDuration.replace('min', '');
        minutes = +minutes;
        newDuration = minutes;
        console.log(newDuration);
      }
    }
    movies.duration = newDuration;
    return movies;
  });
  return newMoviesDuration;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  } else {
    // create a new object just with years and scores
    const yearScoresArray = moviesArray.map(movies => {
      return {
        year: movies.year,
        score: movies.score,
      };
    });

    // group scores in an array for each year
    const groupByYear = yearScoresArray.reduce((yearGroup, movie) => {
      const { year } = movie;
      yearGroup[year] = yearGroup[year] ?? [];
      yearGroup[year].push(movie.score);
      return yearGroup;
    }, {});

    // convert groupByYear into an array of objects
    const yearDataArray = Object.keys(groupByYear).map(year => ({
      year: year,
      score: groupByYear[year],
    }));

    // calculate the average score for each year
    const averageScoreByYear = yearDataArray.map(yearData => {
      const sum = yearData.score.reduce((acc, cur) => acc + cur, 0);
      return {
        year: yearData.year,
        score: +(sum / yearData.score.length).toFixed(2),
      };
    });

    // find the maximum score, in case of tie find the minimum year
    const bestYear = averageScoreByYear.reduce((acc, cur) => {
      if (cur.score > acc.score) {
        return cur;
      } else if (cur.score === acc.score && cur.year < acc.year) {
        return cur;
      } else {
        return acc;
      }
    });

    console.log(bestYear);

    return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
  }
}
