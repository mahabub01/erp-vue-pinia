<template>
	<div class="pages-body notfound-page flex flex-column">
		<div class="topbar p-3 flex justify-content-between flex-row align-items-center">
			<router-link class="topbar-left ml-3 flex" to="/">
				<div class="logo">
					<img src="layout/images/logo2x.png" alt=""/>
				</div>
			</router-link>
			<router-link class="topbar-right mr-3 flex" to="/">
				<Button type="button" label="DASHBOARD"
					class="p-button-text p-button-plain topbar-button"></button>
			</router-link>
		</div>

		<div class="align-self-center mt-auto mb-auto">
			<div class="pages-panel card flex flex-column">
				<div class="pages-header px-3 py-1">
					<h2>NOT FOUND</h2>
				</div>
				<div class="card mt-3 px-6">
					<img src="layout/images/pages/404.png" alt=""/>
				</div>
				<div class="pages-detail pb-6">Requested resource is not available.</div>
				<router-link to="/">
					<Button type="button" label="GO BACK TO DASHBOARD" class="p-button-text"></Button>
				</router-link>
			</div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped>

</style>
