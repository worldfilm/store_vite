<template>
    <div id="main">
      <div id="main_top">
        <ul class="clearfix">
          <li class="customer_img">
            <img src="../assets/page/images/menber_img.png" alt="Customer Image">
          </li>
          <li class="merchants_img">
            <img src="../assets/page/images/person_img2.png" alt="Merchant Image">
          </li>
        </ul>
        <h2>您正在向<span>好邻居超市</span>直接支付现金</h2>
  
        <div id="pay_box">
          <div id="input_box" style="padding-top:100px;">
            <div class="input_box_left"></div>
            <input type="number" id="pay_value" placeholder="请输入金额"/>
            <div id="icon_del"></div>
          </div>
        </div>
      </div>
      <div class="btn_box" id="face_pay">
        <router-link to="/payment">去支付</router-link>
      </div>
    </div>
  </template>
<!-- <html>
<head>
    <meta charset="UTF-8">
    <title>面对面支付</title>
    <meta name="format-detection" content="telephone=no,email=no">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script type="text/javascript" src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="js/lib/flexible.js"></script>

</head>
<body id="facetoface" class="wrapper">

</body>
</html> -->