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

const pageNames = ['Home', 'About', 'Services', 'Contact'];

var pageContainer = add(header, 'div');
pageContainer.className = 'pageContainer';

var width = 1 / pageNames.length * 100;
for(var page of pageNames){
  var pageLink = add(pageContainer, 'a');
  pageLink.style.width = width + '%';
  pageLink.className = 'pageLink';
  pageLink.textContent = page;
}
