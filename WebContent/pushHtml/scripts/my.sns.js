var userid="test01";
var shejiaourl="http://localhost:8080/TestDemo/rest/snsNetworking";
$(function(){
	showchecked(userid);
	$("#shejiao").click(function(){
		$.ajax({
			url:shejiaourl+"/updateopen",
			type:"post",
			data:{
				userId:userid
			},
			dataType:"json",
			success:function(data){
			}
		});
	});
	$("#celue").click(function(){
		$.ajax({
			url:shejiaourl+"/udpateSnsAssetsclose",
			type:"post",
			data:{
				userId:userid
			},
			dataType:"json",
			success:function(data){
			}
		});
		});
	$("#zichan").click(function(){
		$.ajax({
			url:shejiaourl+"/updatesnsStrategyclose",
			type:"post",
			data:{
				userId:userid
			},
			dataType:"json",
			success:function(data){
			}
		});
	});
	$("#bdh").click(function(){
		var price=$("#updateprice").val();
		if(price==null||price==""){
			alert("请输入要修改的价格哦！")
		}
		else{
		$.ajax({
			url:shejiaourl+"/updateSnsStrategyopen",
			type:"post",
			data:{
				sns4Price:price,
				userId:userid
			},
			dataType:"json",
			success:function(data){
				alert("修改成功");
				$("#updateprice").val("");
			}
		});
		}
	});

});
//显示按钮状态
function showchecked(userid){
	$.ajax({
		url:shejiaourl+"/getfollowlist",
		type:"get",
		data:{
			userId:userid
		},
		dataType:"json",
		success:function(data){
			var dd=data.entity.dataList;
			$.each(dd,function(i,item){
				change(item.sns4Opened,item.sns4Assets,item.sns4Strategy);
			})
		}
	});
}
//改变按钮状态
function change(sns4Opened,sns4Assets,sns4Strategy){
	if(sns4Opened==1){$("#shejiao").attr("checked","checked");}
	else{$("#shejiao").removeAttr("checked");}
	if(sns4Assets==1){$("#celue").attr("checked","checked");}
	else{$("#celue").removeAttr("checked");}
	if(sns4Strategy==1){$("#zichan").attr("checked","checked");}
	else{$("#zichan").removeAttr("checked");}
}