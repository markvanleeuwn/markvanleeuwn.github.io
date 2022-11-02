// from Stackoverflow “How to check if element is visible after scrolling?” – https://stackoverflow.com/questions/487073/how-to-check-if-element-is-visible-after-scrolling
function isScrolledIntoView(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Partially visible elements return true:
  var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  // Only completely visible elements return true:
  // var isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

// get poem paragraphs by id
const paragraph1 = document.getElementById('paragraph-1');
const paragraph2 = document.getElementById('paragraph-2');
const paragraph3 = document.getElementById('paragraph-3');
const paragraph4 = document.getElementById('paragraph-4');
const paragraph5 = document.getElementById('paragraph-5');
const paragraph6 = document.getElementById('paragraph-6');
const paragraph7 = document.getElementById('paragraph-7');
const paragraph8 = document.getElementById('paragraph-8');

// get “meine mutter”
const meineMutter = document.getElementById('meine-mutter');

// on scroll
document.addEventListener('scroll', function () {
  // check if paragraphs are scrolled into view
  // then add classes that change the font-variation / activate the out-animation

  // paragraph 1
  if (isScrolledIntoView(paragraph1)) {
    meineMutter.classList.add('font-variation_paragraph-1');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-1');
  }

  // paragraph 2
  if (isScrolledIntoView(paragraph2)) {
    meineMutter.classList.add('font-variation_paragraph-2');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-2');
  }

  // paragraph 3
  if (isScrolledIntoView(paragraph3)) {
    meineMutter.classList.add('font-variation_paragraph-3');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-3');
  }

  // paragraph 4
  if (isScrolledIntoView(paragraph4)) {
    meineMutter.classList.add('font-variation_paragraph-4');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-4');
  }

  // paragraph 5
  if (isScrolledIntoView(paragraph5)) {
    meineMutter.classList.add('font-variation_paragraph-5');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-5');
  }

  // paragraph 6
  if (isScrolledIntoView(paragraph6)) {
    meineMutter.classList.add('font-variation_paragraph-6');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-6');
  }

  // paragraph 7
  if (isScrolledIntoView(paragraph7)) {
    meineMutter.classList.add('font-variation_paragraph-7');
  } else {
    meineMutter.classList.remove('font-variation_paragraph-7');
  }

  // paragraph 8
  if (isScrolledIntoView(paragraph8)) {
    meineMutter.classList.add('font-variation_paragraph-8');
    meineMutter.classList.add('animate-out');
    // console.log('out: paragraph8')
  } else {
    meineMutter.classList.remove('font-variation_paragraph-8');
    meineMutter.classList.remove('animate-out');
  }
});
