let Service = require('node-windows').Service;
 

let svc = new Service({
  
name: 'wsServer',    
  
description: '测试项目服务器',
  
script: 'D:/club/Scripts/mobile/websocket/' 

});
 
// 监听安装事件
svc.on('install', () => {
  svc.start();
});
 // 监听卸载事件
 svc.on('uninstall',()=>{

 });
 // 防止程序运行2次
  svc.on('alreadyinstalled',()=>{

 });
  // 如果存在就卸载
if(svc.exists) return svc.uninstall();

svc.install();
