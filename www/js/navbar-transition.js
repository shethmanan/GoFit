$("#nav-btn").click(function(){
				$("main").toggleClass("active");
				$("main").toggleClass("z-depth-3");
				if($("main").hasClass("active")){
					$("main.active").velocity({
						translateX: "65vw",
						translateY: "10vh",
					},"linear");
				}
				else
				{
					$("main").velocity({
						translateX: "0px",
						translateY: "0px",
						height:"100 vh",
						width:"100 vw"

					},"linear");	
				}
			});
