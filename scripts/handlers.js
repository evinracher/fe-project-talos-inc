import * as elements from './elements.js';
import {
  getQuestionHeight,
  getTotalHeight,
  getTotalOfButtonsAndRemoveActiveClass,
  loadQuestions,
  loadTestimonials,
} from './utils.js';

export function handleMobileBtnClick() {
  elements.mobileNav.classList.toggle('close');
}

export function handleTeamMemberEnter(event) {
  console.log(event.currentTarget);
  const links = event.currentTarget.querySelector('.team-member__links');
  links.classList.add('active-element');
}

export function handleTeamMemberOut(event) {
  const links = event.currentTarget.querySelector('.team-member__links');
  links.classList.remove('active-element');
}

export function handlePortafolioImageEnter(event) {
  const imageInfo = event.currentTarget.querySelector('.portafolio__info');
  imageInfo.classList.add('active-element');
}

export function handlePortafolioImageOut(event) {
  const imageInfo = event.currentTarget.querySelector('.portafolio__info');
  imageInfo.classList.remove('active-element');
}

export function handleQuestionClick(event) {
  const clickedQuestion = event.currentTarget;
  const clickedAnswer = clickedQuestion.querySelector('.question__answer');
  const clickedAnswerHeight = getTotalHeight(clickedAnswer);
  if (clickedAnswer.classList.contains('open-answer')) {
    return;
  }
  clickedQuestion.classList.add('open-question');
  clickedAnswer.classList.add('open-answer');
  const questionHeight = getQuestionHeight(clickedQuestion, clickedAnswer);
  clickedQuestion.style['max-height'] = `${questionHeight +
    clickedAnswerHeight}px`;
  elements.questions.forEach(otherQuestion => {
    if (otherQuestion !== clickedQuestion) {
      const otherAnswer = otherQuestion.querySelector('.question__answer');
      otherQuestion.classList.remove('open-question');
      otherAnswer.classList.remove('open-answer');
      const otherQuestionHeight = getQuestionHeight(otherQuestion);
      otherQuestion.style.maxHeight = `${otherQuestionHeight}px`;
    }
  });
}

export function handleTestimonialButtonClick(event) {
  const buttonsCount = getTotalOfButtonsAndRemoveActiveClass(
    elements.testimonialButtons
  );
  event.currentTarget.classList.add('rounded-button--active');
  const buttonId = event.currentTarget.getAttribute('id');
  const index = parseInt(buttonId.charAt(buttonId.length - 1));
  const testimonialsCount = elements.testimonials.length;
  elements.testimonials.forEach(testimonial => {
    testimonial.classList.remove('testimonial--current');
  });
  if (buttonsCount === testimonialsCount) {
    const activeTestimonial = elements.testimonials.item(index - 1);
    activeTestimonial.classList.add('testimonial--current');
  } else if (buttonsCount === 3) {
    const activeTestimonials = document.querySelectorAll(
      `.for-button-${index}`
    );
    activeTestimonials.forEach(testimonial => {
      testimonial.classList.add('testimonial--current');
    });
    if (activeTestimonials.length === 1) {
      activeTestimonials.item(0).style.width = '100%';
    }
  }
}

export function sectionInterceptionCallback(entries) {
  let maxRatio = 0;
  let maxEntry;
  let needChange = false;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      needChange = true;
      if (entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio;
        maxEntry = entry;
      }
    }
  });

  if (needChange) {
    const url = `#${maxEntry.target.dataset.section_id}`;
    elements.navLinks.forEach(link => {
      if (link.href.includes(url)) {
        link.classList.add('nav__link--active');
      } else {
        link.classList.remove('nav__link--active');
      }
    });
  }
}

export function handleWindowsLoad() {
  loadQuestions(elements);
  loadTestimonials(elements);
  // console.log(window);
  // elements.videoDisplayer.scr = window.URL.createObjectURL(
  //   'blob:https://www.youtube.com/99e36be8-89a3-4c4c-8fca-2ec0617ba3f3'
  // );
  window.removeEventListener('load', handleWindowsLoad);
}
