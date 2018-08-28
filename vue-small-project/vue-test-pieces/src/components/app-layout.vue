<template>
	<div class="container">
	  	<header>
	    	<slot name="header"></slot>
	  	</header>
	  	<main>
	    	<slot></slot>
	  	</main>
	  	<footer>
	  		<p>你们好啊，今天是星期一</p>
	    	<slot name="footer">
	    	</slot>
	  	</footer>
	</div>
</template><!-- <li v-if="page==1" class="disabled">上一页</li>
	<li v-if="page==1" class="active">{{page}}</li>
	<li v-else>{{page}}</li>
	<li v-if="page==pageConut" class="disabled">下一页</li> -->