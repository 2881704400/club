
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

// 请求 
$.when($.fn.XmlRequset.httpPost("/api/GWServiceWebAPI/get_JMdata",{
            data:{getDataTable:"GWUser"},
            async:false
        })).done(function(n,l){
        let rt = n.HttpData;
        if (rt.code ==200) {
           $(".userListView").find("ul").html("");
          rt.data.forEach(function(item,index){
            if(item.name != window.localStorage.userName)
            {
              let html = '<li >'+
                          '<a class="item-content" href="/shortMessage/?'+item.name+'">'+
                            '<div class="item-media"><img src="/image/ic_launcher.png" width="60"></div>'+
                            '<div class="item-inner">'+
                              '<div class="item-title">'+item.name+'</div>'+
                            '</div>'+
                          '</a>'+
                        '</li>'; 
              $(".userListView").find("ul").append(html).parents("div.list-group").css("display","block");
              $("html").find("a").unbind();
              $("html").find("a").bind("click",function(){
                  
              });
            }
          });
        }
    }).fail(function(e){
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

