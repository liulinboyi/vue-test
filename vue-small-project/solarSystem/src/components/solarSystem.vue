<template>
    <div class="solarBox opening">
        <div id="universe" class="scale-stretched">
            <div id="galaxy">
                <div id="solar-system" class="earth">
                    <div class="orbit"
                        v-for="(item,index) in ballgroup"
                        :key="index"
                        :class="runIs"
                        :id=getIndexball(index)
                        @mouseover="hoverStop"
                        @mouseout="outBall">
                        <div class="pos" :class="runIs">
                            <div class="planet"
                            @click="enterPages(index)">
                            <p class="starLabel" v-text="setLabel(index)"></p>
                            </div>
                        </div>
                    </div>
                     <div id="sun">
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
            ballgroup: 12,
            runIs: 'runningS'
        }
    },
    methods: {
        getIndexball (index) {
            return 'ball' + index;
        },
        setLabel (index) {
            if (index === 3) return 'page1';
            if (index === 4) return 'page2';
        },
        enterPages (index) {
            if (index === 4) this.$router.push('/page1');
            if (index === 3) this.$router.push('/page2');
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
