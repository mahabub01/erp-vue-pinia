<template>
	<div :class="layoutContainerClass" @click="onDocumentClick">
		<Toast position="top-center" />
		<AppTopBar :horizontal="menuMode==='horizontal'" :topbarMenuActive="topbarMenuActive" :activeTopbarItem="activeTopbarItem" :mobileTopbarActive="mobileTopbarActive" @topbar-mobileactive="onTopbarMobileButtonClick"
			@menubutton-click="onMenuButtonClick" @topbar-menubutton-click="onTopbarMenuButtonClick" @topbaritem-click="onTopbarItemClick" @rightpanel-button-click="onRightPanelButtonClick"
			:searchActive="searchActive" @search-toggle="onSearchToggle" @search-click="onSearchClick" @search-hide="onSearchHide"></AppTopBar>

			<div class="menu-wrapper">
				<div class="layout-menu-container" @click="onMenuClick">
						<AppInlineMenu v-if="inlineMenuPosition === 'top' || inlineMenuPosition === 'both'" v-model:active="inlineMenuTopActive" @change-inlinemenu="onChangeInlineMenu" inlineMenuKey="top" :menuMode="menuMode"></AppInlineMenu>
						<AppMenu :model="menu" :menuMode="menuMode" :active="menuActive" :mobileMenuActive="mobileMenuActive" :isSlimOrHorItemClick="isSlimOrHorItemClick" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"></AppMenu>
						<AppInlineMenu v-if="inlineMenuPosition === 'bottom' || inlineMenuPosition === 'both'" v-model:active="inlineMenuBottomActive" @change-inlinemenu="onChangeInlineMenu" inlineMenuKey="bottom" :menuMode="menuMode"></AppInlineMenu>
				</div>
			</div>

		<div class="layout-main">

			<AppBreadcrumb></AppBreadcrumb>

			<div class="layout-content">
				<router-view />
			</div>
		</div>

		<AppConfig :menuMode="menuMode" @menu-mode-change="onMenuModeChange" @layout-mode-change="onLayoutModeChange" @menu-theme="onMenuTheme"
				:layoutMode="d_layoutMode" @topbar-theme="onTopbarThemeChange"
				v-model:inlineMenuPosition="inlineMenuPosition" @inlinemenu-change="onInlineMenuPositionChange"
				:theme="theme" :themes="themes" @theme-change="changeTheme" :menuTheme="d_menuTheme" :menuThemes="menuThemes"
				:topbarTheme="d_topbarTheme" :topbarThemes="topbarThemes"></AppConfig>

		<AppRightPanel :expanded="rightPanelActive" @content-click="onRightPanelClick" @hide="onHideClick"></AppRightPanel>
		<div v-if="mobileMenuActive" class="layout-mask modal-in"></div>
	</div>
</template>

<script>
import AppTopBar from './AppTopbar.vue';
import AppInlineMenu from './AppInlineMenu.vue';
import AppRightPanel from './AppRightPanel.vue';
import AppMenu from './AppMenu.vue';
import AppConfig from './AppConfig.vue';
// import AppFooter from './AppFooter.vue';
import AppBreadcrumb from './AppBreadcrumb.vue';
import EventBus from './event-bus';
import { useAuthStore } from '../../store/auth'
import { useAppStore } from '../../store/app'
import { useRouter } from 'vue-router'
import { useToast } from "primevue/usetoast";

