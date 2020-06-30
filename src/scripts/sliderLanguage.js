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
    startAt: 0,
    perView: 1,
  }).mount();

  console.log('wtf mate');
});
