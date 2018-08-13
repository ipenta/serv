# SERV
## 目标

> 积累形成基于`nodejs`的后台apiserver

## 结构
```
.
├── app.js  // 入口
├── config  // 项目配置
├── server  // 非系统级API
├── support // 系统级API
├── utils   // 工具类
├── data    // mongodb本地映射
├── dev.sh  // 开发脚本
├── docker-compose.yml //docker-compose配置
├── Dockerfile //docker镜像文件
├── node_modules //
├── package.json //
└── README.md
```

## 开发约束

同属一个模块的API放置在一个文件夹下，如：project
```
project
├── project.router.js     // 路由
├── project.validation.js // 传入参数验证
├── project.controller.js // 业务逻辑
└── project.model.js      // 基于mongoose的实体model
```
其中`project`会被注册为url的前缀,形成 `/project/**`
