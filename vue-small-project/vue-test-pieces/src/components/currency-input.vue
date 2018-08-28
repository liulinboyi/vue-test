<template>
<!-- 有时仍然需要在 JavaScript 中直接访问子组件。为此可以使用 ref 为子组件指定一个引用 ID。直接使用this.$refs.input来获取这个dom节点。
如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例 -->
<!-- 父组件中写法：<currency-input v-model="price"></currency-input>
虽然父组件中引用子组件时并未写下传递值value及 :value="price"，实际上相当于隐式加上了-->
<!-- value是input的属性，此处用v-bind只是为了动态绑定一个值，这个值就是从父组件传过来的value -->
<!-- v-model是一个双向的过程，其相当于父传子子传父 -->
	<input type="text" name="" 
	ref="input"
	v-bind:value="value"
	v-on:input="updateValue($event.target.value)">
	<!-- 这个input就相当于click一样，其特有的 -->

	
</template>
<script>
	export default{
		props:['value'],
		methods: {
		    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
		    updateValue: function (value) {
		      var formattedValue = value
		        // 删除两侧的空格符
		        .trim()
		        // 保留 2 位小数
		        .slice(
		          0,
		          value.indexOf('.') === -1
		            ? value.length
		            : value.indexOf('.') + 3
		        )
		      // 如果值尚不合规，则手动覆盖为合规的值
		      if (formattedValue !== value) {
		        this.$refs.input.value = formattedValue
		      }
		      // 通过 input 事件带出数值
		      // Number(Object)就是将对象转为数类型
		      this.$emit('input', Number(formattedValue))
		    }
		  }
	}
</script>
<style>
	
</style>