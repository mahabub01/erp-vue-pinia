<template>
	<AppSubMenu class="layout-menu" :items="model" :menuMode="menuMode" :menuActive="active" :isSlimOrHorItemClick="isSlimOrHorItemClick" :root="true" :parentMenuItemActive="true" :mobileMenuActive="mobileMenuActive" @menuitem-click="onMenuItemClick" @root-menuitem-click="onRootMenuItemClick"/>
</template>

<script>
import AppSubMenu from './AppSubMenu';

export default {
	name: "AppMenu",
	emits: ["menu-click", "menuitem-click", "root-menuitem-click"],
	props: {
		model: Array,
		menuMode: String,
		active: Boolean,
		mobileMenuActive: Boolean,
		isSlimOrHorItemClick: Boolean
	},
	components: {
		'AppSubMenu': AppSubMenu
	},
	methods: {
		onMenuClick(event) {
            this.$emit("menu-click", event);
        },
        onMenuItemClick(event) {
            this.$emit("menuitem-click", event);
        },
		onRootMenuItemClick(event) {
			this.$emit("root-menuitem-click", event);
		}
	}
}
</script>

<style scoped>

</style>