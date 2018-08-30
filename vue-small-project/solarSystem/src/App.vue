<template>
    <div id="app">
        <solar-system :ball-group="ballGroup" :center-sun = "centerSun" @clickBallCallback="clickCallback"></solar-system>
    </div>
</template>
<script>
import solarSystem from '@/components/solarSystem';
export default {
    name: 'App',
    components: {
        solarSystem
    },
    data () {
        return {
            centerSun: {
                centerSunImg: require('@/images/solar/sun.png'),
                centerSunLabel: '数据应用服务',
                centerSunWidth: '34em',
                centerSunHeight: '37em',
            },
            ballGroup: [
                {
                    orbitR: '42em', // 轨道半径
                    ballPositionDeg: 30, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: (39 / 14) + 'em', // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: '10s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball21.png') // 球图片
                },
                {
                    orbitR: '55em', // 轨道半径
                    ballPositionDeg: 330, // 球初始位置角度
                    ballLabel: 'ball1', // 球对应名称
                    ballSize: (74 / 14) + 'em', // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: '50s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball31.png') // 球图片
                },
                {
                    orbitR: '70em', // 轨道半径
                    ballPositionDeg: 60, // 球初始位置角度
                    ballLabel: 'ball2', // 球对应名称
                    ballSize: 120 / 14 + 'em', // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball41.png') // 球图片
                },
                {
                    orbitR: '70em', // 轨道半径
                    ballPositionDeg: 150, // 球初始位置角度
                    ballLabel: 'ball3', // 球对应名称
                    ballSize: 134 / 14 + 'em', // 球大小
                    ballLabelColor: '#fff', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball42.png') // 球图片
                },
                {
                    orbitR: '90em', // 轨道半径
                    ballPositionDeg: 210, // 球初始位置角度
                    ballLabel: 'ball4', // 球对应名称
                    ballSize: 178 / 14 + 'em', // 球大小
                    ballLabelColor: 'orange', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball51.png') // 球图片
                },
                {
                    orbitR: '90em', // 轨道半径
                    ballPositionDeg: 100, // 球初始位置角度
                    ballLabel: 'ball5', // 球对应名称
                    ballSize: 104 / 14 + 'em', // 球大小
                    ballLabelColor: '#55bef3', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball52.png') // 球图片
                },
                {
                    orbitR: '90em', // 轨道半径
                    ballPositionDeg: 270, // 球初始位置角度
                    ballLabel: 'ball6', // 球对应名称
                    ballSize: 82 / 14 + 'em', // 球大小
                    ballLabelColor: '#eeb364', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball53.png') // 球图片
                },
                {
                    orbitR: '90em', // 轨道半径
                    ballPositionDeg: 0, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: (35 / 14) + 'em', // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball54.png') // 球图片
                },
                {
                    orbitR: '105em', // 轨道半径
                    ballPositionDeg: 320, // 球初始位置角度
                    ballLabel: 'ball7', // 球对应名称
                    ballSize: 147 / 14 + 'em', // 球大小
                    ballLabelColor: 'pink', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball61.png') // 球图片
                },
                {
                    orbitR: '105em', // 轨道半径
                    ballPositionDeg: 25, // 球初始位置角度
                    ballLabel: 'ball8', // 球对应名称
                    ballSize: 131 / 14 + 'em', // 球大小
                    ballLabelColor: 'yellow', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball62.png') // 球图片
                },
                {
                    orbitR: '105em', // 轨道半径
                    ballPositionDeg: 180, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: 84 / 14, // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball63.png') // 球图片
                },
                {
                    orbitR: '105em', // 轨道半径
                    ballPositionDeg: 240, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: 14 / 14 + 'em', // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: '100s', // 每个轨道速度
                    ballImg: require('@/images/solar/ball55.png') // 球图片
                }
            ]
        }
    },
    methods: {
        clickCallback ({item, index}) {
            console.log(index);
            console.log(item);
        }
    }
}
</script>
<style lang="scss">
    html,body,#app{
        width:100%;
        height:100%;
        overflow: hidden;
        background:url('./images/index_bg.png') no-repeat center center;
    }
</style>
