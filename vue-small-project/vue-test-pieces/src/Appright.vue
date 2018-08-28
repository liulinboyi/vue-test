<template>
	<div id="Appright">
		<blog-post>
		  <h1 slot="header">
		    About Me
		  </h1>

		  <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>

		  <p slot="footer">
		    Copyright 2016 Evan You
		  </p>

		  <p>If I have some content down here, it will also be included in vm.$slots.default.</p>.
		</blog-post>

		<anchored-heading :level="1">Hello world!</anchored-heading>
		<anchored-heading :level="4">Hello world!</anchored-heading>
		<anchored-heading :level="2">
			<p>Hello This world!</p>
		</anchored-heading>

		<p>单击可切换图片：</p>
    	<picChange/>
	</div>
	
</template>
<script>
	import blogPost from './components/blog-post'
	import anchoredHeading from './components/anchored-heading'
	import picChange from './components/picChange'
	
	export default{
		name: 'Appright',
		components:{
			blogPost,anchoredHeading,picChange
		}
	}
	
</script>
<style>
	
</style>