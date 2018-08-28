<template>
  <div class="tables">
    <div class="tableWrap clearfix">
      <table>
        <tr>
          <th>名字</th>
          <th>年龄</th>
          <th>性别</th>
        </tr>
        <tr v-for="(p,index) in person" :key="index" v-if="(index<curpage*5)&&(index>=(curpage-1)*5)">
          <td>{{p.name}}</td>
          <td>{{p.age}}</td>
          <td>{{p.ismela}}</td>
        </tr>
      </table>
      <page-list :pageSize="pageSizes" @pageNow="getPageNows" class="position"></page-list>
    </div>
    <hr>
    <div class="pagenationWrap">
      <label>页数：</label><input type="text" name="pageCounts" ref="input" @change="getpages">
      <page-list :pageSize="pages" @pageNow="getPageNows"></page-list>
      <div>
        <p>{{text}}</p>
      </div>
    </div>
    <div style="width:800px;height:500px;">
        <ml-bar2d :bar-data="barData" :base-options="baseOptions" :custom-options="options"></ml-bar2d>
    </div>
  </div>

</template>
<script>
  import pageList from './components/page-list'
  import datas from './assets/person-data.json'

  export default{
    name:'App',
    components:{pageList},
    data(){
      return {
        person:datas,
        pages:10,
        curpage:1,//当前页的页码
        text:'',
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
    },
    computed:{
      pageSizes(){
        return Math.ceil(this.person.length/5)
      }
    },
    methods:{
      getpages(){
        this.pages= this.$refs.input.value;
      },
      getPageNows (msg){
        this.text=msg;
        this.curpage = msg;
      }
    }

  }
</script>
<style scoped>
  *{
    margin:0;
    padding:0;
  }
  .tables{
    margin: 60px;
  }
  input{
    padding-left:10px;
      height:32px;
      outline:none;
      border:1px solid #ccc;
      border-radius: 5px;
      margin-bottom: 20px;
  }
  table{
    width:100%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }
  th,td{
    text-align: left;
    padding:5px;
    border:1px solid #ccc;
  }
  .pagenationWrap{
    margin-top:50px;
  }
  .position{
    float: right;
  }
  /* 清除布局浮动 */
  .clearfix:before,.clearfix:after{ content:""; display:block;}
  .clearfix:after{ clear:both;}
  .clearfix{ zoom:1;}
  .clear{ clear:both; display:block; overflow:hidden; visibility:hidden; width:0; height:0;}
</style>
