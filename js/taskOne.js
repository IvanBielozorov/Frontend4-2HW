const refs = {
  sliderInput: document.querySelector(".slider__input"),
  sliderImage: document.querySelector(".slider__image"),
};

function onSliderInput() {
    refs.sliderImage.style.width = `${refs.sliderInput.value * 4.5}px`;
    refs.sliderImage.style.height = `${refs.sliderInput.value * 3}px`;
}
const debounceSizeImage = _.debounce(onSliderInput, 100);
refs.sliderInput.addEventListener("input", debounceSizeImage);