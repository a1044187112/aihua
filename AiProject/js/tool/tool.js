var tool = {
	remind: function(text) {
		var div = document.createElement('div');
		div.classList.add('remind_popus');
		var span = document.createElement('span');
		span.classList.add('remind_popus_text');
		span.innerText = text;
		div.appendChild(span);
		document.getElementsByTagName('body')[0].appendChild(div);
		setTimeout(function() {
			document.getElementsByClassName('remind_popus')[0].remove(0);
		}, 1500);
	},
	remindPopus : function(title,conText){
		var div = document.createElement('div');
		div.setAttribute("id",'rp')
		var divTitle = document.createElement('div'); // title
		divTitle.classList.add('divTitle');
		div.appendChild(divTitle);
		divTitle.innerText = title;
		
		var divCon= document.createElement('div'); // con
		divCon.classList.add('divCon');
		div.appendChild(divCon);
		divCon.innerText = conText;
		
		var divBtn = document.createElement('div'); // btn
		divBtn.setAttribute("id",'rp_btn');
		divBtn.classList.add('divBtn');
		div.appendChild(divBtn);
		divBtn.innerText = '确认';
	
		document.getElementsByTagName('body')[0].appendChild(div);
		
		document.getElementById('rp_btn').onclick = function(){
			document.getElementById('rp').remove(0);
		}
		setTimeout(function() {
			document.getElementById('rp').remove(0);
		}, 2000);
	}
};
