<template>
	<div>
		<!-- <h2>我是子组件的标题</h2> -->
		<!-- 父组件my-com中没有那两个p内容的话，slot中的内容就显示了 -->
		<!-- <slot>
		    只有在没有要分发的内容时才会显示。
		</slot> -->
		<h3>nuhubuibiiii</h3>
		<div class="child">
		  <slot text="hello from child"></slot>
		</div>
	</div>
</template>
<script>
	
</script>