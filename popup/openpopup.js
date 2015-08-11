// JavaScript Document
//author: Annshuk Sharma
//popup
$.fn.OpenPopUp = function(options){
		var custom = {popupName : null,	overlayId:null,	speed: 500, appendTo: 'body', closeName:null, container: function(){}};
		var set = $.extend({}, custom, options);
			return this.each(function(){
				var overlayId = set.overlayId, popupName=set.popupName;
				//open Modal Window.
				$(this).on('click', function(e){					
					e.preventDefault();
					viewPopUp()
					$('<div/>', {"id": overlayId, 'name':set.overlayId}).appendTo(set.appendTo).show();					
					if(overlayId)					
					$("[name="+popupName+"]").fadeIn(set.speed);							
				});
				//close Modal Window
				$("[rel="+set.closeName+"]").on('click', function(){
					$("[name="+popupName+"]").fadeOut();
					$("[name="+overlayId+"]").remove();
				});
		});
}

var viewPopUp = function(){
	
}