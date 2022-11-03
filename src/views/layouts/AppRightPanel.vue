<template>
	<Sidebar v-model:visible="d_expanded" @hide="$emit('hide', d_expanded)" @click="$emit('content-click',$event)" :position="isRTL ? 'left' : 'right'" :showCloseIcon="false"
		:baseZIndex="1000" class="layout-rightmenu p-sidebar-sm fs-small py-3 " :class="isRTL ? 'pl-0 pr-3' : 'pl-3 pr-0'">
		<div class="online-members flex flex-column mt-3" :class="{'ml-3': !isRTL, 'mr-3': isRTL}">
			<h6 class="header">ONLINE MEMBERS</h6>
			<div class="flex flex-row flex-wrap">
				<img class="m-1" src="demo/images/avatar/avatar-1.png" alt="avatar-1"/>
				<img class="m-1" src="demo/images/avatar/avatar-2.png" alt="avatar-2"/>
				<img class="m-1" src="demo/images/avatar/avatar-3.png" alt="avatar-3"/>
				<img class="m-1" src="demo/images/avatar/avatar-4.png" alt="avatar-4"/>
				<img class="m-1" src="demo/images/avatar/avatar-5.png" alt="avatar-5"/>
				<img class="m-1" src="demo/images/avatar/avatar-6.png" alt="avatar-6"/>
				<img class="m-1" src="demo/images/avatar/avatar-7.png" alt="avatar-7"/>
				<img class="m-1" src="demo/images/avatar/avatar-8.png" alt="avatar-8"/>
				<img class="m-1" src="demo/images/avatar/avatar-9.png" alt="avatar-9"/>
				<img class="m-1" src="demo/images/avatar/avatar-10.png" alt="avatar-10"/>
				<img class="m-1" src="demo/images/avatar/avatar-11.png" alt="avatar-11"/>
				<img class="m-1" src="demo/images/avatar/avatar-12.png" alt="avatar-12"/>
				<img class="m-1" src="demo/images/avatar/avatar-13.png" alt="avatar-13"/>
				<img class="m-1" src="demo/images/avatar/avatar-14.png" alt="avatar-14"/>
				<img class="m-1" src="demo/images/avatar/avatar-15.png" alt="avatar-15"/>
				<img class="m-1" src="demo/images/avatar/avatar-16.png" alt="avatar-16"/>
			</div>
			<span class="mt-3"><b>+19</b> Costumers</span>
			</div>
			<div class="latest-activity flex flex-column mt-6" :class="{'ml-3': !isRTL, 'mr-3': isRTL}">
				<h6 class="header">LATEST ACTIVITY</h6>
				<div class="flex flex-row pt-2">
					<i class="pi pi-images align-self-start p-2" :class="{'mr-2': !isRTL, 'ml-2': isRTL}"></i>
				<div class="flex flex-column">
					<span class="font-bold mb-1">New Sale</span>
					<span class="mb-2">Richard Jones has purchased a blue t-shirt for $79.</span>
					<span class="flex align-items-center">
						<img :class="{'mr-2': !isRTL, 'ml-2': isRTL}" src="demo/images/avatar/activity-1.png" alt=""/>
						<small class="muted-text">Emmy Adams, 21.40</small>
					</span>
				</div>
			</div>
			<div class="flex flex-row pt-3">
				<i class="pi pi-images align-self-start p-2" :class="{'mr-2': !isRTL, 'ml-2': isRTL}"></i>
				<div class="flex flex-column">
					<span class="font-bold mb-1">Withdrawal Initiated</span>
					<span class="mb-2">Your request for withdrawal of $2500 has been initiated.</span>
					<span class="flex align-items-center">
						<img :class="{'mr-2': !isRTL, 'ml-2': isRTL}" src="demo/images/avatar/activity-2.png" alt="avatar-2"/>
						<small class="muted-text">Emily Walter, 21.40</small>
					</span>
				</div>
			</div>
			<div class="flex flex-row pt-3">
				<i class="pi pi-images align-self-start p-2" :class="{'mr-2': !isRTL, 'ml-2': isRTL}"></i>
				<div class="flex flex-column">
					<span class="font-bold mb-1">Question Received</span>
					<span class="mb-2">Jane Davis has posted a new question about your product.</span>
					<span class="flex align-items-center">
						<img :class="{'mr-2': !isRTL, 'ml-2': isRTL}" src="demo/images/avatar/activity-3.png" alt="avatar-3"/>
						<small class="muted-text">Jane Davis, 21.45</small>
					</span>
				</div>
			</div>
			</div>
			<div class="next-events flex flex-column mt-6" :class="{'ml-3': !isRTL, 'mr-3': isRTL}">
			<h6 class="header">NEXT EVENTS</h6>
			<ul>
				<li><i class="pi pi-eye" :class="{'mr-3': !isRTL, 'ml-3': isRTL}"></i>A/B Test</li>
				<li><i class="pi pi-video" :class="{'mr-3': !isRTL, 'ml-3': isRTL}"></i>Video Shoot</li>
				<li><i class="pi pi-sitemap" :class="{'mr-3': !isRTL, 'ml-3': isRTL}"></i>Board Meeting</li>
				<li><i class="pi pi-compass" :class="{'mr-3': !isRTL, 'ml-3': isRTL}"></i>Q4 Planning</li>
				<li><i class="pi pi-palette" :class="{'mr-3': !isRTL, 'ml-3': isRTL}"></i>Design Training</li>
			</ul>
		</div>
	</Sidebar>
</template>

<script>
	export default {
		name: "AppRightPanel",
		emits: ['content-click', 'hide'],
		props: {
			expanded: Boolean
		},
		data() {
			return {
				d_expanded: null
			}
		},
		watch: {
			expanded(value) {
				this.d_expanded = value;
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
