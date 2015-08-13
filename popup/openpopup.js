// JavaScript Document
$.fn.OpenPopUp = function(options){
		var custom = {popupName : null,	overlayId:null,	speed: 500, appendTo: 'body', closeName:null, container: {id:null, header:null, article:null, button:null}
		},
			set = $.extend({}, custom, options);
			return this.each(function(){
				var overlayId = set.overlayId, popupName=set.popupName;
				//open Modal Window.
				$(this).on('click', function(e){					
					e.preventDefault();
					$('<div/>', {"id": overlayId, 'name':set.overlayId}).appendTo(set.appendTo).show();					
					if(overlayId){		
						viewPopUp(set)			
						$("[name="+popupName+"]").fadeIn(set.speed);						
					}
				});
				//close Modal Window
				$(document.body).on('click',"[rel="+set.closeName+"]", function(){
					$("[name="+popupName+"]").remove();
					$("[name="+overlayId+"]").remove();
				});
		});
}

var viewPopUp = function(s){
			var content = '<div class="popup-container" name="popup"><header class="header"><h3>'+s.container.header+'</h3><input type="button" class="close" value="Stop Accquire X" rel="close"/></header>'
			content += '<article><p>'+s.container.article+'</p></article><footer><input type="button" value="Cancel" id="cancel" rel="close" /></footer></div>';
			$(s.container.id).html(content)
		}