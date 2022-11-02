/* 
Flanx Quikker JavaScript Library.
v0.0.2

- Flanx Quikker also known as FQJS is a JavaScript library which is the main objective is to write, style and function the webpage using only JavaScript that does not need to use multiple files and languages like HTML & CSS to achieve a better performance and also it can also integrate with other frameworks like Bootstrap, Tailwind etc.

Created by Yerenzter
*/

let out = (prop, css) => {
  if(!css) {
    let select = document.querySelector(prop.select);
    let elem = document.createElement(prop.elem);
    elem.textContent = prop.text;
    elem.id = prop.id;
    elem.className = prop.group;
    elem.href = prop.href;
    select.appendChild(elem);
  }
  else {
    let select = document.querySelector(prop.select);
    let elem = document.createElement(prop.elem);
    elem.textContent = prop.text;
    elem.id = prop.id;
    elem.className = prop.group;
    elem.href = prop.href;
    select.appendChild(elem);
  
    let stylesheet = {};
    let id = document.querySelector(css.stylesheet.id);
    id.style.display = css.stylesheet.display;
    id.style.margin = css.stylesheet.margin;
    id.style.margin = css.stylesheet.padding;
    id.style.width = css.stylesheet.width;
    id.style.height = css.stylesheet.height;
    id.style.border = css.stylesheet.border;
    id.style.borderRadius = css.stylesheet.radius;
    id.style.fontSize = css.stylesheet.size;
  }
};