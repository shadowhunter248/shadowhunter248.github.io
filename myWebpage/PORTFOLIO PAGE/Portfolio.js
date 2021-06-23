/* Project tile animation */
let shrink = document.getElementsByClassName('project-tile');
for (let i in shrink) {
  shrink[i].addEventListener('mouseout', () => {
    shrink[i].style.animation = 'shrink 0.5s 1 forwards';
  });
  shrink[i].addEventListener('mouseover', () => {
    shrink[i].style.animation = 'grow 0.5s 1 forwards';
  });
}

/* contacts animation */
let slide = document.getElementsByClassName('contact-links');
for (let i in slide) {
  slide[i].addEventListener('mouseout', () => {
    slide[i].style.animation = 'slidedown 0.5s 1 forwards';
  });

  slide[i].addEventListener('mouseover', () => {
    slide[i].style.animation = 'slideup 0.5s 1 forwards';
  });
}
