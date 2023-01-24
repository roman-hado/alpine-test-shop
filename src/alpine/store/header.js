export const header = {
    scrolled: false,
    mobileMenuOpened: false,

    toggleMobileMenu() {
        this.mobileMenuOpened = !this.mobileMenuOpened;
        const openIcon = document.querySelector('.open-menu');
        const closeIcon = document.querySelector('.close-menu');
        const mobileMenu = document.querySelector('.mobile-menu');
        const header = document.querySelector('.header');

        document.body.classList.toggle('overflow-hidden');
        header.classList.toggle('overflow-scroll');
        header.classList.toggle('min-h-screen');

        openIcon.classList.toggle('opacity-0');
        openIcon.classList.toggle('invisible');
        openIcon.classList.toggle('hidden');

        closeIcon.classList.toggle('opacity-0');
        closeIcon.classList.toggle('invisible');
        closeIcon.classList.toggle('hidden');
        mobileMenu.classList.toggle('translate-y-[-full]');
    },

    openSubMenu(e) {
        const wrapper = e.target.closest('.header__submenu-item');
        const submenuPanel = wrapper.querySelector('.submenu-list');
        const closeIcon = wrapper.querySelector('.close');

        submenuPanel.classList.toggle('hidden');
        e.target.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    },

    closeSubMenu(e) {
        const wrapper = e.target.closest('.header__submenu-item');
        const submenuPanel = wrapper.querySelector('.submenu-list');
        const openIcon = wrapper.querySelector('.open');

        submenuPanel.classList.toggle('hidden');
        e.target.classList.toggle('hidden');
        openIcon.classList.toggle('hidden');
    },

    onScroll() {
        if (this.mobileMenuOpened) return;
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
        if (window.innerWidth < 767) {
            document.querySelector('.search').classList.toggle('w-full');
            document.querySelector('.search').classList.toggle('w-[32px]');
            document.querySelector('.header-logo').classList.toggle('hidden');
            document.querySelector('.header-menu-icon').classList.toggle('hidden');
            document.querySelector('.search-wrapper').classList.toggle('w-[30%]');
            document.querySelector('.search-wrapper').classList.toggle('w-full');
            document.querySelector('.search').classList.toggle('mr-[13px]');
        } else {
            document.querySelector('.search').classList.toggle('min-width-[375px]');
            document.querySelector('.search').classList.toggle('mr-[17px]');
        }

        document.querySelector('.search').classList.toggle('border-1');
        document.querySelector('.search').classList.toggle('border-gray-additional');
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