export default {
	setup: () => { 
		const authStore = useAuthStore()
		const appStore = useAppStore()
		const toast = useToast();
		const router = useRouter()

		authStore.$subscribe((mutation, state) => {
			if (!state.isAuthenticated) {
				router.push({path: 'auth/login'})
			}
		})

		appStore.$subscribe((mutation, state) => {
			const appToast = state.toast
			if (appToast.visible) {
				toast.add(appToast)
			}
		})
	},
	emits: ['layout-mode-change', 'menu-theme', 'menuTheme', 'topbar-theme', 'topbarTheme', 'layoutModeChange'],
	props: {
		topbarTheme: String,
		menuTheme: String,
		layoutMode: String
	},
    data() {
        return {
			d_topbarTheme: this.topbarTheme,
			d_menuTheme: this.menuTheme,
			d_layoutMode: this.layoutMode,
			mobileTopbarActive: false,
			mobileMenuActive: false,
			search: false,
			searchClick: false,
			searchActive: false,
			menuMode: 'static',
			inlineMenuClick: false,
			inlineMenuPosition: 'bottom',
			inlineMenuTopActive: false,
			inlineMenuBottomActive: false,
			overlayMenuActive: false,
			rotateMenuButton: false,
			topbarMenuActive: false,
			activeTopbarItem: null,
			isSlimOrHorItemClick: false,
			darkMenu: false,
			theme: 'blue',
			themes: [
				{name: 'indigo', color: '#2f8ee5'},
				{name: 'pink', color: '#E91E63'},
				{name: 'purple', color: '#9C27B0'},
				{name: 'deeppurple', color: '#673AB7'},
				{name: 'blue', color: '#2196F3'},
				{name: 'lightblue', color: '#03A9F4'},
				{name: 'cyan', color: '#00BCD4'},
				{name: 'teal', color: '#009688'},
				{name: 'green', color: '#4CAF50'},
				{name: 'lightgreen', color: '#8BC34A'},
				{name: 'lime', color: '#CDDC39'},
				{name: 'yellow', color: '#FFEB3B'},
				{name: 'amber', color: '#FFC107'},
				{name: 'orange', color: '#FF9800'},
				{name: 'deeporange', color: '#FF5722'},
				{name: 'brown', color: '#795548'},
				{name: 'bluegrey', color: '#607D8B'}
			],
			menuThemes: [
				{name: 'light', color: '#FDFEFF'},
				{name: 'dark', color: '#434B54'},
				{name: 'indigo', color: '#1A237E'},
				{name: 'bluegrey', color: '#37474F'},
				{name: 'brown', color: '#4E342E'},
				{name: 'cyan', color: '#006064'},
				{name: 'green', color: '#2E7D32'},
				{name: 'deeppurple', color: '#4527A0'},
				{name: 'deeporange', color: '#BF360C'},
				{name: 'pink', color: '#880E4F'},
				{name: 'purple', color: '#6A1B9A'},
				{name: 'teal', color: '#00695C'}
			],
			topbarThemes: [
				{name: 'lightblue', color: '#2E88FF'},
				{name: 'dark', color: '#363636'},
				{name: 'white', color: '#FDFEFF'},
				{name: 'blue', color: '#1565C0'},
				{name: 'deeppurple', color: '#4527A0'},
				{name: 'purple', color: '#6A1B9A'},
				{name: 'pink', color: '#AD1457'},
				{name: 'cyan', color: '#0097A7'},
				{name: 'teal', color: '#00796B'},
				{name: 'green', color: '#43A047'},
				{name: 'lightgreen', color: '#689F38'},
				{name: 'lime', color: '#AFB42B'},
				{name: 'yellow', color: '#FBC02D'},
				{name: 'amber', color: '#FFA000'},
				{name: 'orange', color: '#FB8C00'},
				{name: 'deeporange', color: '#D84315'},
				{name: 'brown', color: '#5D4037'},
				{name: 'grey', color: '#616161'},
				{name: 'bluegrey', color: '#546E7A'},
				{name: 'indigo', color: '#3F51B5'}
			],
			rightPanelActive: false,
			menuActive: true,
			menu: [
				{
					label: 'Favorites', 
					icon: 'pi pi-fw pi-home',
					items: [
						{label: 'Dashboard Sales', icon: 'pi pi-fw pi-home', to: '/', badge: 4, badgeStyleClass: 'p-badge-info'},
						{label: 'Dashboard Analytics', icon: 'pi pi-fw pi-home',
							to: '/favorites/dashboardanalytics', badge:2, badgeStyleClass: 'p-badge-success'}
					]
				},
				{
					label: "QUẢN TRỊ NHÂN SỰ", icon:'pi pi-fw pi-compass',
					items: [
						{label: 'Nhân sự', icon: 'pi pi-fw pi-building', to: '/hrm/organization/employees'},
						{label: 'Chấm công', icon:'pi pi-fw pi-check-square', to:'/display'},
						{label: 'Nghỉ phép', icon:'pi pi-fw pi-calendar', to:'/elevation'},
						{label: 'Thời gian', icon:'pi pi-fw pi-clock', to:'/flexbox'},
						{label: 'Tiền lương', icon:'pi pi-fw pi-money-bill', to:'/icons'},
						{label: 'Tài liệu', icon:'pi pi-fw pi-file', to:'/text'},
						{label: 'Công việc', icon:'pi pi-fw pi-tags', to:'/text'}
					]
				},
				{
					label: "QUẢN TRỊ HỆ THỐNG", icon:'pi pi-fw pi-compass',
					items: [
						{label: 'Người dùng', icon: 'pi pi-fw pi-users', to: '/admin/users'},
						{label: 'Vai trò người dùng', icon:'pi pi-fw pi-user-plus', to:'/display'},
						{label: 'Khách hàng', icon:'pi pi-fw pi-building', to:'/elevation'},
						{label: 'Cấu hình', icon:'pi pi-fw pi-cog', to:'/elevation'}
					]
				},
				{
					label: 'UI Kit', icon: 'pi pi-fw pi-star-fill',
					items: [
						{label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/input', badge: 6, badgeStyleClass: 'p-badge-danger'},
						{label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel"},
						{label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', to: '/invalidstate'},
						{label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/button', class: 'rotated-icon'},
						{label: 'Table', icon: 'pi pi-fw pi-table', to: '/table', badge: 6, badgeStyleClass: 'p-badge-help'},
						{label: 'List', icon: 'pi pi-fw pi-list', to: '/list'},
						{label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/tree'},
						{label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/panel'},
						{label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/overlay'},
						{label: "Media", icon: "pi pi-fw pi-image", to: "/media"},
						{label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/menus'},
						{label: 'Message', icon: 'pi pi-fw pi-comment', to: '/messages'},
						{label: 'File', icon: 'pi pi-fw pi-file', to: '/file'},
						{label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/chart'},
						{label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/misc'},
					]
				},
				{
					label: "Utilities", icon:'pi pi-fw pi-compass',
					items: [
						{label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/formlayout', badge: '6', badgeStyleClass: 'p-badge-warning'},
						{label: 'Display', icon:'pi pi-fw pi-desktop', to:'/display'},
						{label: 'Elevation', icon:'pi pi-fw pi-external-link', to:'/elevation'},
						{label: 'Flexbox', icon:'pi pi-fw pi-directions', to:'/flexbox'},
						{label: 'Icons', icon:'pi pi-fw pi-prime', to:'/icons'},
						{label: 'Text', icon:'pi pi-fw pi-pencil', to:'/text'},
						{label: 'Widgets', icon:'pi pi-fw pi-star', to:'/widgets'},
						{label: 'Grid System', icon:'pi pi-fw pi-th-large', to:'/grid'},
						{label: 'Spacing', icon:'pi pi-fw pi-arrow-right', to:'/spacing'},
						{label: 'Typography', icon:'pi pi-fw pi-align-center', to:'/typography'}
					]
				},
				{
                    label: "UI Blocks", icon: "pi pi-building",
                    items: [
                        {label: "Free Blocks", icon: "pi pi-fw pi-eye", to: "/blocks", badge: "new", badgeStyle:"width:40px"},
                        {label: "All Blocks", icon: "pi pi-fw pi-globe", url: "https://www.primefaces.org/primeblocks-vue", target: "_blank"}
                    ]
                },
				{
					label: 'Pages', icon: 'pi pi-fw pi-briefcase',
					items: [
						{label: 'Crud', icon: 'pi pi-fw pi-pencil', to: '/crud'},
						{label: 'Calendar', icon: 'pi pi-fw pi-calendar-plus', to: '/calendar'},
						{label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/timeline'},
						{
							label: 'Landing', 
							icon: 'pi pi-fw pi-globe',
							badge: '2', badgeStyleClass: 'p-badge-warning',
							items: [
								{label: 'Static', icon: 'pi pi-fw pi-globe', url: 'pages/landing.html', target: '_blank'},
								{label: 'Component', icon: 'pi pi-fw pi-globe', to: '/landing'}
							]
						},
						{label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/login'},
						{label: 'Invoice', icon: 'pi pi-fw pi-dollar', to: '/invoice'},
						{label: 'Help', icon: 'pi pi-fw pi-question-circle', to: '/help'},
						{label: 'Error', icon: 'pi pi-fw pi-times-circle', to: '/error'},
						{label: 'Not Found', icon: 'pi pi-fw pi-exclamation-circle', to: '/notfound'},
						{label: 'Access Denied', icon: 'pi pi-fw pi-lock', to: '/access'},
						{label: 'Contact Us', icon: 'pi pi-fw pi-pencil', to: '/contactus'},
						{label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
					]
				},
				{
					label: 'Hierarchy', icon: 'pi pi-fw pi-align-left',
					items: [
						{
							label: 'Submenu 1', icon: 'pi pi-fw pi-align-left',
							items: [
								{
									label: 'Submenu 1.1', icon: 'pi pi-fw pi-align-left',
									items: [
										{label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-align-left'},
										{label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-align-left'},
										{label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-align-left'},
									]
								},
								{
									label: 'Submenu 1.2', icon: 'pi pi-fw pi-align-left',
									items: [
										{label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-align-left'},
										{label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-align-left'}
									]
								},
							]
						},
						{
							label: 'Submenu 2', icon: 'pi pi-fw pi-align-left',
							items: [
								{
									label: 'Submenu 2.1', icon: 'pi pi-fw pi-align-left',
									items: [
										{label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-align-left'},
										{label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-align-left'},
										{label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-align-left'},
									]
								},
								{
									label: 'Submenu 2.2', icon: 'pi pi-fw pi-align-left',
									items: [
										{label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-align-left'},
										{label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-align-left'}
									]
								},
							]
						}
					]
				},
				{
					label: 'Start', icon: 'pi pi-fw pi-download',
					items: [
						{
							label: 'Buy Now', icon: 'pi pi-fw pi-shopping-cart', command: () => { window.location = "https://www.primefaces.org/store"}
						},
						{
							label: 'Documentation', icon: 'pi pi-fw pi-info-circle', to: '/documentation'
						}
					]
				}
            ]
        }
    },
    watch: {
			$route() {
				this.menuActive = this.isStatic() && !this.isMobile();
				this.$toast.removeAllGroups();
			},
			topbarTheme(newValue) {
				this.d_topbarTheme = newValue;
			},
			menuTheme(newValue) {
				this.d_menuTheme = newValue;
			},
			layoutMode(newValue) {
				this.d_layoutMode = newValue;
			},
    },
    methods: {
		onDocumentClick() {
			if (!this.searchClick && this.searchActive) {
                this.onSearchHide();
            }

			if(!this.topbarItemClick) {
				this.activeTopbarItem = null;
				this.topbarMenuActive = false;
			}

			if(!this.menuClick) {
				if(this.isHorizontal() || this.isSlim()) {
					this.menuActive = false;
					this.isSlimOrHorItemClick = false;
					EventBus.emit('reset-active-index');
				}

				if (this.isOverlay()) {
                    this.menuActive = false;
                }

				this.hideOverlayMenu();
				this.unblockBodyScroll();
			}

			if(!this.rightPanelClick) {
				this.rightPanelActive = false;
			}

			if(!this.inlineMenuClick) {
				this.inlineMenuTopActive = false;
				this.inlineMenuBottomActive = false;
			}

			this.topbarItemClick = false;
			this.menuClick = false;
			this.rightPanelClick = false;
			this.searchClick = false;
			this.inlineMenuClick = false;
        },
		onSearchToggle() {
            this.searchActive = !this.searchActive;
            this.searchClick = true;
        },
		onSearchClick() {
            this.searchClick = true;
        },
        onSearchHide() {
            this.searchActive = false;
            this.searchClick = false;
        },
		isHorizontal() {
			return this.menuMode === 'horizontal';
		},
		isSlim() {
			return this.menuMode === 'slim';
		},
		isOverlay() {
			return this.menuMode === 'overlay';
		},
		isStatic() {
			return this.menuMode === 'static';
		},
		isDesktop() {
			return window.innerWidth > 991;
		},
		isMobile() {
			return window.innerWidth <= 991;
		},
		hideOverlayMenu() {
			this.rotateMenuButton = false;
			this.overlayMenuActive = false;
			this.mobileMenuActive = false;
		},
		onMenuButtonClick(event){
			this.menuClick = true;
			this.menuActive = !this.menuActive;
			this.topbarMenuActive = false;
			this.topbarRightClick = true;
			this.rotateMenuButton = !this.rotateMenuButton;
			this.topbarMenuActive = false;

			if(!this.isDesktop()) {
				this.mobileMenuActive = !this.mobileMenuActive;
				if (this.mobileMenuActive) {
					this.blockBodyScroll();
				} else {
					this.unblockBodyScroll();
				}
			}

			event.preventDefault();
		},
		onTopbarMenuButtonClick(event) {
			this.topbarItemClick = true;
			this.topbarMenuActive = !this.topbarMenuActive;
			this.hideOverlayMenu();
			event.preventDefault();
		},
		onTopbarItemClick(event){
			this.topbarItemClick = true;

			if(this.activeTopbarItem === event.item)
				this.activeTopbarItem = null;
			else
				this.activeTopbarItem = event.item;

			event.originalEvent.preventDefault();
		},
		onTopbarMobileButtonClick(event) {
			this.mobileTopbarActive = !this.mobileTopbarActive;
			event.preventDefault();
		},
		onRightPanelButtonClick(event){
			this.rightPanelClick = true;
			this.rightPanelActive = !this.rightPanelActive;

			event.preventDefault();
		},
		onRightPanelClick(){
			this.rightPanelClick = true;
		},
		onHideClick(expanded){
			this.rightPanelActive = expanded;
		},
		onMenuClick() {
			this.menuClick = true;
		},
		onRootMenuItemClick(event) {
            if(event.isSameIndex) {
                this.isSlimOrHorItemClick = false;
            }
            else {
                this.isSlimOrHorItemClick = true;
            }
			this.menuActive = !this.menuActive;
		},
		onMenuItemClick(event) {
			if(!event.item.items) {
                this.isSlimOrHorItemClick = false;
				this.hideOverlayMenu();
				EventBus.emit('reset-active-index');
			}

			if(!event.item.items && (this.isHorizontal() || this.isSlim())) {
				this.menuActive = false;
			}
		},
		onMenuModeChange(menuMode) {
			this.menuMode = menuMode;
			this.overlayMenuActive = false;
			
			if(menuMode === 'static') {
				this.menuActive = true;
			}

			if(menuMode === 'horizontal') {
				this.inlineMenuPosition = 'bottom';
			}
		},
		onLayoutModeChange(menuColor) {
			this.$emit('layout-mode-change', menuColor);

			const layoutLink = document.getElementById('layout-css');
			const layoutHref = 'layout/css/layout-' + menuColor + '.css';
			this.replaceLink(layoutLink, layoutHref);

			const themeLink = document.getElementById('theme-css');
			const urlTokens = themeLink.getAttribute('href').split('/');
			urlTokens[urlTokens.length - 1] = 'theme-' + menuColor + '.css';
			const newURL = urlTokens.join('/');

			this.replaceLink(themeLink, newURL, () => {
				this.$appState.isNewThemeLoaded = true;
			});
		},
		onInlineMenuPositionChange(position) {
			this.inlineMenuPosition = position;
		},
		onChangeInlineMenu(e, key) {
			if(key === 'top') {
				if(this.inlineMenuBottomActive) {
					this.inlineMenuBottomActive = false;
				}
				this.inlineMenuTopActive = !this.inlineMenuTopActive;
			}
			if(key === 'bottom') {
				if(this.inlineMenuTopActive) {
					this.inlineMenuTopActive = false;
				}
				this.inlineMenuBottomActive = !this.inlineMenuBottomActive;
			}

			this.inlineMenuClick = true;
			
		},
		changeTheme(theme) {
			this.theme = theme;
			this.changeStyleSheetUrl('theme-css', theme);
		},
		onTopbarThemeChange(theme) {
			this.$emit('topbar-theme', theme);
		},
		onMenuTheme(menuTheme) {
			this.$emit('menu-theme', menuTheme);
		},
		changeStyleSheetUrl(id, value) {
			const element = document.getElementById(id);
			const urlTokens = element.getAttribute('href').split('/');
			urlTokens[urlTokens.length - 2] = value;
			const newURL = urlTokens.join('/');
			this.replaceLink(element, newURL);
		},
		replaceLink(linkElement, href, callback) {
			const id = linkElement.getAttribute('id');
			const cloneLinkElement = linkElement.cloneNode(true);

			cloneLinkElement.setAttribute('href', href);
			cloneLinkElement.setAttribute('id', id + '-clone');

			linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

			cloneLinkElement.addEventListener('load', () => {
				linkElement.remove();
				cloneLinkElement.setAttribute('id', id);

				if (callback) {
					callback();
				}
			});
		},
		blockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.add('blocked-scroll');
            } else {
                document.body.className += ' blocked-scroll';
            }
        },
        unblockBodyScroll() {
            if (document.body.classList) {
                document.body.classList.remove('blocked-scroll');
            } else {
                document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
                    'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        },
    },
    computed: {
			layoutContainerClass() {
				return [
					'layout-wrapper', 
					'layout-menu-' + this.menuTheme + ' layout-topbar-' + this.topbarTheme, 
					{
						'layout-menu-static': this.menuMode === 'static',
						'layout-menu-overlay': this.menuMode === 'overlay',
						'layout-menu-overlay-active': this.overlayMenuActive,
						'layout-menu-slim': this.menuMode === 'slim',
						'layout-menu-horizontal': this.menuMode === 'horizontal',
						'layout-menu-active': this.menuActive,
						'layout-menu-mobile-active': this.mobileMenuActive,
						'layout-topbar-mobile-active': this.mobileTopbarActive,
						'layout-rightmenu-active': this.rightPanelActive,
						'layout-rtl': this.$appState.RTL,
						'p-input-filled': this.$primevue.config.inputStyle === 'filled',
						'p-ripple-disabled': this.$primevue.config.ripple === false
					}
				];
			},
    },
    components: {
        'AppTopBar': AppTopBar,
        'AppInlineMenu': AppInlineMenu,
        'AppRightPanel': AppRightPanel,
        'AppMenu': AppMenu,
        'AppConfig': AppConfig,
        // 'AppFooter': AppFooter,
        'AppBreadcrumb': AppBreadcrumb
    }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
