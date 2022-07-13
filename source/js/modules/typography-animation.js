import AccentTypographyBuild from './typography-build';

const introTitle = new AccentTypographyBuild(document.querySelector(`.intro__title`), {
  letterDelays: [3, 2, 1, 1, 3, 2, 1, 4, 1, 1, 3, 0],
  delay: 100,
  nextWordDelay: 200,
});

const introDate = new AccentTypographyBuild(document.querySelector(`.intro__date`), {
  letterDelays: [4, 2, 1, 3, 0, 1, 0, 3, 1, 1, 4, 0, 2],
  delay: 1000,
});

const storyTitle = new AccentTypographyBuild(document.querySelector(`.slider__item-title`), {
  letterDelays: [2, 1, 4, 3, 2, 1, 0],
});

const prizesTitle = new AccentTypographyBuild(document.querySelector(`.prizes__title`), {
  letterDelays: [4, 2, 1, 3, 3],
  delay: 200,
});

const rulesTitle = new AccentTypographyBuild(document.querySelector(`.rules__title`), {
  letterDelays: [3, 1, 0, 2, 3, 2, 1],
});

const gameTitle = new AccentTypographyBuild(document.querySelector(`.game__title`), {
  letterDelays: [3, 2, 1, 1],
});

window.addEventListener('load', () => {
  introTitle.runAnimation();
  introDate.runAnimation();
  storyTitle.runAnimation();
  prizesTitle.runAnimation();
  rulesTitle.runAnimation();
  gameTitle.runAnimation();
});
