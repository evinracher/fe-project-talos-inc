import * as handlers from './handlers.js';
import * as elements from './elements.js';
import { loadQuestions, loadTestimonials } from './utils.js';

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
  loadQuestions(elements);
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

// const assetURL =
//   'blob:https://www.youtube.com/99e36be8-89a3-4c4c-8fca-2ec0617ba3f3';
// // Need to be specific for Blink regarding codecs
// // ./mp4info frag_bunny.mp4 | grep Codec
// const mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

// function fetchAB(url, cb) {
//   console.log(url);
//   const xhr = new XMLHttpRequest();
//   xhr.open('get', url);
//   xhr.responseType = 'arraybuffer';
//   xhr.onload = function() {
//     cb(xhr.response);
//   };
//   xhr.send();
// }

// function sourceOpen(_) {
//   // console.log(this.readyState); // open
//   const mediaSource = this;
//   const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
//   fetchAB(assetURL, function(buf) {
//     sourceBuffer.addEventListener('updateend', function(_) {
//       mediaSource.endOfStream();
//       elements.videoDisplayer.play();
//       // console.log(mediaSource.readyState); // ended
//     });
//     sourceBuffer.appendBuffer(buf);
//   });
// }

// if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
//   const mediaSource = new MediaSource();
//   // console.log(mediaSource.readyState); // closed
//   elements.videoDisplayer.src = URL.createObjectURL(mediaSource);
//   mediaSource.addEventListener('sourceopen', sourceOpen);
// } else {
//   console.error('Unsupported MIME type or codec: ', mimeCodec);
// }
