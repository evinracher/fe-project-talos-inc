import * as elements from './elements.js';
import { getQuestionHeight, getTotalHeight } from './utils.js';

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
