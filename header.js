const add = (parent, elementType) => {
  var child = document.createElement(elementType);
  parent.appendChild(child);
  return child;
}

var stylesheet = add(document.head, 'link');
stylesheet.rel = 'stylesheet';
stylesheet.href = 'header.css';

var googleFontStatic = add(document.head, 'link');
googleFontStatic.rel = 'preconnect';
googleFontStatic.href = 'https://fonts.gstatic.com';

var googleFontFamily = add(document.head, 'link');
googleFontFamily.rel = 'stylesheet';
googleFontFamily.href = 'https://fonts.googleapis.com/css2?family=Cousine&display=swap';

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
