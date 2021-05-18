const add = (parent, elementType) => {
  var child = document.createElement(elementType);
  parent.appendChild(child);
  return child;
}

var header = add(document.body, 'div');
header.className = 'primary header';

var logoContainer = add(header, 'div');
logoContainer.className = 'logoContainer';

var logo = add(logoContainer, 'img');
logo.src = 'logos/logo-white.png';
logo.className = 'logo';

var pageContainer = add(header, 'div');
var page = add(pageContainer, 'p');
page.textContent = 'Home';
