var tell = function(str){
	alert(str)
}

var app = {
	toPage: function(page){
		document.title = 'Accessibility Overview: ' + page;
		{debugger}
		$('#content').html('<h1 id="main-h1">' + page + '</h1>')
		$('#main-h1').focus();
		$
	},
	menu: function(el) {
		$(el)
			.on('click','li',function(){ 
				var text = $(this).text(); 
				app.toPage(text);
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
						app.toPage(text);
						break;
					}
				} 
			})
			.keydown(function(e){
				var items = [];
				$('li').each(function(){
					var key = this.id;
					items.push(key); 
					{debugger};
				});
				var key = e.keyCode;
				{debugger}
				var currEl = $('*:focus');
				var position = currEl.index();
				var limit = items.length;
				{debugger};
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
			})
	}
};


app.menu('#main-menu-list');


	





