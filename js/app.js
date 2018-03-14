var tell = function(str){
	alert(str)
}


var app = {

	toPage: function(page,title){
		document.title = 'Accessibility Overview: ' + title;
		$.ajax({
			url: page,
			method: 'GET',
			success:function(result){
				$('#content').html(result)
			},
			complete: function(){
				$('#main-h1').focus();
			}

});
			
		
	},
	menu: function(el) {
		$(el)
			.on('click','li',function(){ 
				var page = $(this).attr('data-page');
				page = '/' + page + '/index.html' 
				var title = $(this).attr('data-title')

				app.toPage(page,title);
				//$('#content').html(stuff)
			})
			.keypress(function(e){

				var key = e.keyCode;
				{debugger}
				var text = $('*:focus').text();
				var currEl = $('*:focus')
				{debugger};
				switch (key){
					case 13:
					case 32: {
						event.preventDefault();
						event.stopPropagation();
						var page = $(this).attr('data-page');
						page = '/' + page + '/index.html' 
						var title = $(this).attr('data-title')
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
	}
}

app.menu('#main-menu-list');


	





