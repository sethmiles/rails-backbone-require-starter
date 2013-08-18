requirejs.config({
	
	paths:{
		'text': 'vendors/text',
		'backbone': 'vendors/backbone',
		'underscore': 'vendors/underscore',
		'jquery': 'vendors/jquery',
		'moment': 'vendors/moment',
		'jquery.customSelect': 'vendors/customSelect',
		'jquery.masonry': 'vendors/masonry',
	},

	shim:{
		
		'jquery':{
			exports: '$',
			init: function(something){
				
			}
		},

		'underscore':{
			exports: '_',
			init: function(){
				var underscore = window._
				underscore.templateSettings = {
					interpolate : /\{\{([\s\S]+?)\}\}/g,
					evaluate: /\<\@(.+?)\@\>/gim
				};
				
			}
		},

		'backbone':{
			deps:['underscore','jquery'],
			exports: 'Backbone',
			init: function(){
				var backbone = window.Backbone;
				
			}
		},

		'moment':{
			exports: 'moment',
			init: function(){
				var moment = window.moment;
				delete window.moment;
			}
		},
		
		'jquery.customSelect': {
            deps: ['jquery'],
            exports: 'jQuery.fn.customSelect',
            init: function(){
				
			}
        },
        
        'jquery.masonry': {
            deps: ['jquery'],
            exports: 'jQuery.fn.masonry',
            init: function(){
				
			}
        },
	}
});

require(['appController'], function(AppController){
	var ac = AppController();
});