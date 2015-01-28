(function(angular) {
	"use strict";

	angular.module("app").directive("quantityIndicator", function() {
		return {
			template: "<div class='quantityIndicator'><div class='ratio'></div></div>",
			restrict: "EA", // required just for <= 1.2
			link: function($scope, $element, $attrs) {
				var fill = $element.find(".ratio"); // full jQuery required to find elements by class name
				$scope.$watch($attrs.value, function() {
					var maxValue = $scope.$eval($attrs.maxValue);
					var value = $scope.$eval($attrs.value);
					
					var ratio;
					if (maxValue <= value) {
						ratio = 1;
					} else {
						ratio = value / maxValue;
					}

					ratio = ratio * 100 + "%";
					fill.css("width", ratio);
				});
			}
		};
	});
	
}(window.angular));