    //选取data-id为6的<a>标签
    var button = $("a[data-id='6']");
    //每秒执行一次，若按钮状态为可用，进行点击
    var fuc = setInterval(function() {
            //如果出现刷新验证码的按钮，则表明已抢到
            if($(".refresh-btn").length > 0){
                  window.clearInterval(fuc);
                  //桌面通知，只有chrome，firefox浏览器支持桌面API
                  Notification.requestPermission(function(status) {
                        var n = new Notification('通知消息', { body: '爱奇艺会员兑换码！' });
                    });
            } else {
                  button.click();
            }
    },1000);//一秒一次点击

    function  getTicket(){
      var count =0;
      setInterval(function() {
        $('#query_ticket').click()
          console.log("一共刷新:"+(count++));
      },3000)

}
getTicket();



function getTicket() {
            var count = 0;
            var count1 = 0;
            setInterval(function () {
                $(document).on("click", "#ticket_240000K4730E >.btn72", function () {
                    if (!($(this).disabled)) {
                        alert($(this).val())
                        $(this).click()
                        console.log("有效点击: " + (count1++))
                        count++;
                    } else {
                        console.log("一共尝试:" + (count++));
                    }
                })
            }, 1000)

        }
        getTicket();



        var grab = function() {
                // 此处为相应页面的抢票按钮，请自行获取dom元素
                var button = document.getElementsByClassName('btn72')[8];
                if (!button.disabled) {
                    // 可抢票，点击抢票
                    button.click();
                } else {
                    // 不可抢票，刷新页面
                    setTimeout(function() {
                        window.location.reload();
                    }, 500);
                }

        }
        grab();





tr[@id='ticket_24000K429306']/td[@class='no-br']/a[@class='btn72']
