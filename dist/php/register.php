<?php
    header("content-type:text/html;charset=utf-8");
    include('common/public.php');
    //获取前端传来的数据
    $uname = $_REQUEST['uname'];
    $upwd = $_REQUEST['upwd'];
    $sql = "select * from project where uname = '$uname'";

    $res = mysqli_query($connect,$sql);
    $arr = mysqli_fetch_assoc($res);

    if($arr){
        echo json_encode(array(
            'state' => '0',
            'info' => '账号存在，请重新注册'
        ));
    }
    else{
       $ins = "insert into project (uname,upwd) values ('$uname','$upwd')";
        mysqli_query($connect,$ins);
        echo json_encode(array(
            'state' => '1',
            'info' => '注册成功'
        ));

    }


?>