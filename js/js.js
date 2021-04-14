window.onload = function(){
	var i = 0;
	var mbox = document.getElementById("menu-box");
	var mbody = document.getElementById("main-body");
	var mbody2 = document.getElementById("main-body2");
	var mbody3 = document.getElementById("main-body3");
	var mbody4 = document.getElementById("main-body4");	
	var hbox = document.getElementById("hidden-area");
	//点击“主菜单”导航抽屉打开和关闭
	document.getElementById("menu-button").onclick = function(){
		if(i%2 == 0){
			mbox.style.display = "none";
			hbox.style.display = "block";
			mbody.style.left = mbody.offsetLeft -180 + 'px';
		}else{
			mbox.style.display = "block";
			hbox.style.display = "none";
			mbody.style.left = mbody.offsetLeft +180 + 'px';
		}
		i++;
	}
	
	var writeBox = document.getElementById("writebox");
	var miniArea = document.getElementsByClassName("mini-area")[0];
	//点击“写邮件”出现写邮件页面
	document.getElementById("writeButton").onclick = function(){
		writeBox.style.display = "block";
	}
	document.getElementById("writeButtonPlus").onclick = function(){
		writeBox.style.display = "block";
	}
	//写邮件页面的关闭
	document.getElementsByClassName("close")[0].onclick = function(){
		writeBox.style.display = "none";
	}
	//写邮件页面的缩小（最小化）
	document.getElementsByClassName("mini")[0].onclick = function(){
		writeBox.style.display = "none";
		miniArea.style.display = "block";
	}
	
	//写邮件最大化、正常、最小化、关闭的切换
	document.getElementsByClassName("max")[0].onclick = function(){
		writeBox.style.display = "none";
		document.getElementsByClassName("mask")[0].style.display = "block";
		document.getElementsByClassName("max-area")[0].style.display = "block";
	}
	document.getElementsByClassName("max_max")[0].onclick = function(){
		writeBox.style.display = "block";
		document.getElementsByClassName("mask")[0].style.display = "none";
		document.getElementsByClassName("max-area")[0].style.display = "none";
	}
	document.getElementsByClassName("max_mini")[0].onclick = function(){
		miniArea.style.display = "block";
		document.getElementsByClassName("mask")[0].style.display = "none";
		document.getElementsByClassName("max-area")[0].style.display = "none";
	}
	document.getElementsByClassName("max_close")[0].onclick = function(){
		document.getElementsByClassName("mask")[0].style.display = "none";
		document.getElementsByClassName("max-area")[0].style.display = "none";
	}
	document.getElementsByClassName("mini_close")[0].onclick = function(){
		miniArea.style.display = "none";
	}
	document.getElementsByClassName("mini_max")[0].onclick = function(){
		miniArea.style.display = "none";
		document.getElementsByClassName("mask")[0].style.display = "block";
		document.getElementsByClassName("max-area")[0].style.display = "block";
	}
	document.getElementsByClassName("mini_mini")[0].onclick = function(){
		writeBox.style.display = "block";
		miniArea.style.display = "none";
		
	}
	
	//字体改变区域的出现
	var j = 0;
	document.getElementsByClassName("change-font")[0].onclick = function(){
		if(j%2 == 0){
			document.getElementsByClassName("change-font_area")[0].style.display = "block";
		}else document.getElementsByClassName("change-font_area")[0].style.display = "none";
		j++;
	}
	
	var k = 0;
	document.getElementsByClassName("font-size-change")[0].onclick = function(){
		if(k%2 == 0){
			document.getElementsByClassName("font-size-choice")[0].style.display = "block";
		}else document.getElementsByClassName("font-size-choice")[0].style.display = "none";
		k++;
	}
	
	//切换页面
	var r = document.getElementsByClassName("menu_opt");
	var b = document.getElementsByClassName("body1");
	r[0].style.backgroundColor = "rgb(240,243,244)";
	r[0].onclick = function(){
		b[1].style.display = "none";
		b[2].style.display = "none";
		b[3].style.display = "none";
		r[1].style.backgroundColor = "white";
		r[2].style.backgroundColor = "white";
		r[3].style.backgroundColor = "white";
		r[0].style.backgroundColor = "rgb(240,243,244)";	
	}
	
	r[1].onclick = function(){
		b[1].style.display = "block";
		b[2].style.display = "none";
		b[3].style.display = "none";
		r[0].style.backgroundColor = "white";
		r[2].style.backgroundColor = "white";
		r[3].style.backgroundColor = "white";
		r[1].style.backgroundColor = "rgb(240,243,244)";
	}

	r[2].onclick = function(){
		b[1].style.display = "none";
		b[3].style.display = "none";
		b[2].style.display = "block";
		r[0].style.backgroundColor = "white";
		r[1].style.backgroundColor = "white";
		r[3].style.backgroundColor = "white";
		r[2].style.backgroundColor = "rgb(240,243,244)";
	}
	
	r[3].onclick = function(){
		b[1].style.display = "none";
		b[2].style.display = "none";
		b[3].style.display = "block";
		r[0].style.backgroundColor = "white";
		r[1].style.backgroundColor = "white";
		r[2].style.backgroundColor = "white";
		r[3].style.backgroundColor = "rgb(240,243,244)";
	}	
	
	//未读/其他邮件的展开和收缩
	var p = 0;
	document.getElementsByClassName("open-icon")[0].onclick = function(){
		if(p%2==0){
			for(var i=0;i<=1;i++){
				document.getElementsByClassName("unread")[i].style.display = "block";
			}
		}else{
			for(var i=0;i<=1;i++){
				document.getElementsByClassName("unread")[i].style.display = "none";
			}
		} 
		p++;
	}
	var q = 0;
	document.getElementsByClassName("open-icon")[1].onclick = function(){
		if(q%2==0){
			for(var i=0;i<=1;i++){
				document.getElementsByClassName("other")[i].style.display = "block";
			}
		}else{
			for(var i=0;i<=1;i++){
				document.getElementsByClassName("other")[i].style.display = "none";
			}
		} 
		q++;
	}
	
	
	//改变字体大小
	var w = document.getElementById("w");
	var s = document.getElementsByClassName("size");
	for(var i=0;i<s.length;i++){
		s[i].idx = i;
		s[i].onclick = function(){
			for(var j=0;j<s.length;j++){
			s[j].style.backgroundColor = "white";
			}
		s[this.idx].style.backgroundColor = "rgb(240,243,244)";
		w.style.fontSize = window.getComputedStyle(s[this.idx]).fontSize;
		}
	}
		var u=0;
		document.getElementsByClassName("star")[0].onclick = function(){
			if(u%2==0){
				document.getElementsByClassName("star")[0].src="../png/星标%20(4).png";
				document.getElementsByClassName("star-letter_tip")[0].style.display="none";
				document.getElementsByClassName("star-letter")[0].style.display="block";
			}else{
				document.getElementsByClassName("star")[0].src="../png/星标%20(2).png";
				document.getElementsByClassName("star-letter")[0].style.display="none";
			}
			u++;
		}
		
		var v=0;
		document.getElementsByClassName("star")[1].onclick = function(){
			if(v%2==0){
				document.getElementsByClassName("star")[1].src="../png/星标%20(4).png";
				document.getElementsByClassName("star-letter_tip")[0].style.display="none";
				document.getElementsByClassName("star-letter")[1].style.display="block";
				
			}else{
				document.getElementsByClassName("star")[1].src="../png/星标%20(2).png";
				document.getElementsByClassName("star-letter")[1].style.display="none";
			}
			v++;
		}
	//写邮件页面的拖拽移动
	var moveArea = document.getElementById("moveArea");
	drag(writeBox);
	function drag(obj){
		moveArea.onmousedown = function(e){
			var oevent = e || event;
			var distanceX = oevent.clientX - writeBox.offsetLeft;
			var distanceY = oevent.clientY - writeBox.offsetTop;
			
			document.onmousemove = function(e){
				var oevent = e || event;
				obj.style.left = oevent.clientX - distanceX + 'px';
				obj.style.top = oevent.clientY - distanceY + 'px';
			}
			
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup = null;
			}
		}
	}


}

