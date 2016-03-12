$("#nav-btn").click(function(){
				$("main").toggleClass("active");
				$("main").toggleClass("z-depth-3");
				if($("main").hasClass("active")){
					$("main.active").velocity({
						translateX: "65vw",
						translateY: "0vh",
					},{easing:"linear"});
				}
				else
				{
					$("main").velocity({
						translateX: "0px",
						translateY: "0px",
					},{easing:"linear"});	
				}
			});
function removeAttr(data){
		var x = document.getElementById(data);
		if(x.hasAttribute("style")){
			x.removeAttribute("style");
		}
	}