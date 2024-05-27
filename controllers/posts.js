const posts = require("../postsArray")
const fs = require('fs');
const path = require('path');
// Index
const index = function (req, res) {
  let html = "<ul>"
  posts.forEach(post => {
    html += `
          <li>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
          </li>
          `
  });
  html += `</ul>`;
  res.type('html').send(html);
};


// Show
const show = function (req, res) {
  const slugDolce = req.params.slug
  const dolceRicerca = posts.find(dolce => dolce.slug == slugDolce)
  console.log(posts)
  if (dolceRicerca) {
    let html = `
    <h2>${posts.title}</h2>
    <p>${posts.content}</p>
    `;
    res.type('html').send(html)
  }
  else {
    res.status(404).send("Dolce non trovato");
  }
}
// <p><strong>Tags:</strong> ${posts.tags.join(', ')}</p>`)
module.exports = {
  index,
  show
}