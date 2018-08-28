<script>
	var getChildrenTextContent = function (children) {
	  return children.map(function (node) {
	    return node.children //节点的孩子节点
	      ? getChildrenTextContent(node.children)
	      : node.text
	  }).join('')
	}
	export default{
	  render: function (createElement) {
	     // create kebabCase id
	     var headingId = getChildrenTextContent(this.$slots.default)
	       .toLowerCase()//转小写
	       .replace(/\W+/g, '-')//将不是字母数字汉字下划线的字符转为-。此处就是将空格转为-
	       .replace(/(^\-|\-$)/g, '')//将开头或者结尾是-的去掉

	     return createElement(
	       'h' + this.level,
	       [
	         createElement('a', {
	           attrs: {
	             name: headingId,
	             href: '#' + headingId
	           }
	         }, this.$slots.default)
	       ]
	     )
	   },
	   props: {
	     level: {
	       type: Number,
	       required: true
	     }
	   }
	}
</script>