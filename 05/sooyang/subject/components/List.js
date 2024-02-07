export default class List extends HTMLElement {
  static get observedAttributes() {
    return ["posts"];
  }

  get posts() {
    if (!this.hasAttribute("posts")) {
      return [];
    }
    return JSON.parse(this.getAttribute("posts"));
  }

  set posts(value) {
    this.setAttribute("posts", JSON.stringify(value));
  }

  createNewNode() {
    return this.itemTemplate.content.firstElementChild.cloneNode(true);
  }

  getPostItem(post, index) {
    const { id, title, content, nickname, like, date } = post;

    const element = this.createNewNode();

    element.querySelector(".postId").textContent = id;
    element.querySelector(".title").textContent = title;
    element.querySelector(".content").textContent = content;
    element.querySelector(".nickname").textContent = nickname;
    element.querySelector(".like").textContent = `${
      like === undefined ? 0 : like
    }likes`;
    element.querySelector(".date").textContent = date;

    return element;
  }

  updateList() {
    this.list.innerHTML = "";

    const firstList = this.getPostItem(
      {
        id: "아이디",
        title: "제목",
        content: "내용",
        nickname: "닉네임",
        like: "",
        date: "날짜",
      },
      0
    );
    this.list.appendChild(firstList);
    this.posts
      .map((post, index) => this.getPostItem(post, index))
      .forEach((el) => {
        this.list.appendChild(el);
      });
  }

  connectedCallback() {
    this.innerHTML = '<ul class="blog-list"></ul>';
    this.itemTemplate = document.getElementById("blog-item-template");

    this.list = this.querySelector("ul");

    this.updateList();
  }

  attributeChangedCallback() {
    this.updateList();
  }
}
