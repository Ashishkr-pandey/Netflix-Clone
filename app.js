const prevButtons = document.querySelectorAll('#previous');
const nextButtons = document.querySelectorAll('#next');
const movieGroups = document.querySelectorAll('.movie-group');
const scrollDistance = 200;

function scrollMovieGroup(movieGroup, distance) {
  movieGroup.scrollBy({
    left: distance,
    behavior: 'smooth'
  });
}

function attachButtonClickHandler(button, movieGroup, distance) {
  button.addEventListener('click', () => {
    scrollMovieGroup(movieGroup, distance);
  });
}

for (let i = 0; i < prevButtons.length; i++) {
  attachButtonClickHandler(prevButtons[i], movieGroups[i], -scrollDistance);
  attachButtonClickHandler(nextButtons[i], movieGroups[i], scrollDistance);
}
