//const TEMPLATE = `<ul class="todo-list"></ul>`;

//export const EVENTS = {
//  DELETE_ITEM: "DELETE_ITEM",
//};

//export default class List extends HTMLElement {
//  // 관찰할 속성 목록 정의 (todos만 봄)
//  static get observedAttributes() {
//    return ["todos"];
//  }
//  // todos 데이터를 JSON 형식의 문자열로 가져오거나 설정함
//  get todos() {
//    if (!this.hasAttribute("todos")) return [];
//    return JSON.parse(this.getAttribute("todos"));
//  }
//  set todos(value) {
//    this.setAttribute("todos", JSON.stringify(value));
//  }

//  // todos 리스트 생성 (노드 생성 후 데이터 채워넣기)
//  createNewNode() {
//    return this.itemTemplate.content.firstElementChild.cloneNode(true);
//  }

//  getTodoElement(todo, index) {
//    const { text, completed } = todo;
//    const element = this.createNewNode();

//    element.querySelector("input.edit").value = text;
//    element.querySelector("label").textContent = text;

//    if (completed) {
//      element.classList.add("completed");
//      element.querySelector(".toggle").checked = true;
//    }

//    // 이부분은 delete에서 자세히 보기
//    element.querySelector("button.destroy").dataset.index = index;

//    return element;
//  }

//  // todos update
//  // 여기서는 일종의 렌더링 함수
//  updateList() {
//    this.list.innerHTML = "";
//    this.todos
//      .map((todo, index) => this.getTodoElement(todo, index))
//      .foreach((element) => {
//        this.list.appendChild(element);
//      });
//  }

//  // todos delete
//  // 직접 삭제하는 동작을 수행하지 않고, 이벤트를 외부에 알리기만 함.
//  onDeleteClick(index) {
//    const event = new CustomEvent(EVENTS.DELETE_ITEM, {
//      detail: {
//        index, // 삭제할 항목의 인덱스 정보를 이벤트와 함께 전달함.
//      },
//    });

//    this.dispatchEvent(event); // 사용자 정의 이벤트 추가
//  }

//  // connectedCallback (DOM에 붙여넣어질 때 호출함.
//  // 이벤트리스너 설정
//  // 최상위 노드(ul태그) 생성 후 리스트(li 더미) 붙여넣기)
//  connectedCallback() {
//    this.innerHTML = TEMPLATE;
//    this.itemTemplate = document.getElementById("todo-item");

//    this.list = this.querySelector("ul"); // 할 일 목록 컨테이너

//    // '삭제' 버튼 클릭 이벤트 리스너 등록
//    this.list.addEventListener("click", (e) => {
//      if (e.target.matches("button.destroy")) {
//        this.onDeleteClick(e.target.dataset.index);
//      }
//    });

//    this.updateList(); // 할 일 목록을 최초로 렌더링합니다.
//  }

//  // attributeChangedCallback (여기서는 todos 변경될 때 호춣함)
//  attributeChangedCallback() {
//    this.updateList();
//  }
//}

const TEMPLATE = '<ul class="todo-list"></ul>';

export const EVENTS = {
  DELETE_ITEM: "DELETE_ITEM",
};

export default class List extends HTMLElement {
  static get observedAttributes() {
    return ["todos"];
  }

  get todos() {
    if (!this.hasAttribute("todos")) {
      return [];
    }

    return JSON.parse(this.getAttribute("todos"));
  }

  set todos(value) {
    this.setAttribute("todos", JSON.stringify(value));
  }

  onDeleteClick(index) {
    const event = new CustomEvent(EVENTS.DELETE_ITEM, {
      detail: {
        index,
      },
    });

    this.dispatchEvent(event);
  }

  createNewTodoNode() {
    return this.itemTemplate.content.firstElementChild.cloneNode(true);
  }

  getTodoElement(todo, index) {
    const { text, completed } = todo;

    const element = this.createNewTodoNode();

    element.querySelector("input.edit").value = text;
    element.querySelector("label").textContent = text;

    if (completed) {
      element.classList.add("completed");
      element.querySelector("input.toggle").checked = true;
    }

    element.querySelector("button.destroy").dataset.index = index;

    return element;
  }

  updateList() {
    this.list.innerHTML = "";

    this.todos
      .map((todo, index) => this.getTodoElement(todo, index))
      .forEach((element) => {
        this.list.appendChild(element);
      });
  }

  connectedCallback() {
    this.innerHTML = TEMPLATE;
    this.itemTemplate = document.getElementById("todo-item");

    this.list = this.querySelector("ul");

    this.list.addEventListener("click", (e) => {
      if (e.target.matches("button.destroy")) {
        this.onDeleteClick(e.target.dataset.index);
      }
    });

    this.updateList();
  }

  attributeChangedCallback() {
    this.updateList();
  }
}
