window.onload = function(){
	var i = 0;
	var mbox = document.getElementById("menu-box");
	var mbody = document.getElementById("main-body");
	var hbox = document.getElementById("hidden-area");
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
		/*
	hbox.onmouseover = function(){
		hbox.style.display = "none";
		mbox.style.display = "block";
	}
				
	mbox.onmouseleave = function(){
		hbox.style.display = "block";
		mbox.style.display = "none";
	}
	*/
}

