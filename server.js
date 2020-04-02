// 引入 express
const express = require("express");

// 引入 socket.io 
const socketIo = require("socket.io");

// 引入 express-session 中间件模块
const session = require("express-session");

// 引入 express-async-errors
require("express-async-errors");

// 引入路由中间件文件



// 监听端口，启动服务
const server = app.listent(7778, () => {
    console.log("服务启动成功");
})