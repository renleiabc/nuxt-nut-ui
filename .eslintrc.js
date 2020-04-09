/*
 * @Author: renlei
 * @Date: 2019-11-29 10:00:30
 * @LastEditors: renlei
 * @LastEditTime: 2020-04-09 13:54:52
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue',
    'prettier/standard'
  ],
  plugins: ['prettier', 'vue'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'vue/require-component-is': 'off',
    'vue/attributes-order': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 0,
    //启用Prettier配置文件的加载（默认值:) true。如果您使用多个相互冲突的工具，或者不希望将您的ESLint设置与Prettier配置混合使用，则可能很有用
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: false
      }
    ],
    'object-shorthand': 2
  }
}
