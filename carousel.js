const track = document.querySelector(".stories");
const stories = Array.from(track.children);
const nextButton = document.querySelector(".totheright");
const prevButton = document.querySelector(".totheleft");

const storyWidth = 76;

// posiciona os stories um ao lado do outro
const setStoryPosition = (story, index) => {
     story.style.left = storyWidth * index + "px";
};
stories.forEach(setStoryPosition);

// função que faz a movimentação dos stories
const moveToSlide = (track, currentStory, targetStory) => {
     track.style.transform = "translateX(-" + targetStory.style.left + ")";
     currentStory.classList.remove("current");
     targetStory.classList.add("current");
};
// botão para a direita
nextButton.addEventListener("click", (e) => {
     const currentStory = track.querySelector(".current");
     const currentIndex = stories.indexOf(currentStory);
     if (currentIndex + 14 >= stories.length) {
          const nextStory = stories[stories.length - 8];
          document.querySelector(".totheright").style.display = "none";
          moveToSlide(track, currentStory, nextStory);
     } else {
          const nextStory = stories[currentIndex + 6];
          document.querySelector(".totheleft").style.display = "initial";
          moveToSlide(track, currentStory, nextStory);
     }
});
// botão para a esquerda
prevButton.addEventListener("click", (e) => {
     const currentStory = track.querySelector(".current");
     const currentIndex = stories.indexOf(currentStory);
     if (currentIndex - 6 <= 0) {
          const prevStory = stories[0];
          document.querySelector(".totheleft").style.display = "none";
          moveToSlide(track, currentStory, prevStory);
     } else {
          const prevStory = stories[currentIndex - 6];
          document.querySelector(".totheright").style.display = "initial";
          moveToSlide(track, currentStory, prevStory);
     }
});
