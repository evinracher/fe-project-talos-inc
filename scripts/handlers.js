import * as elements from './elements.js';
import {
  getQuestionHeight,
  getTotalHeight,
  getTotalOfButtonsAndRemoveActiveClass,
} from './utils.js';

export function handleMobileBtnClick() {
  elements.mobileNav.classList.toggle('close');
}

export function handleTeamMemberEnter(e) {
  const links = e.currentTarget.querySelector('.team__member--links');
  links.classList.add('active-element');
}

export function handleTeamMemberOut(e) {
  const links = e.currentTarget.querySelector('.team__member--links');
  links.classList.remove('active-element');
}

export function handlePortafolioImageEnter(e) {
  const imageInfo = e.currentTarget.querySelector('.portafolio__image--info');
  imageInfo.classList.add('active-element');
}

export function handlePortafolioImageOut(e) {
  const imageInfo = e.currentTarget.querySelector('.portafolio__image--info');
  imageInfo.classList.remove('active-element');
}

export function handleQuestionClick(e) {
  const clickedQuestion = e.currentTarget;
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

export function handleTestimonialButtonClick(e) {
  const buttonsCount = getTotalOfButtonsAndRemoveActiveClass(
    elements.testimonialButtons
  );
  e.currentTarget.classList.add('rounded-button--active');
  const buttonId = e.currentTarget.getAttribute('id');
  const index = parseInt(buttonId.charAt(buttonId.length - 1));
  const testimonialsCount = elements.testimonials.length;
  elements.testimonials.forEach(testimonial => {
    testimonial.classList.remove('testimonial__current');
  });
  if (buttonsCount === testimonialsCount) {
    const activeTestimonial = elements.testimonials.item(index - 1);
    activeTestimonial.classList.add('testimonial__current');
  } else if (buttonsCount === 3) {
    const activeTestimonials = document.querySelectorAll(
      `.for-button-${index}`
    );
    activeTestimonials.forEach(testimonial => {
      testimonial.classList.add('testimonial__current');
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
