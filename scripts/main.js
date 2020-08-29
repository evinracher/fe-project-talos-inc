import * as handlers from './handlers.js';
import * as elements from './elements.js';
import { loadQuestions } from './utils.js';

// Adding event
elements.mobileBtn.addEventListener('click', handlers.handleMobileBtnClick);

elements.teamMembers.forEach(teamMember => {
  teamMember.addEventListener('mouseenter', handlers.handleTeamMemberEnter);
  teamMember.addEventListener('mouseleave', handlers.handleTeamMemberOut);
  //   teamMember.addEventListener('mousemove', handlers.handleTeamMemberMove);
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

window.addEventListener('resize', () => {
  loadQuestions(elements);
});

window.addEventListener('load', () => {
  loadQuestions(elements);
});
