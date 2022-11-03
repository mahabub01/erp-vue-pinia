<template>
    <Button @click="active = true" icon="pi pi-cog" v-if="!active" class="layout-config-button"></Button>
    <Sidebar v-model:visible="active" :position="isRTL ? 'left' : 'right'" :showCloseIcon="false"
		:baseZIndex="1000" class="layout-config p-sidebar-sm fs-small p-0">
        <div class="layout-config-panel flex flex-column">
            <div class="px-3 pt-3">
                <h5>Theme Customization</h5>
                <span>Ultima offers different themes for layout, topbar, menu etc.</span>
            </div>

            <hr class="mb-0" />

            <div class="layout-config-options p-3">
                <h6>Layout/Theme Scale</h6>
                <div class="flex align-items-center">
                    <Button icon="pi pi-minus" @click="decrementScale()" class="p-button-rounded p-button-text" :disabled="scale === scales[0]"></Button>
                    <i class="pi pi-circle-on m-1 scale-icon" v-for="s of scales" :key="s" :class="{'scale-active': s === scale}"></i>
                    <Button icon="pi pi-plus" @click="incrementScale()" class="p-button-rounded p-button-text" :disabled="scale === scales[scales.length - 1]"></Button>
                </div>

                <h6>Layout Mode</h6>
                <div class="flex">
                    <div class="flex align-items-center">
                        <RadioButton id="light" name="layoutMode" value="light" v-model="d_layoutMode" @change="changeLayoutMode($event, 'light')" />
                        <label for="layoutMode1" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Light</label>
                    </div>
                    <div class="flex align-items-center" :class="{'ml-4': !isRTL, 'mr-4': isRTL}">
                        <RadioButton id="dark" name="layoutMode" value="dark" v-model="d_layoutMode" @change="changeLayoutMode($event, 'dark')" />
                        <label for="layoutMode2" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Dark</label>
                    </div>
                </div>

                <h6>Menu Mode</h6>
                <div class="flex">
                    <div class="flex flex-column">
                        <div class="flex align-items-center">
                            <RadioButton name="menuMode" value="static" v-model="d_menuMode" id="menuMode1" @change="changeMenuMode($event, 'static')"></RadioButton>
                            <label for="menuMode1" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Static</label>
                        </div>
                        <div class="flex align-items-center mt-3">
                            <RadioButton name="menuMode" value="horizontal" v-model="d_menuMode" id="menuMode2" @change="changeMenuMode($event, 'horizontal')"></RadioButton>
                            <label for="menuMode2" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Horizontal</label>
                        </div>
                    </div>
                    <div class="flex flex-column" :class="{'ml-4': !isRTL, 'mr-4': isRTL}">
                        <div class="flex align-items-center">
                            <RadioButton name="menuMode" value="overlay" v-model="d_menuMode" id="menuMode3" @change="changeMenuMode($event, 'overlay')"></RadioButton>
                            <label for="menuMode3" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Overlay</label>
                        </div>
                        <div class="flex align-items-center mt-3">
                            <RadioButton name="menuMode" value="slim" v-model="d_menuMode" id="menuMode4" @change="changeMenuMode($event, 'slim')"></RadioButton>
                            <label for="menuMode4" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Slim</label>
                        </div>
                    </div>
                </div>

                <h6>Inline Menu Position</h6>
                <div class="flex">
                    <div class="flex align-items-center">
                        <RadioButton name="inlineMenuPosition" value="top" v-model="d_inlineMenuPosition" @change="changeInlineMenuPosition($event, 'top')" id="inlineMenuPosition1"></RadioButton>
                        <label for="inlineMenuPosition1" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Top</label>
                    </div>
                    <div class="flex align-items-center" :class="{'ml-4': !isRTL, 'mr-4': isRTL}">
                        <RadioButton name="inlineMenuPosition" value="bottom" v-model="d_inlineMenuPosition" @change="changeInlineMenuPosition($event, 'bottom')" id="inlineMenuPosition2"></RadioButton>
                        <label for="inlineMenuPosition2" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Bottom</label>
                    </div>
                    <div class="flex align-items-center" :class="{'ml-4': !isRTL, 'mr-4': isRTL}">
                        <RadioButton name="inlineMenuPosition" value="both" v-model="d_inlineMenuPosition" @change="changeInlineMenuPosition($event, 'both')" id="inlineMenuPosition3"></RadioButton>
                        <label for="inlineMenuPosition3" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Both</label>
                    </div>
                </div>

                <h6>Input Background</h6>
                <div class="flex">
                    <div class="flex align-items-center">
                        <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="value" @update:modelValue="onChange" />
                        <label for="input_outlined" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Outlined</label>
                    </div>
                    <div class="flex align-items-center" :class="{'ml-4': !isRTL, 'mr-4': isRTL}">
                        <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="value" @update:modelValue="onChange" />
                        <label for="input_filled" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Filled</label>
                    </div>
                </div>

                <h6>Ripple Effect</h6>
                <InputSwitch :modelValue="rippleActive" @update:modelValue="onRippleChange" />

                <h6>RTL</h6>
                <InputSwitch :modelValue="isRTL" @update:modelValue="onRTLChange" />

                <h6>Menu Themes</h6>
                <div v-if="layoutMode !== 'dark'" class="grid">
                    <div v-for="t of menuThemes" :key="t" class="col col-fixed">
                        <a style="cursor: pointer" @click="changeMenuTheme($event, t)" class="layout-config-color-option" :title="t.name">
                            <span class="color" :style="{'background-color': t.color}"></span>
                            <span class="check flex align-items-center justify-content-center" v-if="menuTheme === t.name">
                                <i class="pi pi-check" style="color: var(--primary-color-text)"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <p v-if="layoutMode==='dark'">Menu themes are only available in light mode by design as large surfaces can emit too much brightness in dark mode.</p>

                <h6>Topbar Themes</h6>
                <div class="grid">
                    <div v-for="t of topbarThemes" :key="t" class="col col-fixed">
                        <a style="cursor: pointer" @click="changeTopbarTheme($event, t)" class="layout-config-color-option" :title="t.name">
                            <span class="color" :style="{'background-color': t.color}"></span>
                            <span class="check flex align-items-center justify-content-center" v-if="topbarTheme === t.name">
                                <i class="pi pi-check" style="color: var(--primary-color-text)"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <h6>Component Themes</h6>
                <div class="grid">
                    <div v-for="t of themes" :key="t" class="col col-fixed">
                        <a style="cursor: pointer" @click="changeComponentTheme($event, t.name)" class="layout-config-color-option" :title="t.name">
                            <span class="color" :style="{'background-color': t.color}"></span>
                            <span class="check flex align-items-center justify-content-center" v-if="theme === t.name">
                                <i class="pi pi-check" style="color: var(--primary-color-text)"></i>
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </div>    
    </Sidebar>
