# SERV
## 目标

> 积累形成基于`nodejs`的后台apiserver

## 结构
```
├── dev.sh
├── docker-compose.yml
├── README.md
└── server
    ├── app.js
    ├── config
    ├── data
    ├── Dockerfile
    ├── init.sh
    ├── node_modules
    ├── package.json
    ├── server
    ├── support
    └── utils
```

## 开发约束

同属一个模块的API放置在一个文件夹下，如：project
```
project
├── project.router.js     // 路由
├── project.validation.js // 基于`joi`的传入参数验证
├── project.controller.js // 业务逻辑
└── project.model.js      // 基于mongoose的实体model
```
其中`project`会被注册为url的前缀,形成 `/project/**`
