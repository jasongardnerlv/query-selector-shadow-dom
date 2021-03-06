export class TestComponent extends HTMLElement {

    constructor({ childClassName = 'test-child', childTextContent = 'Child Content', internalHTML = '' } = {}) {
        super();
        this.childClassName = childClassName;
        this.childTextContent = childTextContent;
        this.internalHTML = internalHTML;
        this.style.display = 'block';
        this.style.margin = '5px';
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<p class="${this.childClassName}">${this.childTextContent}</p><div>${this.internalHTML}</div><slot></slot>`;
    }

    add(child) {
        this.shadowRoot.appendChild(child);
    }

    addNested(child) {
        this.shadowRoot.querySelector('p').appendChild(child);
    }
}
customElements.define('test-component', TestComponent);