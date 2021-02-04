# 初始化项目
+ 1、Iview引入


  在开始使用 iView Weapp 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

  + 1.1、如何引入
    到 [GitHub](https://github.com/TalkingData/iview-weapp) 下载 iView Weapp 的代码，将 dist 目录拷贝到自己的项目中。

  + 1.2、引入例子
  以 Button 为例，其它组件在对应的文档页查看：
    + 1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：

    `"usingComponents": {
        "i-button": "../../dist/button/index"
    }`
    
    + 2. 在 wxml 中使用组件：

    `<i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>`