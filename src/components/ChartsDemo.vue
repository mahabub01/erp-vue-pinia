<template>
	<div class="grid p-fluid">
		<div class="col-12 lg:col-6">
			<div class="card">
				<h5>Linear Chart</h5>
				<Chart type="line" :data="lineData" :options="lineOptions" />
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="align-self-start">Pie Chart</h5>
				<Chart type="pie" :data="pieData" :options="pieOptions" style="width: 50%" />
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="align-self-start">Polar Area Chart</h5>
				<Chart type="polarArea" :data="polarData" :options="polarOptions" style="width: 50%" />
			</div>
		</div>
		<div class="col-12 lg:col-6">
			<div class="card">
				<h5>Bar Chart</h5>
				<Chart type="bar" :data="barData" :options="barOptions" />
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="align-self-start">Doughnut Chart</h5>
				<Chart type="doughnut" :data="pieData" :options="pieOptions" style="width: 50%" />
			</div>

			<div class="card flex flex-column align-items-center">
				<h5 class="align-self-start">Radar Chart</h5>
				<Chart type="radar" :data="radarData" :options="radarOptions" style="width: 50%" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			lineData: null,
            barData: null,
            pieData: null,
            polarData: null,
            lineOptions: null,
            barOptions: null,
            pieOptions: null,
            polarOptions: null,
            radarOptions: null,
			radarData: {
				labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
				datasets: [
					{
						label: 'First Dataset',
						backgroundColor: 'rgba(54, 162, 235,0.2)',
						borderColor: 'rgba(54, 162, 235,1)',
						pointBackgroundColor: 'rgba(54, 162, 235,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(54, 162, 235,1)',
						data: [65, 59, 90, 81, 56, 55, 40]
					},
					{
						label: 'Second Dataset',
						backgroundColor: 'rgba(255, 99, 132,0.2)',
						borderColor: 'rgba(255, 99, 132,1)',
						pointBackgroundColor: 'rgba(255, 99, 132,1)',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: 'rgba(255, 99, 132,1)',
						data: [28, 48, 40, 19, 96, 27, 100]
					}
				]
			}
		}
	},
	mounted() {
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
		refreshChart() {
			this.lineData = this.getLineData();
            this.barData = this.getBarData();
            this.pieData = this.getPieData();
            this.polarData = this.getPolarData();
            this.lineOptions = this.getLineChartOptions();
            this.barOptions = this.getBarChartOptions();
            this.pieOptions = this.getPieChartOptions();
            this.polarOptions = this.getPolarChartOptions();
            this.radarOptions = this.getRadarChartOptions();
		},
		getLineData() {
            const isLight = this.$appState.layoutMode === 'light';
            const dataset1Color = isLight ? '#00ACC1' : '#4DD0E1';
            const dataset2Color = isLight ? '#FF9800' : '#FFB74D';

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        backgroundColor: dataset1Color,
                        borderColor: dataset1Color,
                        tension: .4,
                    },
                    {
                        label: 'Second Dataset',
                        data: [28, 48, 40, 19, 86, 27, 90],
                        fill: false,
                        backgroundColor: dataset2Color,
                        borderColor: dataset2Color,
                        tension: .4,
                    }
                ]
            };
        },

        getBarData() {
            const isLight = this.$appState.layoutMode === 'light';
            const dataset1Color = isLight ? '#00ACC1' : '#4DD0E1';
            const dataset2Color = isLight ? '#FF9800' : '#FFB74D';

            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'First Dataset',
                        backgroundColor: dataset1Color,
                        borderColor: dataset1Color,
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'Second Dataset',
                        backgroundColor: dataset2Color,
                        borderColor: dataset2Color,
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        },

        getPieData() {
            const { limeColor, blueColor, tealColor, orangeColor } = this.getColors();
            const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

            return {
                labels: ['A', 'B', 'C', 'D'],
                datasets: [
                    {
                        data: [540, 325, 702, 421],
                        backgroundColor: [
                            blueColor,
                            tealColor,
                            limeColor,
                            orangeColor
                        ],
                        borderColor
                    }]
            };
        },

        getPolarData() {
            const { limeColor, blueColor, tealColor, orangeColor } = this.getColors();
            const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

            return {
                datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3
                    ],
                    backgroundColor: [
                        blueColor,
                        tealColor,
                        limeColor,
                        orangeColor
                    ],
                    borderColor,
                    label: 'Dataset'
                }],
                labels: [
                    'A',
                    'B',
                    'C',
                    'D'
                ]
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

        getLineChartOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');

            return {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            color: textColor,
                        }
                    }
                },
                scales: {
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
                    },
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
                    }
                }
            }
        },

        getBarChartOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');

            return {
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            color: textColor,
                        }
                    }
                },
                scales: {
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
                    },
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
                    }
                }
            }
        },

        getPieChartOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
            return {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            fontColor: textColor,
                        }
                    }
                }
            }
        },

        getPolarChartOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
            const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

            return {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            color: textColor,
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: gridLinesColor
                        },
                        pointLabels: {
                            color: textColor
                        }
                    }
                }
            }
        },

        getRadarChartOptions() {
            const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
            const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
            const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

            return {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            font: {
                                family: fontFamily
                            },
                            color: textColor,
                        }
                    }
                },
                scales: {
                    r: {
                        grid: {
                            color: gridLinesColor
                        },
                        pointLabels: {
                            color: textColor
                        }
                    }
                }
            }
        }
	}
}
</script>

<style scoped>

</style>
