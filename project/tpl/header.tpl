<!--header.tpl开始读取---->
   <div class="header">
        <div class="topbar">
            <div class="inwarp">
                <div class="l">
                    欢迎致电：<span class="tel">400-0546-966</span>
                </div>

                <div class="r">

                    <div class="linklist">
                        <a href="">新手指引</a>
                        <a href="about_us.html">关于我们</a>
                        <a href="login.html" class="user login">登录</a>
                        <a href="regrist.html" class="user regst">注册</a>


                    </div>

                  



                    <div class="search">

                        <i class="icon searchico">
                            
                        </i>
                        <input type="text" class="searchinput" placeholder="请输入关键字">

                        <div class="close">
                            
                        </div>

                    </div>

                     <a href="project_sponsor.html" class="btn smal">+发起项目</a>
                </div>
                
            </div>
        </div>
        <div class="hbody">
            <div class="inwarp">
                <div class="l">
                    <h1>
                        <a href="index.html"><img src="../public/img/logo.png" alt="" height="60"></a>
                        <img src="../public/img/slogn.png" alt="" height="60">
                    </h1>
                </div>

                <div class="r">
                    <div class="navbox">

                        <ul>
                            <li id="index">
                                <a href="index.html"><span>首页</span> </a>
                            </li>
                            <li id="investment" class="toggle">
                                <a href="stock_crowdfunding_list.html"><span>股权众筹</span></a>
                                <div class="showbox">
                                    <span class="sanjiao"></span>
                                    <a href="frist_crowdfunding_list.html">优先股众筹</a>
                                    <a href="stock_crowdfunding_list.html">股权众筹</a>
                                </div>
                            </li>
                            <li id="new3">
                                <a href="new3.html"><span>新三板定增</span> </a>
                            </li>
                            <li class="toggle" id="product_crowdfunding_list">
                                <a href="product_crowdfunding_list.html"><span>产品众筹</span></a>
                            </li>
                            <li id="shop_crowdfunding_list">
                                <a href="shop_crowdfunding_list.html"><span>店铺众筹</span> </a>
                            </li>
                            <li id="transfer_list">
                                <a href="transfer_list.html"><span>转让专区</span> </a>
                            </li>

                            <li id="Preheating">
                                <a href="Preheating.html"><span>预热专区</span> </a>
                            </li>
                            
                            <li id="my_index">
                                <a href="my_index.html"><span>我的账户</span> </a>
                            </li>
                           
                        </ul>
                    </div>
                </div>




            </div>
        </div>
   </div>

   <script type="text/javascript">
   $(".searchico").on("click",function(){
        var paren=$(this).parents(".search");
        if(!paren.hasClass("on")){
            paren.addClass("on");
        }else{
            paren.removeClass("on");
        }
   })

   $(".search .close").on("click",function(){
        var paren=$(this).parents(".search");
        paren.removeClass("on");


   })

   </script>
 <!-----header.tpl读取完成---->