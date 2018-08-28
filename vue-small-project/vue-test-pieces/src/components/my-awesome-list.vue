<template>
	<ul>
	  <slot name="item"
	    v-for="item in items"
	    :text="item.text">
	    <!-- 这里写入备用内容 -->
	
	  </slot>
	</ul>
</template>
<script>
	export default{
		data (){
			return {
				items:[
					{
						id:1,
						text:'苹果'
					},
					{
						id:2,
						text:'z你不红不'
					},
					{
						id:3,
						text:'拜拜你不'
					},{
						id:4,
						text:'好棒的对哈'
					}
				]
			}
		}
	}
</script>