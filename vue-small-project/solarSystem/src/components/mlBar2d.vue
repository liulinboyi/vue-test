<template>
    <div class="ml-bar2d" id="mlBar2d">
    </div>
</template>
<script>
export default {
    name: 'ml-bar2d',
    data () {
        return {
            newStack: true,
            columnWidth: 0.8,
            rotate: false,
            clustered: false,
            drop: true,
            mlBaseOptions: {
                valueField: {
                    xField: 'date',
                    yField: ['value', 'value1'],
                },
                barColor: ['#FF6600', '#FCD202'],
                twoYaxis: false,
                columnWidth: 0.8,
                rotate: false,
                drop: false,
                depth3D: 20,
                angle: 30,
            }
        }
    },
    props: {
        barData: {
            type: Array,
            require: true
        },
        baseOptions: {
            type: Object,
            default: () => {}
        },
        customOptions: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        mlBarOptions () {
            let opts = {}
            Object.assign(opts, this.mlBaseOptions, this.baseOptions);
            return opts;
        }
    },
    mounted () {
        this.initBar(this.barData, 'mlBar2d');
    },
    methods: {
        dataAddMultiColor (data) {
            this.mlBarOptions.barColor.forEach((element, n) => {
                data[n].color = element;
            });
        },
        initBar (data, id) {
            if (this.mlBarOptions.barColor.length > 2) {
                this.dataAddMultiColor(data); // 对应颜色配置
            }
            let options = {
                theme: 'light',
                type: 'serial',
                startDuration: 1,
                fontSize: 14,
                fontFamily: 'Microsoft YaHei',
                color: '#000',
                rotate: this.mlBarOptions.rotate,
                marginTop: 40,
                columnWidth: this.mlBarOptions.columnWidth,
                titles: [
                    {
                        text: this.mlBarOptions.title,
                        size: 18,
                        color: '#000'
                    }
                ],
                dataProvider: data,
                legend: {
                    enabled: (this.mlBarOptions.barColor.length < 3),
                    position: 'absolute',
                    top: 20,
                    align: 'left',
                    color: '#fff',
                    fontSize: 14,
                    useGraphSettings: true,
                    rollOverColor: '#fff',
                    equalWidths: false,
                    valueWidth: 0,
                    useMarkerColorForLabels: true,
                    markerSize: 10
                },
                valueAxes: [{
                    stackType: 'regular',
                    position: 'left',
                    color: '#000',
                    gridColor: '#596d82',
                    axisColor: '#596d82',
                    dashLength: 1,
                    axisAlpha: 1,
                    gridAlpha: 1,
                }],
                graphs: [
                    {
                        title: this.mlBarOptions.barName[0],
                        balloonText: this.mlBarOptions.barName[0] + ': <b>[[value]]</b>',
                        fillColorsField: 'color',
                        fillAlphas: 0.6,
                        lineAlpha: 0,
                        type: 'column',
                        valueField: this.mlBarOptions.valueField.yField[0],
                        valueAxis: 'leftBar'
                    },
                    {
                        title: this.mlBarOptions.barName[1],
                        balloonText: this.mlBarOptions.barName[1] + ': <b>[[value]]</b>',
                        fillColorsField: 'color',
                        fillAlphas: 0.6,
                        lineAlpha: 0,
                        newStack: true,
                        type: 'column',
                        valueField: this.mlBarOptions.valueField.yField[1] ? this.mlBarOptions.valueField.yField[1] : '',
                        valueAxis: 'rightBar'
                    }
                ],
                depth3D: this.mlBarOptions.depth3D,
                angle: this.mlBarOptions.angle,
                balloon: {
                    color: '#fff',
                    drop: this.mlBarOptions.drop,
                    horizontalPadding: 5,
                    verticalPadding: 8,
                    showBullet: true,
                    fillColor: '#000',
                    fillAlpha: 0.5
                },
                chartCursor: {
                    categoryBalloonEnabled: false,
                    cursorAlpha: 0,
                    zoomable: false,
                    graphBulletAlpha: 0.6,
                    categoryBalloonColor: '#000',
                    categoryBalloonAlpha: 0.5,
                    valueLineAlpha: 0.4,
                    cursorColor: '#000'
                },
                categoryField: this.mlBarOptions.valueField.xField,
                categoryAxis: {
                    gridPosition: 'start',
                    axisColor: '#596d82',
                    color: '#000',
                    gridColor: '#596d82',
                    dashLength: 1,
                    axisAlpha: 1,
                    gridAlpha: 1
                },
                export: {
                    enabled: true
                }
            };

            // 双坐标轴配置
            if (this.mlBarOptions.twoYaxis) {
                options.valueAxes.push({
                    id: 'rightBar',
                    min: 0,
                    max: 100,
                    stackType: 'regular',
                    position: 'right',
                    color: '#000',
                    dashLength: 1
                });
                options.graphs[0].valueAxis = 'leftBar';
                options.graphs[1].valueAxis = 'rightBar';
            }
            // 两个或一个颜色配置
            if (this.mlBarOptions.barColor.length < 3) {
                options.graphs[0].lineColor = this.mlBarOptions.barColor[0];

                if (this.mlBarOptions.barColor.length > 1) {
                    options.graphs[1].lineColor = this.mlBarOptions.barColor[1];
                }
            }
            // 是否为圆柱
            if (this.mlBaseOptions.topRadius) {
                options.graphs[0].topRadius = this.mlBarOptions.topRadius;
                options.graphs[1].topRadius = this.mlBarOptions.topRadius;
            }

            // 单数据配置 （默认为双数据对比配置）
            if (this.mlBarOptions.valueField.yField.length < 1) {
                options.graphs.pop();
            }
            if (this.customOptions) {
                options = {...this.customOptions};
            }
            AmCharts.makeChart(id, options);
        }
    }

}
</script>
<style scoped>
    .ml-bar2d{
        width: 100%;
        height: 100%;
    }
</style>
