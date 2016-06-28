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