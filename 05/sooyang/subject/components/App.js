import http from "../http/http.js";

const HEADERS = {
  "Content-Type": "application/json",
};

const BASE_URL = "http://3.38.32.9:8000/board";

const list = async () => await http.get(BASE_URL, HEADERS);

const add = async (body) => await http.post(`${BASE_URL}/`, body, HEADERS);

export default class App extends HTMLElement {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
    this.template = document.getElementById("blog-app-template");
  }

  addPost(title, content, nickname, password) {
    const postRequest = async () => {
      const body = {
        nickname,
        title,
        content,
        password,
      };
      await add(body);
      this.syncAttributes();
    };
    postRequest();
  }

  syncAttributes() {
    const syncAttri = async () => {
      this.state.posts = await list();
      this.list.posts = this.state.posts;
    };
    syncAttri();
  }

  connectedCallback() {
    window.requestAnimationFrame(async () => {
      const newElement =
        this.template.content.firstElementChild.cloneNode(true);

      this.appendChild(newElement);

      this.list = this.querySelector("blog-list");
      this.post = this.querySelector("blog-post");

      this.state.posts = await list();

      this.querySelector(".submit").addEventListener("click", async () => {
        const title = document.querySelector(".input-title");
        const content = document.querySelector(".input-content");
        const nickname = document.querySelector(".input-nickname");
        const password = document.querySelector(".input-password");

        console.log(title, content, nickname, password);
        await this.addPost(
          title.value,
          content.value,
          nickname.value,
          password.value
        );
        
        title.value = "";
        content.value = "";
        nickname.value = "";
        password.value = "";
      });

      this.syncAttributes();
    });
  }
}
