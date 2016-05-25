

$(function(){
    // $("#leftNavSider>li>a").bind("click",function(){
    //     var parentLi=$(this).parents("li");
    //     var ul=parentLi.find("ul").length;
    //     parentLi.addClass("active").siblings("li").removeClass("active")
    //     if(ul>0){
    //         if(parentLi.find("ul").is(":hidden")){
    //             parentLi.find("ul").stop(true,false).slideDown(250);
    //             parentLi.siblings().find("ul").stop(true,false).slideUp(250);
    //          }else{
    //             parentLi.find("ul").stop(true,false).slideUp(250);
    //              parentLi.removeClass("active")
    //          }
    //     }
    // })
    $("#leftNavSider>li>ul>li").bind("click",function(){
        $(this).addClass("active").siblings("li").removeClass("active");
    })
    $(".titlename .close").bind("click",function(){
        var parent=$(this).parents(".titlename");
        parent.hide();
    })
     /*个人中心路由JS*/
    $("#leftNavSider > li").removeClass("active");
    $("#leftNavSider > li li").removeClass("active");


    if(window.location.href.indexOf('my_index')>1){
         $("li[data-role='my_index']").attr('class','active');
     }else if(window.location.href.indexOf('my_money_recharge')>1){
         $("li[data-role='my_money_recharge']").attr('class','active');
     }else if(window.location.href.indexOf('my_money_cash')>1){
         $("li[data-role='my_money_cash']").attr('class','active');
     }else if(window.location.href.indexOf('my_balance')>1){
         $("li[data-role='my_balance']").attr('class','active');
     }else if(window.location.href.indexOf('my_order_stock')>1 && window.location.href.indexOf('my_order_stock_right')<0){
         $("li[data-role='my_order_stock']").attr('class','active');
     }else if(window.location.href.indexOf('my_order_stock_right')>1){
         $("li[data-role='my_order_stock_right']").attr('class','active');
     }else if(window.location.href.indexOf('my_order_product')>1){
         $("li[data-role='my_order_product']").attr('class','active');
     }else if(window.location.href.indexOf('my_order_shop')>1){
         $("li[data-role='my_order_shop']").attr('class','active');
     }else if(window.location.href.indexOf('my_review')>1){
         $("li[data-role='my_review']").attr('class','active');
     }else if(window.location.href.indexOf('my_system_message')>1){
         $("li[data-role='my_system_message']").attr('class','active');
     }else if(window.location.href.indexOf('my_repassword')>1){
         $("li[data-role='my_repassword']").attr('class','active');
     }else if(window.location.href.indexOf('my_bank')>1){
        
         $("li[data-role='my_bank']").attr('class','active');
     }else if(window.location.href.indexOf('my_address')>1){
        
         $("li[data-role='my_address']").attr('class','active');
     }else if(window.location.href.indexOf('my_personal')>1){
        
         $("li[data-role='my_personal']").attr('class','active');
     }
})


