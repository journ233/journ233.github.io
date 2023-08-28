// add csv to same directory as this file
// import data from './example.csv';


const docReady = function(func) {
  // https://stackoverflow.com/a/9899701
    // see if DOM is already available
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    // call on next available tick
    setTimeout(func, 1);
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
};

const debounce = function(func, wait, immediate) {
  // https://davidwalsh.name/javascript-debounce-function
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

docReady(() => {


  const lectures = document.querySelectorAll('.lecture'),
    now = new Date();
  
  console.log(now);

  lectures.forEach(element => {
    const lectureDate = element.getAttribute('data-date'),
      dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hours: 'numeric',
        minutes: 'numeric',
        timeZone: 'pst'
      },
      d = new Date(`${ lectureDate }T17:00:00.0000-08:00`);
      if (d <= now) {
        element.classList.add('passed');
      }
    
  });


  // if (document.URL.indexOf('sync') > 0) {
  //   const button = document.getElementById('generateUrl');
  //   const generatedUrlEl = document.getElementById('generatedUrl');
  //   button.addEventListener('click', e => {
  //     const calId = document.getElementById('calId').value;
  //     const url = `https://datahub.berkeley.edu/user/${ calId }/git-pull?repo=https://github.com/journ233/j233-files`
  //     generatedUrlEl.innerHTML = `<a href="${ url }" target="_blank">Sync files</a>`;
  //   });
  // }
  // const resizeFn = debounce(() => {
  //   // resize code goes here
  //   console.log('resize');
  // }, 450);
  // window.addEventListener('resize', resizeFn);
});