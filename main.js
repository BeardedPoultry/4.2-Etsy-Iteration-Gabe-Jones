(function(){
	'use strict';
	
	var url = ""
	
	fetchJSONP(url, function(data) {
		var products= data.results;
		console.log(products);
		var categories = extractCategories(products);
		listCategories(categories);
	});
	
	function listCategories(categories) {
		_.each(categories), function(cat)
		console.log(cat);
	});
	
}

	function extractCategories(products) {
		return _.chain(products
		.map(function(item){
			return item.category_path;
		})
		.flatten()
		.uniq()
		.value();
	}
	
	function fetchJSONP(url, callback) {}
})();