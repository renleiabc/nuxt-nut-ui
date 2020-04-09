<!--
 * @Author: renlei
 * @Date: 2020-04-09 13:41:11
 * @LastEditors: renlei
 * @LastEditTime: 2020-04-09 14:14:28
 * @Description:
 -->

# nuxt-nut-ui

在 nuxt 框当中使用京东移动端 nut-ui 组件

## Build Setup

```bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

在 assets 文件加下，建立 sass/index.scss 文件，在 index.scss 当中引入@import '@nutui/nutui/dist/nutui.scss';就会出现：

```
These relative modules were not found:                                                        friendly-errors 14:14:04
                                                                                              friendly-errors 14:14:04
* ../img/play-btn.png in ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./assets/sass/index.scss
* ../img/video-icon.png in ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./assets/sass/index.scss
* ./assets/img/shortpwd.png in ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./assets/sass/index.scss
* ./assets/img/success.png in ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./assets/sass/index.scss
* ./assets/img/wrong.png in ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/_sass-loader@8.0.2@sass-loader/dist/cjs.js??ref--7-oneOf-1-3!./assets/sass/index.scss
i Waiting for file changes
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
