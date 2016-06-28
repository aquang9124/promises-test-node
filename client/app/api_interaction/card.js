( function(angular) {
	angular
		.module('promises')
		.factory('cardFactory', cardFactory);

	function cardFactory($http) {
		var factory = {
			getSingle: function(cardName, resolve, reject) {
				$http.post('/api/single', {cardName: cardName})
					.then(function(result) {
						resolve(result);
					})
					.catch(function(err) {
						reject(err);
					});
			}
		};

		return factory;
	}
} )(angular);