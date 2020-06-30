import Glide from '@glidejs/glide';

// const sliderLanguage = () {
// 	new Glide('.glide', {
// 		type: 'carousel',
// 		startAt: 0,
// 		perView: 3,
// 	});
// }

window.addEventListener('load', (event) => {
  new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    gap: 40,
    startAt: 1,
    focusAt: 'center',
    peek: 200,
    autoplay: 3000,
    hoverpause: true,
  }).mount();
});
