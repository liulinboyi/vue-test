// https://eslint.org/docs/user-guide/configuring

module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    //此项是用来指定javaScript语言类型和风格
    parserOptions: {
        parser: 'babel-eslint'
    },
    //此项指定环境的全局变量，下面的配置指定为浏览器环境
    env: {
        browser: true,
    },
    // 此项是用来配置标准的js风格，就是说写代码的时候要规范的写
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // 此项是用来提供插件的，插件名称省略了eslint-plugin-，
    plugins: [
        'vue'
    ],
    rules: {
        // 强制 generator 函数中 * 号周围使用一致的空格 允许 async-await
        'generator-star-spacing': 'off',
        // 只允许在开发环境中使用debugger;
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        //强制使用一致的缩进,与.editorconfig文件保持一致
        'indent': ["error", 4],
        //要求使用 let 或 const 而不是 var
        'no-var':'warn',
        //强制在 function的左括号之前使用一致的空格
        'space-before-function-paren':'off',
        //禁止出现未使用过的变量
        'no-unused-vars':'error',
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': 'off',
        // 三等号
        'eqeqeq': 'off',
        // js语句结尾必须使用 ;
        'semi': ['off', 'always'],
        //禁用不必要的分号
        'no-extra-semi':'warn',
        // 关键字后面使用一致的空格
        'keyword-spacing': 'warn',
    }
}
