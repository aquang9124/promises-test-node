( function(angular) {
	angular
		.module('promises', []);
		
} )(angular);
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
( function(angular) {
	angular
		.module('promises')
		.controller('cardsCtrl', cardsCtrl);

	function cardsCtrl($scope, cardFactory) {
		$scope.singleCard;
		$scope.getSingle = getSingle;

		// function implementations
		function getSingle() {
			cardFactory.getSingle($scope.cardName, function(res) {
				$scope.singleCard = res;
			}, function(err) {
				console.log(err);
			});
		}
	}

} )(angular);