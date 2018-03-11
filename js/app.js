var tell = function(str){
	alert(str)
}

var app = {
	menu: function(el) {
		$(el)
			.on('click','li',function(){ 
				var text = $(this).text(); 
				tell(text);
			})
			.keypress(function(e){

				var key = e.keyCode;
				{debugger}
				var text = $('*:focus').text();
				var currEl = $('*:focus')
				{debugger};
				switch (key){
					case 13:
					case 27: {
						tell(text);
						break;
					}
					case 38:
						alert('up');
						break;
					case 40:
						alert ('down');
						break;	
				} 
			})
			.keydown(function(e){
				var key = e.keyCode;
				{debugger}
				var text = $('*:focus').text();
				var currEl = $('*:focus')
				{debugger};
				switch (key){
					case 13:
					case 27:
						tell(text)
						break
					case 38:
						event.prevetDefault();
						alert('up');
						break;
					case 40:
						alert ('down');
						break;	
				} 
			})
	}
}


app.menu('#main-menu-list');
	





