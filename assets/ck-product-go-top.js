customElements.define('sticky-product-form', class StickyProductForm extends HTMLElement {
    constructor() {
        super();
        this.elemScrollTo = this.elemScrollTo.bind(this)
    }
    connectedCallback() {
        this.productForm = document.querySelector('#ck-product-form');
        this.selectOptions = document.querySelector('.product-description');

        this.productStickyForm = document.querySelector('.product--sticky-form');
        this.productFormBounds = {};
        this.onScrollHandler = this.onScroll.bind(this);
        window.addEventListener('scroll', this.onScrollHandler, false);
        this.createObserver();
        const btn = this.querySelector("#go-form");
        btn.addEventListener('click', this.elemScrollTo)

    }
    adjustChatButtonVisibility(shouldBeVisible) {
        this.chatBtn = document.querySelector('#gladlyChat_container')
        let elemToMove = this.productStickyForm.offsetHeight + 5 + 'px';
        if (!this.chatBtn) return;

        if (shouldBeVisible) {
            this.chatBtn.classList.add('chat-up');
            this.chatBtn.style.setProperty('--height', elemToMove)
        } else {
            this.chatBtn.classList.remove('chat-up');
        }
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.onScrollHandler);
        const btn = this.querySelector("#go-form");
        btn.removeEventListener('click', this.elemScrollTo)
    }

    createObserver() {
        let observer = new IntersectionObserver((entries, observer) => {
            this.productFormBounds = entries[0].isIntersecting;
        });
        observer.observe(this.productForm);
    }
    onScroll() {
        this.productFormBounds ? requestAnimationFrame(this.hide.bind(this)) : requestAnimationFrame(this.reveal.bind(this));
    }

    hide() {
        if (this.productStickyForm.classList.contains('product--sticky-form__active')) {
            this.productStickyForm.classList.replace('product--sticky-form__active', 'product--sticky-form__inactive');
            this.adjustChatButtonVisibility(false);
        }
    }

    reveal() {
        if (this.productStickyForm.classList.contains('product--sticky-form__inactive')) {
            if (this.chatBtn) console.log("TCL: StickyProductForm -> reveal -> this.chatBtn.classList", this.chatBtn)
            this.adjustChatButtonVisibility(true);
            this.productStickyForm.classList.replace('product--sticky-form__inactive', 'product--sticky-form__active');
        }
    }
    elemScrollTo() {
        window.innerWidth < 768 ? this.selectOptions.scrollIntoView({behavior: "smooth"}) : this.productForm.scrollIntoView({behavior: "smooth"});
    }
});