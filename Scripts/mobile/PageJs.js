/*================================ Mobile =========================================*/
// 房间控制
$$(document).on("page:beforein", ".page[data-page='homeDeatils0']", function (e) {
    initPageJS('homeDeatils0', '/Scripts/mobile/');
});
$$(document).on("page:beforein", ".page[data-page='homeDeatils1']", function (e) {
    initPageJS('homeDeatils1', '/Scripts/mobile/');
});
$$(document).on("page:beforein", ".page[data-page='homeDeatils2']", function (e) {
    initPageJS('homeDeatils2', '/Scripts/mobile/');
});
$$(document).on("page:beforein", ".page[data-page='homeDeatils3']", function (e) {
    initPageJS('homeDeatils3', '/Scripts/mobile/');
});
$$(document).on("page:beforein", ".page[data-page='homeDeatils4']", function (e) {
    initPageJS('homeDeatils4', '/Scripts/mobile/');
});
/*================================ Ipad =========================================*/

// 客控系统
$$(document).on("page:beforein", ".page[data-page='guestControl']", function (e) {
    initPageJS('guestControl', '/Scripts/Ipad/');
});
// 服务管理
$$(document).on("page:beforein", ".page[data-page='serviceManage']", function (e) {
    initPageJS('serviceManage', '/Scripts/Ipad/');
});
// 服务呼叫
$$(document).on("page:beforein", ".page[data-page='serviceCall']", function (e) {
    initPageJS('serviceCall', '/Scripts/Ipad/');
});
// 服务呼叫
$$(document).on("page:afterout", ".page[data-page='serviceCall']", function (e) {
    clearTimeout(callTimer);
});
// 服务员排班
$$(document).on("page:beforein", ".page[data-page='serviceSchedu']", function (e) {
    initPageJS('serviceSchedu', '/Scripts/Ipad/');
});
// 历史通知
$$(document).on("page:beforein", ".page[data-page='historyNotice']", function (e) {
    initPageJS('historyNotice', '/Scripts/Ipad/');
});
// 通知详情
$$(document).on("page:beforein", ".page[data-page='noticeDetails']", function (e) {
    initPageJS('noticeDetails', '/Scripts/Ipad/');
});
// 通知设置
$$(document).on("page:beforein", ".page[data-page='noticeSet']", function (e) {
    initPageJS('noticeSet', '/Scripts/Ipad/');
});
// 音乐系统
$$(document).on("page:beforein", ".page[data-page='bgMusic']", function (e) {
    initPageJS('bgMusic', '/Scripts/Ipad/');
});
// 信息通知
$$(document).on("page:beforein", ".page[data-page='infoComm']", function (e) {
    initPageJS('infoComm', '/Scripts/Ipad/');
});
// 机电管理
$$(document).on("page:beforein", ".page[data-page='electManager']", function (e) {
    initPageJS('electManager', '/Scripts/Ipad/');
});
// 窗帘系统
$$(document).on("page:beforein", ".page[data-page='curtainSys']", function (e) {
    initPageJS('curtainSys', '/Scripts/Ipad/');
});
// 场景定制
$$(document).on("page:beforein", ".page[data-page='scenceCus']", function (e) {
    initPageJS('scenceCus', '/Scripts/Ipad/');
});
// 系统总览
$$(document).on("page:beforein", ".page[data-page='sysOverview']", function (e) {
    initPageJS('sysOverview', '/Scripts/Ipad/');
});