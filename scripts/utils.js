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

export function getTotalOfButtonsAndRemoveActiveClass(buttons) {
  let buttonsCount = 0;
  buttons.forEach(button => {
    button.classList.remove('rounded-button--active');
    if (getComputedStyle(button).display !== 'none') {
      buttonsCount += 1;
    }
  });

  return buttonsCount;
}

export function loadTestimonials(elements) {
  const buttonsCount = getTotalOfButtonsAndRemoveActiveClass(
    elements.testimonialButtons
  );
  const testimonialsCount = elements.testimonials.length;
  const activeTestimonial = document.querySelector('.testimonial--current');
  const activeTestimonialIndex = Array.from(elements.testimonials).indexOf(
    activeTestimonial
  );
  if (buttonsCount === testimonialsCount) {
    elements.testimonials.forEach(testimonial => {
      testimonial.classList.remove('testimonial--current');
    });
    const activeRealButton = elements.testimonialButtons.item(
      activeTestimonialIndex
    );
    activeRealButton.classList.add('rounded-button--active');
    activeTestimonial.classList.add('testimonial--current');
  } else if (buttonsCount === 3) {
    const id = activeTestimonial.classList.item(1);
    const index = parseInt(id.charAt(id.length - 1));
    const activeTestimonials = document.querySelectorAll(
      `.for-button-${index}`
    );
    activeTestimonials.forEach(testimonial => {
      testimonial.classList.add('testimonial--current');
    });
    if (activeTestimonials.length === 1) {
      activeTestimonials.item(0).style.width = '100%';
    }
    const activeRealButton = document.getElementById(`rounded-button-${index}`);
    activeRealButton.classList.add('rounded-button--active');
  }
}
