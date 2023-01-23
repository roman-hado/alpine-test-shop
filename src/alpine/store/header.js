export const header = {
    scrolled: false,

    onScroll() {
        const yOffSet = window.pageYOffset;

        if (yOffSet > 0 && !this.scrolled) {
            this.scrolled = true;
            const header = window.document.querySelector('.header');
            header.style.transform = 'translateY(-100%)';
        }

        if (yOffSet === 0 && this.scrolled) {
            this.scrolled = false;
            const header = window.document.querySelector('.header');
            header.style.transform = 'translateY(0)';
        }
    },

    searchPanelToggle() {
        document.querySelector('.search').classList.toggle('min-width-[375px]');
        document.querySelector('.search').classList.toggle('border-1');
        document.querySelector('.search').classList.toggle('border-gray-additional');
        document.querySelector('.search').classList.toggle('mr-[17px]');
        document.querySelector('.search').classList.toggle('p-2');

        document.querySelector('.search-close-icon').classList.toggle('invisible');
        document.querySelector('.search-close-icon').classList.toggle('opacity-100');
        document.querySelector('.search-close-icon').classList.toggle('hidden');
        document.querySelector('.search-close-icon').classList.toggle('mr-1');

        document.querySelector('.search-input').classList.toggle('invisible');
        document.querySelector('.search-input').classList.toggle('opacity-100');
        document.querySelector('.search-input').classList.toggle('hidden');
    }
}