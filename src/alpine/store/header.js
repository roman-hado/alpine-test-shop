export const header = {
    scrolled: false,
    mobileMenuOpened: false,
    searchPanelOpened: false,

    toggleMobileMenu() {
        this.mobileMenuOpened = !this.mobileMenuOpened;
        const header = document.querySelector('.header');
        header.classList.toggle('overflow-scroll');
        header.classList.toggle('min-h-screen');
    },

    // openSubMenu(e) {
    //     const wrapper = e.target.closest('.header__submenu-item');
    //     const submenuPanel = wrapper.querySelector('.submenu-list');
    //     const closeIcon = wrapper.querySelector('.close');
    //
    //     submenuPanel.classList.toggle('hidden');
    //     e.target.classList.toggle('hidden');
    //     closeIcon.classList.toggle('hidden');
    // },
    //
    // closeSubMenu(e) {
    //     const wrapper = e.target.closest('.header__submenu-item');
    //     const submenuPanel = wrapper.querySelector('.submenu-list');
    //     const openIcon = wrapper.querySelector('.open');
    //
    //     submenuPanel.classList.toggle('hidden');
    //     e.target.classList.toggle('hidden');
    //     openIcon.classList.toggle('hidden');
    // },

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
    }
}
