var app = {
	toPage: function(page,title){
		document.title = 'Accessibility Overview: ' + title;
		
		$('#ext').text(': ' + title);
			$.ajax({
				url: page,
				method: 'GET',
				success:function(result){
					$('#content').html(result);
					$("#read").attr('class','button on');
					$("#dys").attr('class','button off');

				},
				complete: function(){
					$('#skiplink').focus();
					
					}
				});
	},
	menu: function(el) {
		$(el)
			.on('click','li',function(){ 
				var page = $(this).attr('data-page');
				page = 'JSRFinalProject/' + page + '/index.html' 
				var title = $(this).attr('data-title')

				app.toPage(page,title);
				//$('#content').html(stuff)
			})
			.keypress(function(e){

				var key = e.keyCode;
				
				var text = $('*:focus').text();
				var currEl = $('*:focus')
				
				switch (key){
					case 13:
					case 32: {
						event.preventDefault();
						event.stopPropagation();
						var page = $(e.target).attr('data-page');
						page = '/' + page + '/index.html' 
						var title = $(e.target).attr('data-title')
						app.toPage(page,title);
						//app.toPage('/adopt_dogs/index.html');
						break;
					}
				} 
			})
			.keydown(function(e){
				var key = e.keyCode;
				if (key == 38 || key == 40){
					var items = [];
					$('li').each(function(){
						var key = this.id;
						items.push(key); 
					});
					var currEl = $('*:focus').attr('id');
					var position = items.indexOf(currEl);
					var limit = items.length;
					switch (key){
						case 38:
							event.preventDefault();
							event.stopPropagation();
							position = position - 1;
							if (position >= 0){
								var newElId = '#' + items[position];
								$(newElId).focus();
							}
							break;
						case 40:
							event.preventDefault();
							event.stopPropagation();
							position = position + 1;
							if (position < limit){
								var newElId = '#' + items[position];
								$(newElId).focus();
							}
							break;	
				} 
			}
		});
	},
	buttonTog: function(el,state1,state2){
		var classes = el.classList;
		var index = 0;
		for (var i = 0; i < classes.length; i++){
			switch(classes[i]){
				case state1:
					index = i;
					break;
				case state2:
					index = i;
					break;
			}
		}
		var origin = el.classList[index];
		var setting = (el.classList[index] == state1) ? state2 : state1;
		el.classList.replace(origin,setting);
		

	},
	read: function(el){
		app.buttonTog(el,"on","off");
		var status = (el.classList[1] == "on") ? ".normal" : ".recommend";
		$(status).toArray().forEach(
			function(currentValue){
				
				app.buttonTog(currentValue,"recommend","normal");
				
			});
		},
	dys: function(el){
		app.buttonTog(el,"on","off");
		var status = (el.classList[1] == "on") ? ".nodys" : ".dys-font";
		$(status).toArray().forEach(
			function(currentValue){
				
				app.buttonTog(currentValue,"nodys","dys-font");
				
			});
	}
}

app.menu('#main-menu-list');
$('button').on('click', function(){
	var func = $(this).attr('data-func');
	app[func](this);
});


	





