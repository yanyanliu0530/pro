<?php
    header("content-type:text/html;charset=utf8");
    include('common/public.php');

    //获取前端的数据
    $uname = $_REQUEST['uname'];
    $upwd = $_REQUEST['upwd'];
    //查找账号
    $sql = "select * from project where uname = '$uname'";
    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        if($upwd == $arr['upwd']){
            echo json_encode(array(
                'state' => '1',
                'info' => '登录成功'
            ));
        }else{
            echo json_encode(array(
                'state' => '0',
                'info' => '密码输入错误，请重新输入'
            ));
        }
    }else{
        echo json_encode(array(
            'state' => '0',
            'info' => '用户名不存在，请重新输入'
        ));
    }





?>