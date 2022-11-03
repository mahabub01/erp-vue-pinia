/* eslint-disable */
<template>
	<div class="pages-body login-page flex flex-column">
    <div class="topbar p-3 flex justify-content-between flex-row align-items-center">
        <router-link class="topbar-left ml-3 flex" to="/">
            <div class="logo">
                <img src="assets/layout/images/logo2x.png" alt=""/>
            </div>
        </router-link>
        <router-link class="topbar-right mr-3 flex" to="/">
            <Button type="button" label="DASHBOARD" class="p-button-text p-button-plain topbar-button"></Button>
        </router-link>
    </div>

    <div class="align-self-center mt-auto mb-auto">
        <div class="pages-panel card flex flex-column">
            <div class="pages-header px-3 py-1">
                <h2>LOGIN</h2>
            </div>

            <h4>Welcome</h4>

            <div class="pages-detail mb-6 px-6">Please use the form to sign-in Ultima network</div>

            <div class="input-panel flex flex-column px-3">
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-envelope"></i>
                    </span>
                    <span class="p-float-label">
                        <InputText type="text" id="email" />
                        <label for="email">Email</label>
                    </span>
                </div>

                <div class="p-inputgroup mt-3 mb-6">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-lock"></i>
                    </span>
                    <span class="p-float-label">
                        <InputText type="password" id="password" />
                        <label for="password">Password</label>
                    </span>
                </div>

            </div>

            <Button class="login-button mb-6 px-3" label="LOGIN"></Button>

        </div>
    </div>
</div>

</template>
/* eslint-disable */
<script>
    /* eslint-disable */
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		}
	}
</script>

<style scoped>

</style>
