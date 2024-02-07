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
    console.log(post);
    const { id, title, content, nickname, like_count, date } = post;

    const element = this.createNewNode();

    element.querySelector(".postId").textContent = id;
    element.querySelector(".title").textContent = title;
    element.querySelector(".content").textContent = content;
    element.querySelector(".nickname").textContent = nickname;
    element.querySelector(".like").textContent = `${
      like_count === undefined ? 0 : like_count
    }likes`;
    element.querySelector(".date").textContent = date;

    return element;
  }

  updateList() {
    this.list.innerHTML = "";

    const firstList = this.getPostItem(
      {
        id: "ID",
        title: "제목",
        content: "내용",
        nickname: "닉네임",
        like: "",
        date: "게시글 작성날짜",
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
