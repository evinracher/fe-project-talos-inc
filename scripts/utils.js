export function getTotalHeight(element) {
  const style = getComputedStyle(element);
  return (
    element.offsetHeight +
    parseInt(style.marginTop) +
    parseInt(style.marginBottom)
  );
}

export function getQuestionHeight(question) {
  const h3 = question.querySelector('h3');
  const h3Height = getTotalHeight(h3);
  const questionStyle = getComputedStyle(question);
  return (
    h3Height +
    parseInt(questionStyle.paddingTop) +
    parseInt(questionStyle.paddingBottom)
  );
}

export function loadQuestions(elements) {
  const openQuestion = elements.questionSection.querySelector('.open-question');
  const openAnswer = openQuestion.querySelector('.question__answer');
  const openAnswerHeight = getTotalHeight(openAnswer);
  const questionHeight = getQuestionHeight(openQuestion);
  openQuestion.style['max-height'] = `${questionHeight + openAnswerHeight}px`;
  elements.questions.forEach(otherQuestion => {
    if (otherQuestion !== openQuestion) {
      const otherQuestionHeight = getQuestionHeight(otherQuestion);
      const otherAnswer = otherQuestion.querySelector('.question__answer');
      otherAnswer.classList.remove('close');
      otherQuestion.style.maxHeight = `${otherQuestionHeight}px`;
    }
  });
}
