
# ml-bar2d 二维数据立体柱子组件
----

```
import mlBar2d from 'vue-amcharts-bar'
Vue.use(mlBar2d);
```

### 基本用法

``` html
<ml-bar2d :bar-data="barData" :base-options="baseOptions" :custom-options="options"></ml-bar2d>
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
            baseOptions: {
                valueField: { // 和barData对应
                    xField: 'date', // x轴值
                    yField: ['value', 'value1'], // y轴值，当为单数据时，数组长度为1
                },
                title: '年度发运及时率/到货准时率统计图',
                barName: ['发货及时率', '到货及时率'],
                barColor: ['#FF0F00', '#FF6600', '#FF9E01', '#FCD202', '#F8FF01', '#B0DE09', '#04D215', '#0D8ECF', '#0D52D1', '#2A0CD0', '#8A0CCF', '#CD0D74'], // 柱体颜色，若设置两个数据对比颜色，设置两个颜色即可，默认为两值，一个数据时设置一个颜色值，需为数组
                topRadius: 1, // 圆柱配置，不写此参数时默认为立方体
                twoYaxis: true, // 是否要两个坐标轴
                columnWidth: 0.8, // 柱子宽度
                rotate: false, // 图形旋转90度,默认不旋转
                drop: false, // 提示框是否为气泡型，默认为气泡
                depth3D: 30, // 立体深度
                angle: 20, // 立体偏斜角度
            },
            options: null // 可参照amcharts官网进行自主配置amcharts options
        }
    }
}
</script>
```
:::

### 参数说明

<table border="1"  style="border-collapse:collapse;">
    <tr>
        <th width="20%">参数</th>
        <th width="20%">类型</th>
        <th width="60%" colspan="2">说明</th>
    </tr>
    <tr>
        <td>barData</td>
        <td>Object</td>
        <td colspan="2">柱体数据</td>
    </tr>
    <tr>
        <td rowspan="12">baseOptions</td>
        <td rowspan="12">Object</td>
        <td colspan="2">基础配置数据</td>
    </tr>
    <tr>
<td><pre>
valueField: {
	xField: ''
	yField: []
}</pre>
        </td>
        <td>
            valueField和barData对应,xField(String):x轴值对应字段名称,yField: Array，y轴值对应字段名称，当为单数据时，数组长度为1
        </td>
    </tr>
    <tr>
        <td>title</td>
        <td>String 图表标题</td>
    </tr>
    <tr>
        <td>barName</td>
        <td>Array，图表两柱子的名称,</td>
    </tr>
    <tr>
        <td>barColor</td>
        <td>Array，柱体颜色，若设置两个数据对比颜色，设置两个颜色即可，默认为两值，当为一个数据时设置一个颜色值</td>
    </tr>
    <tr>
        <td>topRadius</td>
        <td>Number 圆柱配置，不写此参数时默认为立方体</td>
    </tr>
    <tr>
        <td>twoYaxis</td>
        <td>Boolean 是否要两个坐标轴</td>
    </tr>
    <tr>
        <td>columnWidth</td>
        <td>Number柱子宽度</td>
    </tr>
    <tr>
        <td>rotate</td>
        <td>Boolean 图形旋转90度,默认不旋转</td>
    </tr>
    <tr>
        <td>drop</td>
        <td>Boolean 提示框是否为气泡型，默认为气泡</td>
    </tr>
    <tr>
        <td>depth3D</td>
        <td> Number 立体深度</td>
    </tr>
    <tr>
        <td>angle</td>
        <td>Number 立体偏斜角度</td>
    </tr>
    <tr>
        <td>options</td>
        <td>Object</td>
        <td colspan="2">可参照amcharts官网进行自主配置amcharts options </td>
    </tr>
</table>

> 注： 直接安装的amcharts上面会有`js chart by amcharts`字样，可对amcharts源码进行修改，在amcharts.js中搜索`js chart by amcharts`然后降其前面的`c!=a`改为`c==a`即可
