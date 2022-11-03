<template>
	<div class="grid dashboard">
		<div class="col-12 md:col-6 lg:col-3">
			<div class="card overview-box flex flex-column pt-2">
				<div class="flex align-items-center muted-text">
					<i class="pi pi-shopping-cart"></i>
					<h6 class="m-0" :class="{'pl-2': !isRTL, 'pr-2': isRTL}">Orders</h6>
					<div :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></Button>
						<Menu ref="menu" :popup="true" :model="items"></Menu>
					</div>
				</div>
				<div class="flex justify-content-between mt-3 flex-wrap">
					<div class="flex flex-column" style="width: 80px;">
						<span class="mb-1 fs-xlarge">640</span>
						<span class="overview-status p-1 teal-bgcolor fs-small">1420 Completed</span>
					</div>
					<div class="flex align-items-end">
						<Chart ref="overviewChartData1" type="line" :data="overviewChartData1" :options="overviewChartOptions" responsive="true" :height="60" :width="160"></Chart>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 md:col-6 lg:col-3">
			<div class="card overview-box flex flex-column pt-2">
				<div class="flex align-items-center muted-text">
					<i class="pi pi-dollar"></i>
					<h6 class="m-0" :class="{'pl-2': !isRTL, 'pr-2': isRTL}">Revenue</h6>
					<div :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></Button>
						<Menu ref="menu" :popup="true" :model="items"></Menu>
					</div>
				</div>
				<div class="flex justify-content-between mt-3 flex-wrap">
					<div class="flex flex-column" style="width: 80px;">
						<span class="mb-1 fs-xlarge">$57K</span>
						<span class="overview-status p-1 teal-bgcolor fs-small">$9,640 Income</span>
					</div>
					<div class="flex align-items-end">
						<Chart ref="overviewChartData2" type="line" :data="overviewChartData2" :options="overviewChartOptions" responsive="true" :height="60" :width="160"></Chart>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 md:col-6 lg:col-3">
			<div class="card overview-box flex flex-column pt-2">
				<div class="flex align-items-center muted-text">
					<i class="pi pi-users"></i>
					<h6 class="m-0" :class="{'pl-2': !isRTL, 'pr-2': isRTL}">Customers</h6>
					<div :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></Button>
						<Menu ref="menu" :popup="true" :model="items"></Menu>
					</div>
				</div>
				<div class="flex justify-content-between mt-3 flex-wrap">
					<div class="flex flex-column" style="width: 80px;">
						<span class="mb-1 fs-xlarge">8572</span>
						<span class="overview-status p-1 pink-bgcolor fs-small">25402 Registered</span>
					</div>
					<div class="flex align-items-end">
						<Chart ref="overviewChartData3" type="line" :data="overviewChartData3" :options="overviewChartOptions" responsive="true" :height="60" :width="160"></Chart>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 md:col-6 lg:col-3">
			<div class="card overview-box flex flex-column pt-2">
				<div class="flex align-items-center muted-text">
					<i class="pi pi-comments"></i>
					<h6 class="m-0" :class="{'pl-2': !isRTL, 'pr-2': isRTL}">Comments</h6>
					<div :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></Button>
						<Menu ref="menu" :popup="true" :model="items"></Menu>
					</div>
				</div>
				<div class="flex justify-content-between mt-3 flex-wrap">
					<div class="flex flex-column" style="width: 80px;">
						<span class="mb-1 fs-xlarge">805</span>
						<span class="overview-status p-1 teal-bgcolor fs-small">85 Responded</span>
					</div>
					<div class="flex align-items-end">
						<Chart ref="overviewChartData4" type="line" :data="overviewChartData4" :options="overviewChartOptions" responsive="true" :height="60" :width="160"></Chart>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 lg:col-6">
			<div class="card height-100">
				<div class="card-header">
					<h5>Contact</h5>
				<div>
					<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></button>
					<Menu :popup="true" :model="items2"></Menu>
				</div>
			</div>

				<ul class="widget-list">
					<li class="flex align-items-center py-3">
						<div class="person-item flex align-items-center">
							<img src="demo/images/avatar/xuxuefeng.png">
							<div :class="{'ml-2': !isRTL, 'mr-2': isRTL}">
								<div>Xuxue Feng</div>
								<small class="muted-text">feng@ultima.org</small>
							</div>
						</div>
						<span class="person-tag indigo-bgcolor p-1 fs-small" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">Accounting</span>
						<span class="person-tag orange-bgcolor p-1 fs-small" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Sales</span>
					</li>

					<li class="flex align-items-center py-3">
						<div class="person-item flex align-items-center">
							<img src="demo/images/avatar/elwinsharvill.png">
							<div :class="{'ml-2': !isRTL, 'mr-2': isRTL}">
								<div>Elwin Sharvill</div>
								<small class="muted-text">sharvill@ultima.org</small>
							</div>
						</div>
						<span class="person-tag teal-bgcolor p-1 fs-small" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">Finance</span>
						<span class="person-tag orange-bgcolor p-1 fs-small" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Sales</span>
					</li>

					<li class="flex align-items-center py-3">
						<div class="person-item flex align-items-center">
							<img src="demo/images/avatar/avatar-1.png">
							<div :class="{'ml-2': !isRTL, 'mr-2': isRTL}">
								<div>Anna Fali</div>
								<small class="muted-text">fali@ultima.org</small>
							</div>
						</div>
						<span class="person-tag pink-bgcolor p-1 fs-small" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">Management</span>
					</li>

					<li class="flex align-items-center py-3">
						<div class="person-item flex align-items-center">
							<img src="demo/images/avatar/avatar-2.png">
							<div :class="{'ml-2': !isRTL, 'mr-2': isRTL}">
								<div>Jon Stone</div>
								<small class="muted-text">stone@ultima.org</small>
							</div>
						</div>
						<span class="person-tag pink-bgcolor p-1 fs-small" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">Management</span>
						<span class="person-tag teal-bgcolor p-1 fs-small" :class="{'ml-2': !isRTL, 'mr-2': isRTL}">Finance</span>
					</li>

					<li class="flex align-items-center py-3">
						<div class="person-item flex align-items-center">
							<img src="demo/images/avatar/avatar-3.png">
							<div :class="{'ml-2': !isRTL, 'mr-2': isRTL}">
								<div>Stephen Shaw</div>
								<small class="muted-text">shaw@ultima.org</small>
							</div>
						</div>
						<span class="person-tag teal-bgcolor p-1 fs-small" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">Finance</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="col-12 lg:col-6">
			<div class="card height-100">
				<div class="card-header">
					<h5>Order Graph</h5>
					<div>
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></button>
						<Menu ref="menu" :popup="true" :model="items"></Menu>
					</div>
				</div>
				<Chart type="line" :data="ordersChart" :options="ordersOptions"></Chart>
			</div>
		</div>

		<div class="col-12 lg:col-6">
			<div class="card height-100 widget-timeline">
				<div class="card-header">
					<h5>Timeline</h5>
					<div>
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></button>
						<Menu :popup="true" :model="items2"></Menu>
					</div>
				</div>
			
				<Timeline :value="timelineEvents" align="left" class="customized-timeline">
					<template #marker="slotProps">
						<span class="custom-marker shadow-2 p-2" :style="{backgroundColor: slotProps.item.color}">
							<i class="marker-icon" :class="slotProps.item.icon"></i>
						</span>
					</template>
					<template #content="slotProps">
						<Card class="mb-3">
							<template #title>
								{{slotProps.item.status}}
							</template>
							<template #subtitle>
								{{slotProps.item.date}}
							</template>
							<template #content>
								<img v-if="slotProps.item.image" :src="'assets/showcase/images/demo/product/' + slotProps.item.image" :alt="slotProps.item.name" width="200" class="shadow-2" />
								<p>{{slotProps.item.description}}</p>
							</template>
						</Card>
					</template>
				</Timeline>
			</div>
		</div>

		<div class="col-12 md:col-12 lg:col-6">
			<div class="card height-100">
				<DataTable :value="products" :rows="8" style="margin-bottom: 20px" :paginator="true" responsiveLayout="scroll">
					<Column header="Logo">
						<template #body="slotProps">
							<img :src="'demo/images/product/' + slotProps.data.image" class="shadow-4" :alt="slotProps.data.image" width="50" />
						</template>
					</Column>
					<Column field="name" header="Name" :sortable="true">
						<template #body="slotProps">
							{{slotProps.data.name}}
						</template>
					</Column>
					<Column field="category" header="Category" :sortable="true">
						<template #body="slotProps">
							{{slotProps.data.category}}
						</template>
					</Column>
					<Column field="price" header="Price" :sortable="true">
						<template #body="slotProps">
							{{formatCurrency(slotProps.data.price)}}
						</template>
					</Column>
					<Column header="View">
						<template #body>
							<Button icon="pi pi-search" class="p-button-rounded p-button-text mb-1"></Button>
						</template>
					</Column>
				</DataTable>
			</div>
		</div>

		<div class="col-12 lg:col-6">
			<div class="card height-100">
				<div class="card-header">
					<h5>Chat</h5>
					<div>
						<Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></button>
						<Menu ref="menu" :popup="true" :model="items3"></Menu>
					</div>
				</div>
				<div class="widget-chat">
					<ul id="chatcontainer">
						<li v-for="(chartMessage, i) in chatMessages" :key="chartMessage.url" class="flex align-items-start" :class="{'from': !!chartMessage.from, 'own justify-content-end': !chartMessage.from, 'mb-3': i !== chatMessages.length, 'mb-1': i === chatMessages.length}">
							<img v-if="!!chartMessage.url" :src="chartMessage.url" alt="avatar" :class="{'mr-2': !isRTL, 'ml-2': isRTL}">
							<div class="messages flex flex-column" :class="{'align-items-start': !!chartMessage.from, 'align-items-end': !chartMessage.from}">
								<span v-for="(message, j) in chartMessage.messages" :key="message" class="message" :class="{'cyan-bgcolor': !!chartMessage.from, 'pink-bgcolor': !chartMessage.from, 'mt-1': j !== chartMessage.messages.length}">
									{{message}}
								</span>
							</div>
						</li>
					</ul>
					<div class="p-inputgroup write-message mt-3">
						<span class="p-inputgroup-addon">
							<Button icon="pi pi-plus-circle" class="p-button-text p-button-plain"></Button>
						</span>
						<InputText ref="input" v-model="chatInput" placeholder="Write your message (Hint: 'PrimeVue')" @keydown="onChatKeydown($event)" />
						<span class="p-inputgroup-addon">
							<Button icon="pi pi-video" class="p-button-text p-button-plain"></Button>
						</span>
						<span class="p-inputgroup-addon">
							<Button icon="pi pi-clock" @click="toggleEmojis" class="p-button-text p-button-plain" aria:haspopup="true" aria-controls="overlay_panel"></Button>
							<OverlayPanel ref="op" class="emoji" appendTo="body" style="width: 45em">
								<Button type="button" v-for="emoji in chatEmojis" :key="emoji" @click="onEmojiOverlayPanel(emoji)" :label="emoji" 
									class="emoji-button p-2 p-button-text p-button-plain"></Button>
							</OverlayPanel>
						</span>
					</div>
				</div>
			</div>
		</div>

		<div class="col-12 lg:col-3">
        <div class="card height-100">
            <div class="card-header">
                <h5>Activity</h5>
                <div>
                    <Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></Button>
                    <Menu ref="menu" :popup="true" :model="items"></Menu>
                </div>
            </div>

            <ul class="widget-activity">
                <li>
                    <div class="activity-item flex flex-column">
                        <div class="activity-title mb-1">Income</div>
                        <div class="activity-subtext mb-2">30 November, 16.20</div>
                        <ProgressBar :value="50" :showValue="false"></ProgressBar>
                    </div>
                </li>
                <li>
                    <div class="activity-item flex flex-column">
                        <div class="activity-title mb-1">Tax</div>
                        <div class="activity-subtext mb-2">1 December, 15.27</div>
                        <ProgressBar :value="15" :showValue="false"></ProgressBar>
                    </div>
                </li>
                <li>
                    <div class="activity-item flex flex-column">
                        <div class="activity-title mb-1">Invoices</div>
                        <div class="activity-subtext mb-2">1 December, 15.28</div>
                        <ProgressBar :value="78" :showValue="false"></ProgressBar>
                    </div>
                </li>
                <li>
                    <div class="activity-item flex flex-column">
                        <div class="activity-title mb-1">Expanses</div>
                        <div class="activity-subtext mb-2">3 December, 09.15</div>
                        <ProgressBar :value="66" :showValue="false"></ProgressBar>
                    </div>
                </li>
                <li>
                    <div class="activity-item flex flex-column">
                        <div class="activity-title mb-1">Bonus</div>
                        <div class="activity-subtext mb-2">1 December, 23.55</div>
                        <ProgressBar :value="85" :showValue="false"></ProgressBar>
                    </div>
                </li>
                <li>
                    <div class="activity-item flex flex-column">
                        <div class="activity-title mb-1">Revenue</div>
                        <div class="activity-subtext mb-2">30 November, 16.20</div>
                        <ProgressBar :value="54" :showValue="false"></ProgressBar>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="col-12 lg:col-3">
        <div class="card height-100">
            <div class="card-header">
                <h5>Best Sellers</h5>
                <div>
                    <Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggleMenu"></Button>
                    <Menu :popup="true" :model="items"></Menu>
                </div>
            </div>
            <ul class="widget-bestsellers">
                <li>
                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/blue-band.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Blue Band</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/bracelet.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Bracelet</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/black-watch.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Black Watch</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/bamboo-watch.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Bamboo Watch</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/blue-t-shirt.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Blue T-Shirt</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/game-controller.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Game Controller</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/gold-phone-case.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Phone Case</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>

                    <div class="bestseller-item flex align-items-center p-3 mb-2">
                        <img src="demo/images/product/purple-t-shirt.jpg" alt="product" :class="{'mr-3': !isRTL, 'ml-3': isRTL}">
                        <span>Purple T-Shirt</span>
                        <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
	</div>
