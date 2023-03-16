import { links } from "./links.js";

function renderLinks(list) {
  const DOM = document.getElementById('links');

  list.map((item) => {
    DOM.innerHTML += `
      <a class="link ${item.color}" href="${item.url}">
        ${item.name}
      </a>
    `
  })
}

renderLinks(links);