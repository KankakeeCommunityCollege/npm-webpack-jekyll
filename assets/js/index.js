import _ from 'lodash';
import '../scss/styles.scss';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');

  // Lodash, currently included via a script, is required for this line to work
  element.classList.add('background__color--green');
  element.appendChild(p);
  p.innerHTML = _.join(['Hello', 'webpack'], ' ');
  p.classList.add('typography__red');

  return element;
}

document.body.appendChild(component());