</template>

<script>
import ProductService from '../service/ProductService';

export default {
	data() {
		return {
			chatInput: '',
			items: [
				{label: 'Update', icon: 'pi pi-fw pi-refresh'},
				{label: 'Edit', icon: 'pi pi-fw pi-pencil'}
			],
			items2: [
				{label: 'New', icon: 'pi pi-fw pi-plus'},
				{label: 'Edit', icon: 'pi pi-fw pi-pencil'},
				{label: 'Delete', icon: 'pi pi-fw pi-trash'}
			],
			items3: [
				{label: 'View Media', icon: 'pi pi-fw pi-images'},
				{label: 'Starred Messages', icon: 'pi pi-fw pi-star'},
				{label: 'Search', icon: 'pi pi-fw pi-search'}
			],
			timelineEvents: [
				{ status: 'Ordered', date: '15/10/2020 10:30', icon: "pi pi-shopping-cart", color: '#E91E63', description: "Richard Jones (C8012) has ordered a blue t-shirt for $79." },
				{ status: 'Processing', date: '15/10/2020 14:00', icon: "pi pi-cog", color: '#FB8C00', description: "Order #99207 has processed succesfully." },
				{ status: 'Shipped', date: '15/10/2020 16:15', icon: "pi pi-compass", color: '#673AB7', description: "Order #99207 has shipped with shipping code 2222302090." },
				{ status: 'Delivered', date: '16/10/2020 10:00', icon: "pi pi-check-square", color: '#0097A7', description: "Richard Jones (C8012) has recieved his blue t-shirt." }
			],
			products: null,
			chatMessages: [
				{ from: 'Ioni Bowcher', url: 'demo/images/avatar/ionibowcher.png', messages: ['Hey M. hope you are well.', 'Our idea is accepted by the board. Now it’s time to execute it'] },
				{ messages: ['We did it! 🤠'] },
				{ from: 'Ioni Bowcher', url: 'demo/images/avatar/ionibowcher.png', messages: ['That\'s really good!'] },
				{ messages: ['But it’s important to ship MVP ASAP'] },
				{ from: 'Ioni Bowcher', url: 'demo/images/avatar/ionibowcher.png', messages: ['I’ll be looking at the process then, just to be sure 🤓'] },
				{ messages: ['That’s awesome. Thanks!'] }
			],
			chatEmojis:[
				'😀','😃','😄','😁','😆','😅','😂','🤣','😇','😉','😊','🙂','🙃','😋','😌','😍','🥰','😘','😗','😙','😚','🤪','😜','😝','😛',
				'🤑','😎','🤓','🧐','🤠','🥳','🤗','🤡','😏','😶','😐','😑','😒','🙄','🤨','🤔','🤫','🤭','🤥','😳','😞','😟','😠','😡','🤬','😔',
				'😟','😠','😡','🤬','😔','😕','🙁','😬','🥺','😣','😖','😫','😩','🥱','😤','😮','😱','😨','😰','😯','😦','😧','😢','😥','😪','🤤'
			],
			overviewChartData1: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
				datasets: [
					{
						data: [50, 64, 32, 24, 18, 27, 20, 36, 30],
						borderColor: [
							'#4DD0E1',
						],
						backgroundColor: [
							'rgba(77, 208, 225, 0.8)',
						],
						borderWidth: 2,
						fill: true,
						tension: .4
					}
				]
			},
			overviewChartData2: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
				datasets: [
					{
						data: [11, 30, 52, 35, 39, 20, 14, 18, 29],
						borderColor: [
							'#4DD0E1',
						],
						backgroundColor: [
							'rgba(77, 208, 225, 0.8)',
						],
						borderWidth: 2,
						fill: true,
						tension: .4
					}
				]
			},
			overviewChartData3: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
				datasets: [
					{
						data: [20, 29, 39, 36, 45, 24, 28, 20, 15],
						borderColor: [
							'#4DD0E1',
						],
						backgroundColor: [
							'rgba(77, 208, 225, 0.8)',
						],
						borderWidth: 2,
						fill: true,
						tension: .4
					}
				]
			},
			overviewChartData4: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
				datasets: [
					{
						data: [30, 39, 50, 21, 33, 18, 10, 24, 20],
						borderColor: [
							'#4DD0E1',
						],
						backgroundColor: [
							'rgba(77, 208, 225, 0.8)',
						],
						borderWidth: 2,
						fill: true,
						tension: .4
					}
				]
			},
			overviewChartOptions: {
				plugins: {
					legend: {
						display: false
					}
				},
				responsive: true,
				scales: {
					y: {
						display: false
					},
					x: {
						display: false
					}
				},
				tooltips: {
					enabled: false
				},
				elements: {
					point: {
						radius: 0
					}
				},
			},
			ordersChart: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
				datasets: [{
					label: 'New Orders',
					data: [31, 83, 69, 29, 62, 25, 59, 26, 46],
					borderColor: [
						'#4DD0E1',
					],
					backgroundColor: [
						'rgba(77, 208, 225, 0.8)',
					],
					borderWidth: 2,
					fill: true,
					tension: .4,
				}, {
					label: 'Completed Orders',
					data: [67, 98, 27, 88, 38, 3, 22, 60, 56],
					borderColor: [
						'#3F51B5',
					],
					backgroundColor: [
						'rgba(63, 81, 181, 0.8)',
					],
					borderWidth: 2,
					fill: true,
					tension: .4,
				}]
			},
			ordersOptions: null
		}
	},
	productService: null,
	created() {
		this.productService = new ProductService();
	},
	mounted() {
		this.productService.getProducts().then(data => this.products = data);
		this.refreshChart();
	},
	watch: {
		'$appState.isNewThemeLoaded'(isLoaded) {
			if (isLoaded) {
				this.refreshChart();
				this.$appState.isNewThemeLoaded = false;
			}
		}
	},
	methods: {
		formatCurrency(value) {
			return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
		},
		toggleMenu(event) {
			this.$refs.menu.toggle(event);
		},
		onEmojiOverlayPanel(chatInput, emoji) {
			this.$refs.op.hide();
			this.onEmojiClick(chatInput, emoji);
		},
		toggleEmojis(event) {
			this.$refs.op.toggle(event);
		},
		onEmojiClick(emoji) {
			this.chatInput += emoji;
		},
		onChatKeydown(event) {
			if (event.key === 'Enter') {
				let message = event.currentTarget.value;
				let lastMessage = this.chatMessages[this.chatMessages.length - 1];

				if (lastMessage.from) {
					this.chatMessages.push({ messages: [message] });
				}
				else {
					lastMessage.messages.push(message);
				}

				if (message.match(/primeng|primereact|primefaces|primevue/i)) {
					this.chatMessages.push({ from: 'Ioni Bowcher', url: 'demo/images/avatar/ionibowcher.png', messages: ['Always bet on Prime!'] });
				}

				event.currentTarget.value = '';
				this.chatInput = '';

				const el = document.getElementById('chatcontainer');
				setTimeout(() => {
					el.scroll({
						top: el.scrollHeight,
						behavior: 'smooth'
					});
				}, 1);
			}
		},
		refreshChart() {
			this.ordersOptions = this.getOrdersOptions();
            this.setOverviewColors();
		},
		getOrdersOptions() {
                const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
                const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
                const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
                return {
                    plugins: {
						legend: {
							display: true,
							labels: {
								font: {
									family: fontFamily
								},
								color: textColor
							}
						}
					},
                    responsive: true,
                    scales: {
                        y: {
                            ticks: {
                                font: {
									family: fontFamily
								},
                                color: textColor
                            },
                            grid: {
                                color: gridLinesColor
                            }
                        },
                        x: {
                            ticks: {
                                font: {
									family: fontFamily
								},
                                color: textColor
                            },
                            grid: {
                                color: gridLinesColor
                            }
                        }
                    }
                }
            },
		setOverviewColors() {
			const { pinkBorderColor, pinkBgColor, tealBorderColor, tealBgColor } = this.getOverviewColors();

			this.overviewChartData1.datasets[0].borderColor[0] = tealBorderColor;
			this.overviewChartData1.datasets[0].backgroundColor[0] = tealBgColor;

			this.overviewChartData2.datasets[0].borderColor[0] = tealBorderColor;
			this.overviewChartData2.datasets[0].backgroundColor[0] = tealBgColor;

			this.overviewChartData3.datasets[0].borderColor[0] = pinkBorderColor;
			this.overviewChartData3.datasets[0].backgroundColor[0] = pinkBgColor;

			this.overviewChartData4.datasets[0].borderColor[0] = tealBorderColor;
			this.overviewChartData4.datasets[0].backgroundColor[0] = tealBgColor;

			this.$refs.overviewChartData1.reinit();
			this.$refs.overviewChartData2.reinit();
			this.$refs.overviewChartData3.reinit();
			this.$refs.overviewChartData4.reinit();
		},
		getOverviewColors() {
            const isLight = this.$appState.layoutMode === 'light';
            return {
                pinkBorderColor: isLight ? '#E91E63' : '#EC407A',
				pinkBgColor: isLight ? '#F48FB1' : '#F8BBD0',
				tealBorderColor: isLight ? '#009688' : '#26A69A',
				tealBgColor: isLight ? '#80CBC4' : '#B2DFDB',
                whiteBorderColor: isLight ? '#ffffff' : '#ffffff',
                whiteBgColor: isLight ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.35)',
            }
        },
	},
	computed: {
		isRTL() {
            return this.$appState.RTL;
        }
	}
}
</script>

<style lang="scss" scoped>

</style>
