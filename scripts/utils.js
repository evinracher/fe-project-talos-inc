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
      `.slide-button-${index}`
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
