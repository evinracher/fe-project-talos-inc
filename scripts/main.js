import * as handlers from './handlers.js';
import * as elements from './elements.js';
import { loadTestimonials } from './utils.js';

// Adding events
elements.mobileBtn.addEventListener('click', handlers.handleMobileBtnClick);

elements.teamMembers.forEach(teamMember => {
  teamMember.addEventListener('mouseenter', handlers.handleTeamMemberEnter);
  teamMember.addEventListener('mouseleave', handlers.handleTeamMemberOut);
});

elements.portafolioImages.forEach(portafolioImage => {
  portafolioImage.addEventListener(
    'mouseenter',
    handlers.handlePortafolioImageEnter
  );
  portafolioImage.addEventListener(
    'mouseleave',
    handlers.handlePortafolioImageOut
  );
});

elements.questions.forEach(question => {
  question.addEventListener('click', handlers.handleQuestionClick);
});

elements.testimonialButtons.forEach(button => {
  button.addEventListener('click', handlers.handleTestimonialButtonClick);
});

window.addEventListener('resize', () => {
  loadTestimonials(elements);
});

window.addEventListener('load', handlers.handleWindowsLoad);

const sectionsObserver = new IntersectionObserver(
  handlers.sectionInterceptionCallback,
  {
    threshold: 1,
  }
);

elements.sectionHeaders.forEach(sectionTarget => {
  sectionsObserver.observe(sectionTarget);
});
