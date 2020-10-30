import '../scss/styles.scss';
import 'bootstrap';
import footerDate from './footerDate.js';

document.addEventListener('DOMContentLoaded', function() {
  const el = document.createElement('div')
  const p = document.createElement('p');
  
  footerDate();
  p.innerHTML = `Hello World!!!`;

  import('jquery').then(({ default: $ }) => {
    
    el.append(p);
    $('#JavaScript').append(el);

    import('slick-carousel').then(({ default: slick }) => {
      $('#slida').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow:'<button type="button" data-role="none" class="prev slick-prev" aria-label="Previous" role="button" style="display: block;">Previous</button>',  // TODO: change to <button> el
        nextArrow:'<button type="button" data-role="none" class="next slick-next" aria-label="Next" role="button" style="display: block;">Next</button>'  // TODO: change to <button> el
      });
    });
  });
});