</template>

<script>
export default {
    emits: ['menuModeChange', 'menuTheme', 'layoutModeChange', 'topbarTheme', 'themeChange', 'inlinemenuChange', 'menu-mode-change', 'topbar-theme', 'menu-theme', 'layout-mode-change', 'menu-color-change', 'inlinemenu-change', 'theme-change'],
    props: {
        menuMode: {
            type: String,
            default: 'static'
        },
        layoutMode: {
            type: String,
            default: 'light'
        },
        theme: {
            type: String,
            default: 'indigo'
        },
        themes: {
            type: Array,
            default: null
        },
        menuTheme: {
            type: String,
            default: 'light'
        },
        menuThemes: {
            type: Array,
            default: null
        },
        topbarTheme: {
            type: String,
            default: 'blue'
        },
        topbarThemes: {
            type: Array,
            default: null
        },
        inlineMenuPosition: {
            type: String,
            default: 'bottom'
        }
    },
    data() {
        return {
            active: false,
            d_menuMode: this.menuMode,
            d_layoutMode: this.layoutMode,
            d_inlineMenuPosition: this.inlineMenuPosition,
            scale: 14,
            scales: [12,13,14,15,16],
        }
    },
    watch: {
        $route() {
            if (this.active) {
                this.active = false;
                this.unbindOutsideClickListener();
            }
        },
        menuMode(newValue) {
            this.d_menuMode = newValue;
        },
        layoutMode(newValue) {
            this.d_layoutMode = newValue;
        },
        inlineMenuPosition(newValue) {
            this.d_inlineMenuPosition = newValue;
        }
    },
    outsideClickListener: null,
    methods: {
        onChange(value) {
            this.$primevue.config.inputStyle = value;
        },
        onRippleChange(value) {
            this.$primevue.config.ripple = value;
        },
        onRTLChange(value) {
            this.$appState.RTL = value;
        },
        toggleConfigurator(event) {
            this.active = !this.active;
            event.preventDefault();

            if (this.active)
                this.bindOutsideClickListener();
            else
                this.unbindOutsideClickListener();
        },
        hideConfigurator(event) {
            this.active = false;
            this.unbindOutsideClickListener();
            event.preventDefault();
        },
        changeMenuMode(event, layoutMode) {
            this.$emit('menu-mode-change', layoutMode);
            event.preventDefault();
        },
        changeMenuTheme(event, menuTheme) {
            this.$emit('menu-theme', menuTheme);
            event.preventDefault();
        },
        changeLayoutMode(event, menuColor) {
            this.$emit('layout-mode-change', menuColor);
            event.preventDefault();
        },
        changeTopbarTheme(event, theme) {
            this.$emit('topbar-theme', theme);
            event.preventDefault();
        },
        changeComponentTheme(event, theme) {
            this.$emit('theme-change', theme);
            event.preventDefault();
        },
        changeInlineMenuPosition(event, value) {
            this.$emit('inlinemenu-change', value);
            event.preventDefault();
        },
        decrementScale() {
            this.scale--;
            this.applyScale();
        },
        incrementScale() {
            this.scale++;
            this.applyScale();
        },
        applyScale() {
            document.documentElement.style.fontSize = this.scale + 'px';
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.active && this.isOutsideClicked(event)) {
                        this.active = false;
                    }
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
            }
        },
        isOutsideClicked(event) {
            return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target));
        }
    },
    computed: {
        containerClass() {
            return ['layout-config', {'layout-config-active': this.active}];
        },
        rippleActive() {
            return this.$primevue.config.ripple;
        },
        value() {
            return this.$primevue.config.inputStyle;
        },
        isRTL() {
            return this.$appState.RTL;
        }
    }
}
</script>
