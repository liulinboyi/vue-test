<template>
    <div class="galaxy">
        <div class="solar-system">
            <div class="orbit"
                v-for="(item,index) in ballGroup"
                :key="index"
                :class="runIs"
                :style="{animationDuration:ballGroup[index].speed,
                width:ballGroup[index].orbitR,height:ballGroup[index].orbitR}"
                @mouseover="hoverStop"
                @mouseout="outBall">
                <div class="pos"
                :class="runIs"
                :style="{ animationDuration:ballGroup[index].speed,
                top: positionTop(parseInt(ballGroup[index].orbitR), parseInt(ballGroup[index].ballPositionDeg)) + '%',
                left: positionLeft(parseInt(ballGroup[index].orbitR), parseInt(ballGroup[index].ballPositionDeg)) + '%'}">
                    <div class="planet"
                    :style="{fontSize: ballGroup[index].ballSize,
                    animationDuration:ballGroup[index].speed}"
                    @click="callbackBall(item, index)">
                    <img :src="ballGroup[index].ballImg" alt="">
                    <p class="starLabel" :style="{color: ballGroup[index].ballLabelColor}">{{ballGroup[index].ballLabel}}</p>
                    </div>
                </div>
            </div>
                <div id="sun" :style="{width: centerSun.centerSunWidth,height: centerSun.centerSunHeight}">
                    <img :src="centerSun.centerSunImg" alt="">
                    <p class="sunLabel">{{centerSun.centerSunLabel}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            runIs: 'runningS'
        }
    },
    props: {
        ballGroup: {
            type: Array
        },
        centerSun: {
            type: Object
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
        },
        callbackBall (item, index) {
            this.$emit('clickBallCallback', {item, index});
        }
    }
};
</script>
<style lang="scss" scoped>
    @import "@/sass/reset.scss";
    @import "@/sass/solar.scss";
</style>
