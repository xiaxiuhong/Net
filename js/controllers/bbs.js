/**
 * Created by hxsd on 2016/12/16.
 */
angular.module("myapp")
    .controller("bbsCtrl",function($scope,speakService){
        $scope.data={
            speaks:[
                {"imgsrc":"images/icon1.jpg","name":"阿悦一朵花","city":"上海","desc":"痴而能傲，乃为真傲；傲而能痴，乃为真痴。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"空中高飞的燕","city":"北京","desc":"忧魂起舞亡灵枯坠，前方号角呜咽破碎。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"玫瑰恩","city":"广州","desc":"冬会初雪​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"梨涡Dimple","city":"南京","desc":"鲜衣怒马少年时​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"给我一礼拜的阳光 ","city":"上海","desc":"流年。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"尧尧一只","city":"黄山","desc":"你的意中人，是个盖世英雄。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"夏沫冬初","city":"贵州","desc":"像是光与眼睛，疤痕与曾经，它们紧紧相依。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"平淡如水","city":"长春","desc":"​一杯不会止一杯","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"十里春风","city":"合肥","desc":"一头乱发等待会剪的人。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"声缺","city":"杭州","desc":"沉默表演​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"学长等一下","city":"哈尔滨","desc":"世界清净，人人匆忙，人人匆忙，我在远方。一样，匆忙。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"Always悦悦","city":"芜湖","desc":"聂鲁达的视野​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"女子瑾","city":"桂林","desc":"再美的蓝图不如一幕回忆的绚烂​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"校草儿","city":"长春","desc":"我想你与我同行，向着黑暗中的花。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"薄荷酱吖","city":"上海","desc":"你说路太远天太阴，我说阴天里请绽放。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"贾征宇","city":"北京","desc":"阴天里，我是你的阳光。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"李乐乐乐乐乐儿","city":"海南","desc":"成功没那么严重，做自己反而比较心安理得。明天我们好好的过。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"阿星_Girl","city":"苏州","desc":"抬头做人，闷头做事。不逐虚名，不闻杂音。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"秋酿的猫里奥","city":"沈阳","desc":"春观夜樱，夏望繁星，秋赏满月，冬会初雪。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"旧宿倾清","city":"杭州","desc":"留个好时光​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"灯泡发光亮堂堂","city":"深圳","desc":"伍迪艾伦的年代一样是最好的年代。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"梁竞纯","city":"南京","desc":"爱人你可感到明天已经来临，码头上停着我们的船。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"樱桃我是小丸子","city":"上海","desc":"石会穿，水会干，谷未出山，河已入海。​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"听说你喜欢的琉璃就是我","city":"北京","desc":"还一刻孩童，无限荣光。​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"胜事繁华","city":"天津","desc":"冰川消融，海盜稱臣，美人魚歌唱。​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"绿了个泉","city":"重庆","desc":"露出皓月繁星，露出锦缎绫罗。​​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"五月的小菠萝","city":"成都","desc":"《这个男人来自地球》---The Man from Earth.​​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"橘子demi","city":"北京","desc":"老歌好意境。开阔。幻声凋落。树分云雾。都穿梭。往来经过。 窦唯-暮春秋色. ","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"可惜我是蓝色","city":"大连","desc":"热水流过茶叶，像溪水流过森林。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"嗯我是阿熊","city":"沈阳","desc":"谁叵谁测，不知所云。是以为然，是不以为然。静观，其心。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"夏天听海","city":"长春","desc":"你让我想起光辉、希望、醉人的美好。任何不能令人满意的东西，不值得我们屈尊。——王小波《爱你就像爱生命》","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"你压着我头发了","city":"哈尔滨","desc":"​北极光，旅行的终级幻象。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"浪费cq","city":"桂林","desc":"好山好水好天光，好吃好喝好荒凉。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"茶叶蛋青","city":"昆明","desc":"不语方得心意净。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"阿悦一朵花","city":"上海","desc":"痴而能傲，乃为真傲；傲而能痴，乃为真痴。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"空中高飞的燕","city":"北京","desc":"忧魂起舞亡灵枯坠，前方号角呜咽破碎。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"玫瑰恩","city":"广州","desc":"冬会初雪​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"梨涡Dimple","city":"南京","desc":"鲜衣怒马少年时​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"给我一礼拜的阳光 ","city":"上海","desc":"流年。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"尧尧一只","city":"黄山","desc":"你的意中人，是个盖世英雄。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"夏沫冬初","city":"贵州","desc":"像是光与眼睛，疤痕与曾经，它们紧紧相依。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"平淡如水","city":"长春","desc":"​一杯不会止一杯","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"十里春风","city":"合肥","desc":"一头乱发等待会剪的人。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"声缺","city":"杭州","desc":"沉默表演​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"学长等一下","city":"哈尔滨","desc":"世界清净，人人匆忙，人人匆忙，我在远方。一样，匆忙。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"Always悦悦","city":"芜湖","desc":"聂鲁达的视野​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"女子瑾","city":"桂林","desc":"再美的蓝图不如一幕回忆的绚烂​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon1.jpg","name":"校草儿","city":"长春","desc":"我想你与我同行，向着黑暗中的花。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"薄荷酱吖","city":"上海","desc":"你说路太远天太阴，我说阴天里请绽放。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"李乐乐乐乐乐儿","city":"海南","desc":"成功没那么严重，做自己反而比较心安理得。明天我们好好的过。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"阿星_Girl","city":"苏州","desc":"抬头做人，闷头做事。不逐虚名，不闻杂音。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"秋酿的猫里奥","city":"沈阳","desc":"春观夜樱，夏望繁星，秋赏满月，冬会初雪。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"旧宿倾清","city":"杭州","desc":"留个好时光​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"灯泡发光亮堂堂","city":"深圳","desc":"伍迪艾伦的年代一样是最好的年代。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"梁竞纯","city":"南京","desc":"爱人你可感到明天已经来临，码头上停着我们的船。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"樱桃我是小丸子","city":"上海","desc":"石会穿，水会干，谷未出山，河已入海。​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon11.jpg","name":"听说你喜欢的琉璃就是我","city":"北京","desc":"还一刻孩童，无限荣光。​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon12.jpg","name":"胜事繁华","city":"天津","desc":"冰川消融，海盜稱臣，美人魚歌唱。​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon13.jpg","name":"绿了个泉","city":"重庆","desc":"露出皓月繁星，露出锦缎绫罗。​​​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"薄荷酱吖","city":"上海","desc":"你说路太远天太阴，我说阴天里请绽放。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"贾征宇","city":"北京","desc":"阴天里，我是你的阳光。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"李乐乐乐乐乐儿","city":"海南","desc":"成功没那么严重，做自己反而比较心安理得。明天我们好好的过。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon5.jpg","name":"阿星_Girl","city":"苏州","desc":"抬头做人，闷头做事。不逐虚名，不闻杂音。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon6.jpg","name":"秋酿的猫里奥","city":"沈阳","desc":"春观夜樱，夏望繁星，秋赏满月，冬会初雪。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon7.jpg","name":"旧宿倾清","city":"杭州","desc":"留个好时光​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon8.jpg","name":"灯泡发光亮堂堂","city":"深圳","desc":"伍迪艾伦的年代一样是最好的年代。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon9.jpg","name":"梁竞纯","city":"南京","desc":"爱人你可感到明天已经来临，码头上停着我们的船。​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon10.jpg","name":"樱桃我是小丸子","city":"上海","desc":"石会穿，水会干，谷未出山，河已入海。​​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon2.jpg","name":"空中高飞的燕","city":"北京","desc":"忧魂起舞亡灵枯坠，前方号角呜咽破碎。","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon3.jpg","name":"玫瑰恩","city":"广州","desc":"冬会初雪​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)},
                {"imgsrc":"images/icon4.jpg","name":"梨涡Dimple","city":"南京","desc":"鲜衣怒马少年时​","time":"2016/12/18","ding":Math.ceil(Math.random()*200),"cai":Math.ceil(Math.random()*100)}
            ]
        };

        //点击切换显示与隐藏div
        $scope.fastSay = function () {
            $(".hideSpeak").toggle();
            $(".loginSpeak").show();

        };

        //点击增加内容函数
        $scope.addSpeak=function(){

            //邮箱账号非空验证
            var emailName=$(".emailId").val();
            if(emailName.replace(/^\s+|\s+$/g, "")==''){
                $('.emailId').val('');
                $('.hideTip').slideDown();
                setTimeout(function(){
                    $(".hideTip").slideUp();
                },500);
                return;
            }

            //密码非空验证
            var pwd=$(".emailPwd").val();
            if(pwd.replace(/^\s+|\s+$/g, "")==''){
                $('.emailPwd').val('');
                $('.pwdTip').slideDown();
                setTimeout(function(){
                    $(".pwdTip").slideUp();
                },500);
                return;
            }
            //点击增加内容
            //头像图片随机
            var imgNum=Math.ceil(Math.random()*13);
            //城市随机
            function getCity(cityIcon){
                var city="上海";
                var cities={
                    "1":"上海", "2":"北京", "3":"天津", "4":"杭州", "5":"广州",
                    "6":"哈尔滨", "7":"南京", "8":"昆明", "9":"桂林", "10":"深圳"
                };
                return cities[cityIcon] || city;
            }
            var cityNum=Math.ceil(Math.random()*10);
            //发言时间
            var sayTime=new Date().toLocaleString();

            $scope.data.speaks.unshift({
                "imgsrc":"images/icon"+imgNum+".jpg",
                "name":$scope.emailId,
                "city":getCity(cityNum),
                "desc":$scope.inputContent,
                "time":sayTime,
                "ding":0,
                "cai":0
            });
            $scope.emailId=null;
            $scope.emailPwd=null;
            $scope.inputContent=null;

        };

        //统计跟帖人数
        var mybbs=speakService.findAll();
        //统计speaks中发言总数量
        $scope.sumCount=function(){
            var total=$scope.data.speaks.length;
            //遍历统计
            angular.forEach(mybbs,function(item){
                total+=1;
            });
            return total;
        };

        //顶与踩--参与人数
        $scope.canyu=2581;
        //点击对应按钮,增加顶和踩的数量
        $scope.ding=function(speak){
            speak.ding++;
            $scope.canyu++;
        };
        $scope.cai=function(speak){
            speak.cai++;
            $scope.canyu++;
        }
});