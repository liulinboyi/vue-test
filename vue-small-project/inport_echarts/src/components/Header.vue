<template>
    <div class="header clearfix">
        <div class="left-header">
            <h1>上海地铁</h1>
            <p>Shanghai Metro</p>
        </div>
        <div class="right-header">
            <div class="search-input">
                <input type="text" name="search">
                <span class="search-icon"></span>
            </div>
            <div class="user-logo">
                <img src="../assets/user-logo.jpg">
            </div>
        </div>
    </div>
</template>

<script>

export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @mixin border-radius($w:20px){
        -webkit-border-radius: $w;
        -moz-border-radius: $w;
        border-radius:$w;
    }
    .header{
        background: rgb(13,16,20);
        width:100%;
        color:#fff;
        .left-header{
            margin-left:20px;
            width:8em;
            float:left;
            padding-left:60px;
            background-image: url('../assets/logo.png');
            background-repeat: no-repeat;
            background-size: contain;
            background-position: left center;
            h1{
                font-size:20px;
            }
            p{
                font-size:12px;
            }
        }

        .right-header{
            float: right;
            margin-top:8px;
            display: flex;
            align-items:center;
            justify-content:space-around;
            .search-input{
                position: relative;
                margin-right:20px;
                input{
                    width:120px;
                    height:20px;
                    padding-left:10px;
                    color:#fff;
                    background:rgb(43,47,61);
                    border:1px solid rgb(43,47,61);
                    @include border-radius;
                    outline:none;
                }
                .search-icon{
                    position: absolute;
                    right:0px;
                    top:4px;
                    display: inline-block;
                    width:18px;
                    height:18px;
                    background-image: url("../assets/search-icon.png");
                    background-repeat: no-repeat;
                    background-size: contain;
                    background-position:center;

                }
            }
            .user-logo{
                margin-right:20px;
                img{
                    width:24px;
                    height:24px;
                    @include border-radius(15px);

                }
            }
        }
    }
</style>
