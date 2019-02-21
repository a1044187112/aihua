var common = {
	post(interface,data,fn){
		data.rand = Math.random().toString(36).substr(2);
		data.sign = hex_md5(data.rand+'eIIWOdR32hbjsi6AUrRdVf45VAb3nwyM');
		var url = 'http://192.168.1.111:8888/aihua/public/admin.php/aihua/api'+interface;
		$.ajax({
			type:'POST',
			url:url,
			data:data,
			success:function(res){
				fn(res);
			},
			error:function(res){
				if(res.responseJSON.code == 202 ){ // token或者id过期 获取账号在其他地方登录
					parent.window.location.href = './login.html';
				}
			}});
	},
};