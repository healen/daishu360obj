

$(function(){

    $(".aboutbox l li").attr("class","");

    if(window.location.href.indexOf("about_us")>1){
        $("#about_us").attr("class","active")


    }else if(window.location.href.indexOf("about_law")>1){
        $("#about_law").attr("class","active")

    }else if(window.location.href.indexOf("about_media")>1){
        $("#about_media").attr("class","active")

    }else if(window.location.href.indexOf("about_notice")>1){
        $("#about_notice").attr("class","active")

    }else if(window.location.href.indexOf("about_job")>1){
        $("#about_job").attr("class","active")

    }else if(window.location.href.indexOf("about_links")>1){
        $("#about_links").attr("class","active")

    }else if(window.location.href.indexOf("about_contact_us")>1){
        $("#about_contact_us").attr("class","active")

    }

})