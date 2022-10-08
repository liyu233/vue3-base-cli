# 前端快速脚手架

####  Vue3 + Ts + Axios

## 目录

```
|-- src
    |-- api
        |-- http // 请求封装，request中需要使用此处定义的AxiosService发起异步请求
        |-- request // 所有组件内的异步请求，按照功能模块建立文件夹，将异步请求写在其中，书写规范见示例
    |-- assets // 静态资源css img，需要按模块创建目录存放资源
    |-- components // 组件库 公共模块，复用模块 
        |-- layouts // 布局组件，内容以slot方式插入其中，直接简单引入到需要使用的组件中
    |-- router // 按照模块创建目录并创建路由，将所有子模块路由，导入到index
    |-- types // 相关的类型，枚举等
    |-- views // 页面级别的组件
    |-- App.vue
    |-- main.ts
```


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
