<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>超市管理分析系统后台登录界面</title>
    <meta name="description" content="这是一个 index 页面">
    <meta name="keywords" content="index">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="renderer" content="webkit">
    <meta http-equiv="Cache-Control" content="no-siteapp"/>
    <link rel="icon" type="image/png" href="assets/i/favicon.png">
    <link rel="apple-touch-icon-precomposed" href="assets/i/app-icon72x72@2x.png">
    <meta name="apple-mobile-web-app-title" content="Amaze UI"/>
    <link rel="stylesheet" href="assets/css/amazeui.min.css"/>
    <link rel="stylesheet" href="assets/css/amazeui.datatables.min.css"/>
    <link rel="stylesheet" href="assets/css/app.css">
    <script src="assets/js/jquery.min.js"></script>

</head>

<body data-type="login">
<script src="assets/js/theme.js"></script>
<div class="am-g tpl-g">
    <!-- 风格切换 -->
    <div class="tpl-skiner">
        <div class="tpl-skiner-toggle am-icon-cog">
        </div>
        <div class="tpl-skiner-content">
            <div class="tpl-skiner-content-title">
                选择主题
            </div>
            <div class="tpl-skiner-content-bar">
                <span class="skiner-color skiner-white" data-color="theme-white"></span>
                <span class="skiner-color skiner-black" data-color="theme-black"></span>
            </div>
        </div>
    </div>
    <div class="tpl-login">
        <div class="tpl-login-content">
            <div class="tpl-login-logo">

            </div>
            <c:if test="${not empty tip}">
                <div class="am-alert" data-am-alert>
                    <button type="button" class="am-close">&times;</button>
                    <p>${tip}</p>
                </div>
            </c:if>

            <form class="am-form tpl-form-line-form" action="user_login.action" method="post">
                <div class="am-form-group">
                    <input type="text" class="tpl-form-input" id="userid" name="userid" placeholder="请输入账号" required
                           minlength="4" max="6">

                </div>

                <div class="am-form-group">
                    <input type="password" class="tpl-form-input" id="password" name="password" placeholder="请输入密码"
                           required minlength="3" maxlength="6">

                </div>

                <div class="am-form-group">

                    <button type="submit"
                            class="am-btn am-btn-primary  am-btn-block tpl-btn-bg-color-success  tpl-login-btn">提交
                    </button>

                </div>
            </form>

        </div>
    </div>
</div>
<script src="assets/js/amazeui.min.js"></script>
<script src="assets/js/app.js"></script>

</body>

</html>