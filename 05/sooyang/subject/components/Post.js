export default class Post extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById("blog-post-template");
    const content = template.content.firstElementChild;
    this.appendChild(content.cloneNode(true));
  }
}
