<template>
    <div id="app">
        <div class="puzzle">
        <ul>
            <li v-for="(item,index) in puzzles" :class="{'kong-li':!item}" @click="changeIndex(index)">{{item}}</li>
        </ul>
        <button @click="renders" class="resetBtn">重置游戏</button>
    </div>
  </div>
</template>

<script>
import './assets/css/style.scss'


export default {
    name: 'App',
    components: {
    },
    data(){
        return {
            puzzles:[]
        }
    },
    methods:{
        // 重置
        renders (){
            let puzzleArr = [];

            for(let i = 1;i < 16; i++){
                puzzleArr.push(i);
            }

            puzzleArr = puzzleArr.sort(() => 0.5 - Math.random());

            this.puzzles = puzzleArr;

            this.puzzles.push('');
        },
        changeIndex (index){
            // 获取点击位置及其上下左右的值
            let curNum = this.puzzles[index],
                leftNum = this.puzzles[index - 1],
                rightNum = this.puzzles[index + 1],
                topNum = this.puzzles[index - 4],
                bottomNum = this.puzzles[index + 4];
           
            if(bottomNum == ''){
                this.$set(this.puzzles,index,'');
                this.$set(this.puzzles,index+4,curNum);
            }else if(topNum == ''){
                this.$set(this.puzzles,index,'');
                this.$set(this.puzzles,index-4,curNum);
            }else if(leftNum == '' && index % 4){
                this.$set(this.puzzles,index,'');
                this.$set(this.puzzles,index-1,curNum);
            }else if(rightNum == '' && index % 4 !=3){
                this.$set(this.puzzles,index,'');
                this.$set(this.puzzles,index+1,curNum);
            }

            this.passSuccess();
        },
        passSuccess (){
            if (this.puzzles[15] === '') {
                const newPuzzles = this.puzzles.slice(0, 15)
                const isPass = newPuzzles.every((e, i) => e === i + 1)
                if (isPass) {
                    alert ('恭喜，闯关成功！')
                }
            }
        }

    },
    mounted (){
        this.renders();
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
