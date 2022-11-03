<template>
<div class="grid dashboard">
    <div class="col-12 md:col-8">
        <div class="card height-100">
            <div class="card-header">
                <h5>Monthly Comparison</h5>
                <Button label="Vertical/Stacked Data" class="p-button-text" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}" @click="changeMonthlyDataView()"></Button>
            </div>

            <Chart ref="monthly" type="bar" :data="chartMonthlyData" :options="chartMonthlyOptions" responsive="true" :height="400"></Chart>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="card widget-insights height-100">
            <div class="card-header mb-2">
                <h5>Insights</h5>
                <div>
                    <Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggle"></Button>
                    <Menu ref="menu" :popup="true" :model="items"></Menu> 
                </div>
            </div>
            <div class="card-subheader mb-2 flex align-items-center">
                <span>November 22 - November 29</span>
                <Button label="Semi/Full Data" class="p-button-text" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}" @click="changeDoughnutDataView()"></Button>
            </div>
            <Chart ref="doughnut" type="doughnut" :data="doughnutData" :options="doughnutOptions" responsive="true"></Chart>
            <div class="flex flex-column justify-content-center">
                <div class="flex flex-row align-items-center mt-4 px-3">
                    <i class="pi pi-thumbs-up p-3 rounded-circle lightgreen-bgcolor solid-surface-text-color"></i>
                    <div class="flex flex-column" :class="{'ml-3': !isRTL, 'mr-3': isRTL}">
                        <span>Best Day of the Week</span>
                        <small>Friday</small>
                    </div>
                    <span class="indigo-color" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">95</span>
                </div>
                <div class="flex flex-row align-items-center my-4 px-3">
                    <i class="pi pi-thumbs-down rounded-circle p-3 orange-bgcolor solid-surface-text-color"></i>
                    <div class="flex flex-column" :class="{'ml-3': !isRTL, 'mr-3': isRTL}">
                        <span>Worst Day of the Week</span>
                        <small>Saturday</small>
                    </div>
                    <span class="indigo-color" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}">6</span>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="card widget-social">
            <div class="flex justify-content-between align-items-center p-3">
                <div class="social-icon">
                    <i class="pi pi-twitter blue-color fs-xxlarge"></i>
                </div>
                <div class="info flex flex-column">
                    <span class="value">44.995</span>
                    <span class="subtext mt-2">Retweets</span>
                </div>
            </div>

            <div class="stats flex justify-content-between mt-3">
                <div class="left flex flex-column ">
                    <span class="title">Target</span>
                    <span class="value mb-2">10.000</span>
                    <ProgressBar :value="50" :showValue="false"></ProgressBar>
                </div>
                <div class="right flex flex-column">
                    <span class="title">All Time Record</span>
                    <span class="value mb-2">50.702</span>
                    <ProgressBar :value="24" :showValue="false"></ProgressBar>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="card widget-social">
            <div class="flex justify-content-between align-items-center p-3">
                <div class="social-icon">
                    <i class="pi pi-facebook indigo-color fs-xxlarge"></i>
                </div>
                <div class="info flex flex-column">
                    <span class="value">44.995</span>
                    <span class="subtext mt-2">Facebook Interactions</span>
                </div>
            </div>

            <div class="stats flex justify-content-between mt-3">
                <div class="left flex flex-column ">
                    <span class="title">Target</span>
                    <span class="value mb-2">10.000</span>
                    <ProgressBar :value="23" :showValue="false"></ProgressBar>
                </div>
                <div class="right flex flex-column">
                    <span class="title">All Time Record</span>
                    <span class="value mb-2">99.028</span>
                    <ProgressBar :value="38" :showValue="false"></ProgressBar>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-4">
        <div class="card widget-social">
            <div class="flex justify-content-between align-items-center p-3">
                <div class="social-icon">
                    <i class="pi pi-github text-color fs-xxlarge"></i>
                </div>
                <div class="info flex flex-column">
                    <span class="value">81.002</span>
                    <span class="subtext mt-2">Star</span>
                </div>
            </div>

            <div class="stats flex justify-content-between mt-3">
                <div class="left flex flex-column ">
                    <span class="title">Target</span>
                    <span class="value mb-2">10.000</span>
                    <ProgressBar :value="62" :showValue="false"></ProgressBar>
                </div>
                <div class="right flex flex-column">
                    <span class="title">All Time Record</span>
                    <span class="value mb-2">162.550</span>
                    <ProgressBar :value="14" :showValue="false"></ProgressBar>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-12">
        <div class="card grid grid-nogutter widget-sales block sm:flex">
            <div class="lg:col-3 md:col-6 sm:col-12 p-0">
                <div class="sales-info flex flex-column p-4">
                    <span class="muted-text">Store A Sales</span>
                    <span class="fs-large mt-2">
                        <i v-if="storeADiff !== 0" class="fw-700 fs-large pi" :class="{'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeADiff > 0, 'pi-arrow-down pink-color': storeADiff < 0}"></i>
                        ${{storeATotalValue}}
                        <span v-if="storeADiff !== 0" class="fw-500 fs-normal" :class="{'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeADiff > 0, 'pink-color': storeADiff < 0}">
                            {{storeADiff > 0 ? '+' : ''}}{{storeADiff}}
                        </span>
                    </span>
                </div>
                <div class="px-4">
                    <Chart ref="storeA" type="line" :data="storeAData" :options="storeOptions" responsive="true"></Chart>
                </div>
            </div>
            <div class="lg:col-3 md:col-6 sm:col-12 p-0">
                <div class="sales-info flex flex-column p-4">
                    <span class="muted-text">Store B Sales</span>
                    <span class="fs-large mt-2">
                        <i v-if="storeBDiff !== 0" class="fw-700 fs-large pi" :class="{'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeBDiff > 0, 'pi-arrow-down pink-color': storeBDiff < 0}"></i>
                        ${{storeBTotalValue}}
                        <span v-if="storeBDiff !== 0" class="fw-500 fs-normal" :class="{'ml-1': !isRTL, 'mr-1': isRTL,'green-color': storeBDiff > 0, 'pink-color': storeBDiff < 0}">
                            {{storeBDiff > 0 ? '+' : ''}}{{storeBDiff}}
                        </span>
                    </span>
                </div>
                <div class="px-4">
                    <Chart ref="storeB" type="line" :data="storeBData" :options="storeOptions" responsive="true"></Chart>
                </div>
            </div>
            <div class="lg:col-3 md:col-6 sm:col-12 p-0">
                <div class="sales-info flex flex-column p-4">
                    <span class="muted-text">Store C Sales</span>
                    <span class="fs-large mt-2">
                        <i v-if="storeCDiff !== 0" class="fw-700 fs-large pi" :class="{'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeCDiff > 0, 'pi-arrow-down pink-color': storeCDiff < 0}"></i>
                        ${{storeCTotalValue}}
                        <span v-if="storeCDiff !== 0" class="fw-500 fs-normal" :class="{'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeCDiff > 0, 'pink-color': storeCDiff < 0}">
                            {{storeCDiff > 0 ? '+' : ''}}{{storeCDiff}}
                        </span>
                    </span>
                </div>
                <div class="px-4">
                    <Chart ref="storeC" type="line" :data="storeCData" :options="storeOptions" responsive="true"></Chart>
                </div>
            </div>
            <div class="lg:col-3 md:col-6 sm:col-12 p-0">
                <div class="sales-info flex flex-column p-4">
                    <span class="muted-text">Store D Sales</span>
                    <span class="fs-large mt-2">
                        <i v-if="storeDDiff !== 0" class="fw-700 fs-large pi" :class="{'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeDDiff > 0, 'pi-arrow-down pink-color': storeDDiff < 0}"></i>
                        ${{storeDTotalValue}}
                        <span v-if="storeDDiff !== 0" class="fw-500 fs-normal" :class="{'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeDDiff > 0, 'pink-color': storeDDiff < 0}">
                            {{storeDDiff > 0 ? '+' : ''}}{{storeDDiff}}
                        </span>
                    </span>
                </div>
                <div class="px-4">
                    <Chart ref="storeD" type="line" :data="storeDData" :options="storeOptions" responsive="true"></Chart>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-6">
        <div class="card height-100 widget-topsearchs">
            <div class=card-header>
                <h5>Top Searchs</h5>
                <div>
                    <Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggle"></Button>
                    <Menu ref="menu" :popup="true" :model="items"></Menu>
                </div>
            </div>
            <div class="flex justify-content-between item">
                <span>Mat Orange Case</span>
                <span class="value type-green">82% CONV RATE</span>
            </div>
            <div class="flex justify-content-between item">
                <span>Space T-Shirt</span>
                <span class="value type-green">78% CONV RATE</span>
            </div>
            <div class="flex justify-content-between item">
                <span>Orange Black Hoodie</span>
                <span class="value type-green">61% CONV RATE</span>
            </div>
            <div class="flex justify-content-between item">
                <span>Wonders Notebook</span>
                <span class="value type-yellow">48 CONV RATE</span>
            </div>
            <div class="flex justify-content-between item">
                <span>Robots T-Shirt</span>
                <span class="value type-yellow">34% CONV RATE</span>
            </div>
            <div class="flex justify-content-between item">
                <span>Green Portal Sticker</span>
                <span class="value type-pink">11% CONV RATE</span>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-6">
        <div class="card">
            <DataTable :value="products" class="p-datatable-customers" :rows="4" style="margin-bottom: 20px" :paginator="true" responsiveLayout="scroll">
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

    <div class="col-12 md:col-4">
        <div class="card widget-expenses">
            <div class=card-header>
                <h5>Expenses</h5>
                <div>
                    <Button icon="pi pi-ellipsis-h" class="p-button-rounded p-button-text p-button-plain" @click="toggle"></Button>
                    <Menu ref="menu" :popup="true" :model="items"></Menu>
                </div>
            </div>
            <div class="card-subheader mb-2 pb-3">
                November 22 - November 29
            </div>

            <div class="flex justify-content-between align-items-center my-2 item">
                <div class="flex flex-column">
                    <i class="pi pi-cloud type mb-2"></i>
                    <span class="value mb-1">$30.247</span>
                    <span class="subtext">Cloud Infrastructure</span>
                </div>
                <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
            </div>
            <div class="flex justify-content-between align-items-center my-2 item">
                <div class="flex flex-column">
                    <i class="pi pi-tag type mb-2"></i>
                    <span class="value mb-1">$29.550</span>
                    <span class="subtext">General Goods</span>
                </div>
                <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
            </div>
            <div class="flex justify-content-between align-items-center my-2 item">
                <div class="flex flex-column">
                    <i class="pi pi-desktop type mb-2"></i>
                    <span class="value mb-1">$16.660</span>
                    <span class="subtext">Consumer Electronics</span>
                </div>
                <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
            </div>
            <div class="flex justify-content-between align-items-center my-2 item">
                <div class="flex flex-column">
                    <i class="pi pi-compass type mb-2"></i>
                    <span class="value mb-1">$5.801</span>
                    <span class="subtext">Incalculables</span>
                </div>
                <span class="item-button"><a href="#"><i class="pi pi-chevron-right"></i></a></span>
            </div>
        </div>
    </div>

    <div class="col-12 md:col-8">
        <div class="card widget-traffic height-100">
            <div class="card-header">
                <h5>All Traffic Channels</h5>
                <Button label="Pie/Doughnut Data" class="p-button-text" :class="{'ml-auto': !isRTL, 'mr-auto': isRTL}" @click="togglePieDoughnut()"></Button>
                <Button label="Semi/Full Data" class="p-button-text mx-2" @click="changePieDoughnutDataView()"></Button>
            </div>
            <div class="flex grid">
                <div class="col-12 md:col-6 left flex flex-column justify-content-evenly">
                    <div class="total flex flex-column">
                        <span class="title mb-2">Total</span>
                        <span class="value mb-5">66.761</span>
                    </div>

                    <div class="info flex justify-content-between">
                        <div class="organic flex flex-column">
                            <span class="title mb-1">Organic</span>
                            <span class="value">51.596</span>
                        </div>
                        <div class="direct flex flex-column">
                            <span class="title mb-1">Direct</span>
                            <span class="value">11.421</span>
                        </div>
                        <div class="referral flex flex-column">
                            <span class="title mb-1">Referral</span>
                            <span class="value">3.862</span>
                        </div>
                    </div>
                </div>
                <div class="col-12 md:col-6 right flex justify-content-center">
                    <Chart ref="pie" type="pie" :data="pieData" :options="pieOptions" :height="350"></Chart>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import ProductService from '../service/ProductService';

