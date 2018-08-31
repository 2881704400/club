
function userList() {
var searchbar = myApp.searchbar.create({
  el: '.searchbar',
  searchContainer: '.list',
  searchIn: '.item-title',
  on: {
    search(sb, query, previousQuery) {
      console.log(query, previousQuery);
    }
  }
});

$(".userListDetails div.item-content,.searchInput").unbind();
$(".userListDetails div.item-content").bind("click",function(){
  var chatObject = $(this).find("div.item-title").text(),DateTime = GetDateString();
  myApp.router.navigate("/shortMessage/?"+chatObject+","+DateTime); 
});
$(".searchInput").bind("focus",function(){
  $(".userListDetails").css("overflow-y","hidden");
});
$(".searchInput").bind("blur",function(){
    $(".userListDetails").css("overflow-y","auto");
});

}

//获取时间
function GetDateString() {
  var dd = new Date();
  dd.setDate(dd.getDate() + 0); //获取AddDayCount天后的日期 
  var y = dd.getFullYear();
  var m = dd.getMonth() + 1; //获取当前月份的日期 
  var d = dd.getDate();
  return y + "" + addZero(m) + "" + addZero(d);
}