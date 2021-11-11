$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "王雨榕" && pwd == "20021112" ) {
        // $('#h').text("welcome！");
        // event.preventDefault();
        // $('form').fadeOut(500);
        // $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 0);
    } else {
        alert("用户名或密码不正确！\n 提示：用户名为全世界最最最好看的小仙女的名字\n           密码是由0,1,2组成的八位数字  (猜一猜)");
    }
});