export default {
    data() {
        return {
            products: null,
            items: [
                {label: 'Update', icon: 'pi pi-fw pi-refresh'},
                {label: 'Edit', icon: 'pi pi-fw pi-pencil'}
            ],
            storeInterval: null,
            storeATotalValue: 100,
            storeBTotalValue: 120,
            storeCTotalValue: 150,
            storeDTotalValue: 80,
            storeAData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [{
                    data: [55, 3, 45, 6, 44, 58, 84, 68, 64],
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
            storeBData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [{
                    data: [81, 75, 63, 100, 69, 79, 38, 37, 76],
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
            storeCData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [{
                    data: [99, 55, 22, 72, 24, 79, 35, 91, 48],
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
            storeDData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
                datasets: [{
                    data: [5, 51, 68, 82, 28, 21, 29, 45, 44],
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
            storeOptions: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                responsive: true,
                aspectRatio: 4,
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
                animation: {
                    duration: 0
                }
            },
            storeADiff: 0,
            storeAStatus: 0,
            storeBDiff: 0,
            storeBStatus: 0,
            storeCDiff: 0,
            storeCStatus: 0,
            storeDDiff: 0,
            storeDStatus: 0,
            chartMonthlyData: null,
            chartMonthlyOptions: null,
            doughnutData: null,
            doughnutOptions: null,
            pieData: null,
            pieOptions: null,
        }
    },
    productService: null,
	created() {
		this.productService = new ProductService();
	},
	mounted() {
		this.productService.getProducts().then(data => this.products = data);
        this.setStoreInterval();
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
        toggle(event) {
            this.$refs.menu.toggle(event);
        },
        calculateStore(storeData, totalValue) {
            let randomNumber = +((Math.random() * 500).toFixed(2));
            let data = [...storeData.datasets[0].data];
            let length = data.length;
            data.push(randomNumber);
            data.shift();
            storeData.datasets[0].data = data;

            let diff = +((data[length - 1] - data[length - 2]).toFixed(2));
            let status = diff === 0 ? 0 : (diff > 0 ? 1 : -1);
            totalValue = +((totalValue + diff).toFixed(2));

            return { diff, totalValue, status };
        },
        setStoreInterval () {
            this.storeInterval = setInterval(() => {
                requestAnimationFrame(() => {
                    let { diff: storeADiff, totalValue: storeATotalValue, status: storeAStatus } = this.calculateStore(this.storeAData, this.storeATotalValue);
                    this.storeADiff = storeADiff;
                    this.storeATotalValue = storeATotalValue;
                    this.storeAStatus = storeAStatus;
                    this.$refs.storeA.chart.update();

                    let { diff: storeBDiff, totalValue: storeBTotalValue, status: storeBStatus } = this.calculateStore(this.storeBData, this.storeBTotalValue);
                    this.storeBDiff = storeBDiff;
                    this.storeBTotalValue = storeBTotalValue;
                    this.storeBStatus = storeBStatus;
                    this.$refs.storeB.chart.update();

                    let { diff: storeCDiff, totalValue: storeCTotalValue, status: storeCStatus } = this.calculateStore(this.storeCData, this.storeCTotalValue);
                    this.storeCDiff = storeCDiff;
                    this.storeCTotalValue = storeCTotalValue;
                    this.storeCStatus = storeCStatus;
                    this.$refs.storeC.chart.update();

                    let { diff: storeDDiff, totalValue: storeDTotalValue, status: storeDStatus } = this.calculateStore(this.storeDData, this.storeDTotalValue);
                    this.storeDDiff = storeDDiff;
                    this.storeDTotalValue = storeDTotalValue;
                    this.storeDStatus = storeDStatus;
                    this.$refs.storeD.chart.update();
                })
            }, 2000);
        },
        changeMonthlyDataView() {
            if (this.$refs.monthly.chart.config.options.scales.x.stacked) {
                this.$refs.monthly.chart.config.options.scales.x.stacked = false;
                this.$refs.monthly.chart.config.options.scales.y.stacked = false;
            }
            else {
                this.$refs.monthly.chart.config.options.scales.x.stacked = true;
                this.$refs.monthly.chart.config.options.scales.y.stacked = true;
            }

            this.$refs.monthly.chart.update();
        },
        changeDoughnutDataView() {
            if (this.$refs.doughnut.chart.config.options.circumference === 360) {
                this.$refs.doughnut.chart.config.options.circumference = 180;
                this.$refs.doughnut.chart.config.options.rotation = -1 * 90;
            } else {
                this.$refs.doughnut.chart.config.options.circumference = 360;
                this.$refs.doughnut.chart.config.options.rotation = 0;
            }

            this.$refs.doughnut.chart.update();
        },
        togglePieDoughnut() {
            this.$refs.pie.chart.config.options.cutout = this.$refs.pie.chart.config.options.cutout ? 0 : 50;
            this.$refs.pie.chart.update();
        },
        changePieDoughnutDataView() {
            if (this.$refs.pie.chart.config.options.circumference === 180) {
                this.$refs.pie.chart.config.options.circumference = 360;
                this.$refs.pie.chart.config.options.rotation = 0;
            } else {
                this.$refs.pie.chart.config.options.circumference = 180;
                this.$refs.pie.chart.config.options.rotation = -1 * 90;
            }

            this.$refs.pie.chart.update();
        },
        refreshChart() {
            this.chartMonthlyData = this.getChartMonthlyData();
            this.chartMonthlyOptions = this.getMonthlyChartOptions();
            this.doughnutData = this.getDoughnutData();
            this.doughnutOptions = this.getDoughnutOptions();
            this.pieData = this.getPieData();
            this.pieOptions = this.getPieOptions();
        },
        getChartMonthlyData() {
            const { limeColor, amberColor, orangeColor, blueColor, lightblueColor,
                cyanColor, tealColor, greenColor, lightgreenColor } = this.getColors();

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: '2012',
                        data: [6, 25, 97, 12, 7, 70, 42],
                        borderColor: blueColor,
                        backgroundColor: blueColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2013',
                        data: [81, 3, 5, 11, 59, 47, 99],
                        borderColor: lightblueColor,
                        backgroundColor: lightblueColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2014',
                        data: [68, 47, 46, 46, 61, 70, 94],
                        borderColor: cyanColor,
                        backgroundColor: cyanColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2015',
                        data: [31, 9, 18, 76, 6, 11, 79],
                        borderColor: tealColor,
                        backgroundColor: tealColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2016',
                        data: [85, 37, 47, 29, 2, 10, 54],
                        borderColor: greenColor,
                        backgroundColor: greenColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2017',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        borderColor: lightgreenColor,
                        backgroundColor: lightgreenColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2018',
                        data: [89, 18, 95, 18, 97, 61, 54],
                        borderColor: limeColor,
                        backgroundColor: limeColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2019',
                        data: [18, 36, 39, 58, 41, 50, 72],
                        borderColor: amberColor,
                        backgroundColor: amberColor,
                        borderWidth: 2,
                        fill: true
                    },
                    {
                        label: '2020',
                        data: [31, 4, 35, 74, 47, 35, 46],
                        borderColor: orangeColor,
                        backgroundColor: orangeColor,
                        borderWidth: 2,
                        fill: true
                    }
                ]
            };
        },
        getMonthlyChartOptions() {
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
                maintainAspectRatio: false,
                interaction: {
					mode: 'x'
				},
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
                        categoryPercentage: .9,
                        barPercentage: .8,
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
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        },
        getPieData() {
            const { limeColor, blueColor, tealColor } = this.getColors();
            const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
            return {
                labels: ['O', 'D', 'R'],
                datasets: [
                    {
                        data: [300, 50, 100],
                        backgroundColor: [
                            blueColor,
                            tealColor,
                            limeColor
                        ],
                        borderColor
                    }
                ]
            }
        },
        getPieOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
            return {
                responsive: true,
                aspectRatio: 1,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            color: textColor
                        }
                    }
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            };
        },
        getDoughnutData() {
            const { blueColor, lightblueColor, cyanColor, tealColor, greenColor,
                lightgreenColor, orangeColor } = this.getColors();
            const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

            return {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                    {
                        data: [11, 29, 71, 33, 28, 95, 6],
                        backgroundColor: [blueColor, lightblueColor, cyanColor, tealColor, greenColor, lightgreenColor, orangeColor],
                        borderColor
                    }
                ]
            };
        },
        getDoughnutOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
            return {
                responsive: true,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            color: textColor
                        }
                    }
                },
                circumference: 180,
                rotation: -90,
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            };
        },
        getColors() {
            const isLight = this.$appState.layoutMode === 'light';
            return {
                pinkColor: isLight ? '#EC407A' : '#F48FB1',
                purpleColor: isLight ? '#AB47BC' : '#CE93D8',
                deeppurpleColor: isLight ? '#7E57C2' : '#B39DDB',
                indigoColor: isLight ? '#5C6BC0' : '#9FA8DA',
                blueColor: isLight ? '#42A5F5' : '#90CAF9',
                lightblueColor: isLight ? '#29B6F6' : '#81D4FA',
                cyanColor: isLight ? '#00ACC1' : '#4DD0E1',
                tealColor: isLight ? '#26A69A' : '#80CBC4',
                greenColor: isLight ? '#66BB6A' : '#A5D6A7',
                lightgreenColor: isLight ? '#9CCC65' : '#C5E1A5',
                limeColor: isLight ? '#D4E157' : '#E6EE9C',
                yellowColor: isLight ? 'FFEE58' : '#FFF59D',
                amberColor: isLight ? '#FFCA28' : '#FFE082',
                orangeColor: isLight ? '#FFA726' : '#FFCC80',
                deeporangeColor: isLight ? '#FF7043' : '#FFAB91',
                brownColor: isLight ? '#8D6E63' : '#BCAAA4'
            }
        },
    },
    computed: {
        isRTL() {
			return this.$appState.RTL;
		}
    },
    beforeUnmount() {
        if (this.storeInterval) {
            clearInterval(this.storeInterval);
        }
    }
}
</script>

<style lang="scss" scoped>
	
</style>
