<template>
	<div class="layout-footer flex align-items-center p-4 shadow-2">
        <img id="footer-logo" :src="'layout/images/footer-' + (layoutMode === 'light' ? 'ultima' : 'ultima-dark') + '.svg'" alt="ultima-footer-logo">
        <Button icon="pi pi-github fs-large" class="p-button-rounded p-button-text p-button-plain" :class="{'ml-auto mr-2': !isRTL, 'ml-2 mr-auto': isRTL}"></Button>
        <Button icon="pi pi-facebook fs-large" class="p-button-rounded p-button-text p-button-plain" :class="{'mr-2': !isRTL, 'ml-2': isRTL}"></Button>
        <Button icon="pi pi-twitter fs-large" class="p-button-rounded p-button-text p-button-plain" :class="{'mr-2': !isRTL, 'ml-2': isRTL}"></Button>
    </div>
</template>

<script>
	export default {
		name: "AppFooter",
		props: {
			layoutMode: {
				type: String,
				default: 'light'
			}
		},
		computed: {
			isRTL() {
				return this.$appState.RTL;
			}
		}
	}
</script>

<style scoped>

</style>