var index = {
	init(){
		this.getInviteCode();// 获取邀请码
		this.getUserInfo(); // 获取用户信息 
		this.addEvent(); 
		this.thisDayIncome(); // 今日收益
	},
	/**
     * #获取推广信息
	 * @post user_id 用户编号
     */
    // public function getPromotionInfo()
	getInviteCode(){ // 获取邀请码
		var token = localStorage.getItem('token');
		var id = localStorage.getItem('id');
		var data = {"token":token,"user_id":id};
		common.post('/getPromotionInfo',data,function(res){
			if(res.code == 0 ){
				var href = window.location.href;
				// $('.acc_li_url').val(res.data.promotion_url);
				var registerLink = localStorage.getItem('registerLink');
				$('.acc_li_url').val(registerLink+"?invite="+res.data.invitation_code);
			}
		});
	},
	/**
	* #获取用户数据
	*/
	// public function getUserInfo()
	getUserInfo(){
		var token = localStorage.getItem('token');
		var id = localStorage.getItem('id');
		var data = {"token":token,"user_id":id};
		common.post('/getUserInfo',data,function(res){
			if(res.code == 0){
				$(".a_s_i_val.balance").text(res.data.balance/100+"$");
				localStorage.setItem("balance",res.data.balance); // 用户的当前充值金额
				if(res.data.trade_status==0){// 0是未监管
					$(".a_s_i_val.balance").text("$"+parseInt(localStorage.getItem('balance'))/100);
					$(".a_s_i_val.status").text('未监管');
				}else if(res.data.trade_status){ // 1是监管状态
					$(".a_s_i_val.balance").text("$"+parseInt(localStorage.getItem('balance'))/100*0.9);
					$(".a_s_i_val.status").text('监管中');
				}
			}
		});
	},
	/**
     * #修改用户数据
     * ～@post withdraw_account 提现账户
     * ～@post trade_status 开启跟单收益 0：关闭 1：开启
     * @exception 102 用户信息修改失败
     */
    // public function setUserInfo()  设置监管开启还是关闭
	addEvent(){
		$('.a_s_btn.a_s_start').click(function(){ // 开启监管
			var token = localStorage.getItem('token');
			var id = localStorage.getItem('id');
			var data = {"token":token,"user_id":id,"trade_status":1};
			common.post('/setUserInfo',data,function(res){
				if(res.code == 0){
					$(".a_s_i_val.balance").text("$"+parseInt(localStorage.getItem('balance'))/100*0.9);
					index.getUserInfo();
				}
			});
		});
		$('.a_s_btn.a_s_end').click(function(){ // 关闭监管
			var token = localStorage.getItem('token');
			var id = localStorage.getItem('id');
			var data = {"token":token,"user_id":id,"trade_status":0};
			common.post('/setUserInfo',data,function(res){
				if(res.code == 0){
					$(".a_s_i_val.balance").text("$"+parseInt(localStorage.getItem('balance'))/100);
					index.getUserInfo();
				}
			});
		});
	},
	
	thisDayIncome(){ // 今日收益
		var balance = localStorage.getItem('balance');
		$(".this_day_income").text(parseInt(balance)/100*0.03*0.7+"$");
	},
};