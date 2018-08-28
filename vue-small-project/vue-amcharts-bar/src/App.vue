<template>
    <div id="app">
        <ml-bar2d :barData="barData" :baseOptions="simpleOptions" :custom-options="options"></ml-bar2d>
    </div>
</template>
<script>
export default {
    data () {
        return {
            barData: [
                {
                    'date': '2018-01',
                    'value': 17,
                    'value1': 43
                },
                {
                    'date': '2018-02',
                    'value': 68,
                    'value1': 87
                },
                {
                    'date': '2018-03',
                    'value': 78,
                    'value1': 22
                },
                {
                    'date': '2018-04',
                    'value': 33,
                    'value1': 58
                },
                {
                    'date': '2018-05',
                    'value': 59,
                    'value1': 20
                },
                {
                    'date': '2018-06',
                    'value': 97,
                    'value1': 46
                },
                {
                    'date': '2018-07',
                    'value': 24,
                    'value1': 67
                },
                {
                    'date': '2018-08',
                    'value': 13,
                    'value1': 10
                },
                {
                    'date': '2018-09',
                    'value': 89,
                    'value1': 50
                },
                {
                    'date': '2018-10',
                    'value': 63,
                    'value1': 15
                },
                {
                    'date': '2018-11',
                    'value': 90,
                    'value1': 21
                },
                {
                    'date': '2018-12',
                    'value': 68,
                    'value1': 93
                }
            ],
            simpleOptions: {
                valueField: { // 和barData对应
                    xField: 'date',
                    yField: ['value', 'value1'], // 当为单数据时，数组长度为1
                },
                title: '年度发运及时率/到货准时率统计图',
                barName: ['发货及时率', '到货及时率'],
                barColor: ['#FF0F00', '#FF6600', '#FF9E01', '#FCD202', '#F8FF01', '#B0DE09', '#04D215', '#0D8ECF', '#0D52D1', '#2A0CD0', '#8A0CCF', '#CD0D74'],
                topRadius: 1, // 圆柱配置，不写此参数时默认为立方体
                twoYaxis: true, // 是否要两个坐标轴
                columnWidth: 0.8, // 柱子宽度
                rotate: false, // 图形旋转90度,默认不旋转
                drop: false, // 提示框是否为气泡型，默认为气泡
                depth3D: 30, // 立体深度
                angle: 20 // 立体偏斜角度
            },
            options: null
        }
    }
}
</script>
<style>
    html,body, #app{
        width: 100%;
        height:100%;
    }
</style>
