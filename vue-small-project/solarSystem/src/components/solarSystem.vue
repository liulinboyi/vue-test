<template>
    <div class="solarBox opening">
        <div id="universe" class="scale-stretched">
            <div id="galaxy">
                <div id="solar-system" class="earth">
                    <div class="orbit"
                        v-for="(item,index) in ballGroup"
                        :key="index"
                        :class="runIs"
                        :style="{animationDuration:ballGroup[index].speed + 's',
                        width:ballGroup[index].orbitR + 'em',height:ballGroup[index].orbitR + 'em',
                        marginTop: '-' + (ballGroup[index].orbitR / 2) + 'em',
                        marginLeft: '-' + (ballGroup[index].orbitR / 2) + 'em'}"
                        @mouseover="hoverStop"
                        @mouseout="outBall">
                        <div class="pos"
                        :class="runIs"
                        :style="{ animationDuration:ballGroup[index].speed + 's',
                        top: positionTop(ballGroup[index].orbitR, ballGroup[index].ballPositionDeg) + '%',
                        left: positionLeft(ballGroup[index].orbitR, ballGroup[index].ballPositionDeg) + '%'}">
                            <div class="planet"
                            :style="{fontSize: ballGroup[index].ballSize + 'em',
                            animationDuration:ballGroup[index].speed + 's',
                            cursor: ballGroup[index].callback ? 'pointer':''}"
                            @click="ballGroup[index].callback(item, index)">
                            <img :src="ballGroup[index].ballImg" alt="">
                            <p class="starLabel" :style="{color: ballGroup[index].ballLabelColor}">{{ballGroup[index].ballLabel}}</p>
                            </div>
                        </div>
                    </div>
                     <div id="sun">
                         <img :src="centerSun.centerSunImg" alt="">
                         <p class="sunLabel">{{centerSun.centerSunLabel}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            runIs: 'runningS',
            centerSun: {
                centerSunImg: require('../images/solar/sun.png'),
                centerSunLabel: '数据应用服务',
            },
            // orbitR: [42, 60, 74, 74, 94, 94, 94, 94, 112, 112, 112, 112],
            // ballPositionDeg: [30, 330, 60, 150, 210, 100, 270, 0, 320, 25, 180, 240],
            // setLabel: ['', 'ball1', 'ball2', '', 'ball3', '', 'ball4', '', 'ball5', '', 'ball6'],
            ballGroup: [
                {
                    orbitR: 42, // 轨道半径 单位为em，实际为42*14px
                    ballPositionDeg: 30, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: (39 / 14), // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: 10, // 每个轨道速度
                    ballImg: require('../images/solar/ball21.png'), // 球图片
                    callback: '' // 点击球的回调函数
                },
                {
                    orbitR: 60, // 轨道半径
                    ballPositionDeg: 330, // 球初始位置角度
                    ballLabel: 'ball1', // 球对应名称
                    ballSize: 74 / 14, // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: 50, // 每个轨道速度
                    ballImg: require('@/images/solar/ball31.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 74, // 轨道半径
                    ballPositionDeg: 60, // 球初始位置角度
                    ballLabel: 'ball2', // 球对应名称
                    ballSize: 120 / 14, // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball41.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 74, // 轨道半径
                    ballPositionDeg: 150, // 球初始位置角度
                    ballLabel: 'ball3', // 球对应名称
                    ballSize: 134 / 14, // 球大小
                    ballLabelColor: '#fff', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball42.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                        alert(123)
                    } // 点击球的回调函数
                },
                {
                    orbitR: 94, // 轨道半径
                    ballPositionDeg: 210, // 球初始位置角度
                    ballLabel: 'ball4', // 球对应名称
                    ballSize: 178 / 14, // 球大小
                    ballLabelColor: 'orange', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball51.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数名称
                },
                {
                    orbitR: 94, // 轨道半径
                    ballPositionDeg: 100, // 球初始位置角度
                    ballLabel: 'ball5', // 球对应名称
                    ballSize: 104 / 14, // 球大小
                    ballLabelColor: '#55bef3', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball52.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 94, // 轨道半径
                    ballPositionDeg: 270, // 球初始位置角度
                    ballLabel: 'ball6', // 球对应名称
                    ballSize: 82 / 14, // 球大小
                    ballLabelColor: '#eeb364', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball53.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 94, // 轨道半径
                    ballPositionDeg: 0, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: 35 / 14, // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball54.png'), // 球图片
                    callback: '' // 点击球的回调函数名称
                },
                {
                    orbitR: 112, // 轨道半径
                    ballPositionDeg: 320, // 球初始位置角度
                    ballLabel: 'ball7', // 球对应名称
                    ballSize: 147 / 14, // 球大小
                    ballLabelColor: 'pink', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball61.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 112, // 轨道半径
                    ballPositionDeg: 25, // 球初始位置角度
                    ballLabel: 'ball8', // 球对应名称
                    ballSize: 131 / 14, // 球大小
                    ballLabelColor: 'yellow', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball62.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 112, // 轨道半径
                    ballPositionDeg: 180, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: 84 / 14, // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball63.png'), // 球图片
                    callback: function (param, index) {
                        console.log(param);
                        console.log(index);
                    } // 点击球的回调函数
                },
                {
                    orbitR: 112, // 轨道半径
                    ballPositionDeg: 240, // 球初始位置角度
                    ballLabel: '', // 球对应名称
                    ballSize: 14 / 14, // 球大小
                    ballLabelColor: 'red', // 名称颜色
                    speed: 100, // 每个轨道速度
                    ballImg: require('../images/solar/ball55.png'), // 球图片
                    callback: '' // 点击球的回调函数
                }
            ]
        }
    },
    methods: {
        positionTop (r, deg) {
            return (r - r * Math.cos(deg / 180 * Math.PI)) / (r * 2) * 100;
        },
        positionLeft (r, deg) {
            return (r - r * Math.sin(deg / 180 * Math.PI)) / (r * 2) * 100;
        },
        hoverStop () {
            this.runIs = 'stopS';
        },
        outBall () {
            this.runIs = 'runningS';
        }
    }
};
</script>
<style lang="scss" scoped>
    @import "@/sass/solar.scss";
</style>
