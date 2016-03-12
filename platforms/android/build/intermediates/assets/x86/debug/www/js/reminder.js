/*----------------------card over ---------------------------------------------------------------*/
		$(document).ready(function(){
			if(localStorage.length !=0 )
			{
				console.log(localStorage.length);

				for (var i = 0; i < localStorage.length; i++) {
					key = localStorage.getItem("notify_"+i);
					value = jQuery.parseJSON(key);
		/*-------------------card ------------------------------------------------*/
		var x='<div class="row">'
							x+='<div class="col s12">'
							x+='<div class="card-small blue darken-2" id="'+value.id+'">'
								x+=	'<div class="row no-margin">'
									x+='<div class="col s4">'
											x+='<i class="large material-icons amber-text center-align">assignment_late</i>'
										x+='</div>'
										x+='<div class="col s8 no-padding no-margin">'
										x+='<div class="row">'
												x+='<div class="col s10">'
													x+='<h5 class="amber-text" style="margin-bottom:0px;">'+value.title+'</h5>'
												x+='</div>'
												x+='<div class="col s2 no-padding right-align">'
													x+='<i class="material-icons deep-orange-text" onclick="removeCard(this)">cancel</i>'
												x+='</div>'
											x+='</div>'
											x+='<div class="row no-margin">'
												x+='<div class="col s12 amber-text">'
													x+='<h5 class="no-margin no-padding">Every : '+value.time+'</h5>'
												x+='</div>'
											x+='</div>'
										x+='</div>'
									x+='</div>'
								x+='</div>'
							x+='</div>'
						x+='</div>';
					$(".d-card").append(x);
				}
			}
			$('.modal-trigger').click(function(){
				removeAttr('main');
				$('#reminder').openModal();
			})
			$('select').material_select();
		});
		$('#submit_remind').on('click',function(){
			closeModal("#reminder");
		});
		var title;
		var time;
		var freq;
		var i=localStorage.length;
		function setNotification(id1, title1, freq) {
      var now = new Date().getTime(),
        first_time = new Date(now + 5 * 1000 * 60);
      cordova.plugins.notification.local.schedule({
        id: id1,
        title: title1,
        at: first_time,
        every: freq
      });
      return true;
    }
		function storeData(){
				title=$("#title_text").val();
				time=$("#time_text").val();
				if(title=="" || time==-1) return false;
				time+=" mins";
				var notify={id:i,title:title,time:time};
				localStorage.setItem("notify_"+i,JSON.stringify(notify));
				setNotification("notify_"+i,title,time);
				return true;
		}
				function closeModal(data)
				{
					$(data).closeModal();
					if(storeData()){

		/*-------------------card ------------------------------------------------ */
		var x='<div class="row">'
							x+='<div class="col s12">'
							x+='<div class="card-small blue darken-2" id="'+i+'">'
								x+=	'<div class="row no-margin">'
									x+='<div class="col s4">'
											x+='<i class="large material-icons amber-text center-align">assignment_late</i>'
										x+='</div>'
										x+='<div class="col s8 no-padding no-margin">'
										x+='<div class="row">'
												x+='<div class="col s10">'
													x+='<h5 class="amber-text" style="margin-bottom:0px;">'+title+'</h5>'
												x+='</div>'
												x+='<div class="col s2 no-padding right-align">'
													x+='<i class="material-icons deep-orange-text" onclick="removeCard(this)">cancel</i>'
												x+='</div>'
											x+='</div>'
											x+='<div class="row no-margin">'
												x+='<div class="col s12 amber-text">'
													x+='<h5 class="no-margin no-padding">Every : '+time+'</h5>'
												x+='</div>'
											x+='</div>'
										x+='</div>'
									x+='</div>'
								x+='</div>'
							x+='</div>'
						x+='</div>';
					$(".d-card").append(x);
					i++;
				}
				return false;
			};
			function removeCard(data)
			{
				var card = $(data).closest("div.card-small");
				var key = "notify_"+card.attr("id");
				removeNotification(key);
				localStorage.removeItem(key);
				card.closest("div.row").remove();
			}
