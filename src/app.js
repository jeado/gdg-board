/**
 * board Module
 *
 * Description
 */
angular.module('board', []).
	controller("appCtrl",function($scope) {
		var postList = [
			{ 
				title: "Grunt를 배워보자1",
				content : "이번 시간에 Grunt를 배우면서 자바스크립트 빌드 시스템에 대하여 알아봅니다.",
				speaker: "고재도"
			},
			{ 
				title: "Grunt를 배워보자2",
				content : "이번 시간에 Grunt를 배우면서 자바스크립트 빌드 시스템에 대하여 알아봅니다.",
				speaker: "고재도"
			},
			{ 
				title: "Grunt를 배워보자3",
				content : "이번 시간에 Grunt를 배우면서 자바스크립트 빌드 시스템에 대하여 알아봅니다.",
				speaker: "고재도"
			}
		];

		$scope.postList = postList;

	}).directive('post', [function(){
		// Runs during compile
		return {
			// name: '',
			// priority: 1,
			// terminal: true,
			scope: {
				post:"="
			}, // {} = isolate, true = child, false/undefined = no change
			controller: function($scope, $element, $attrs) {
				$scope.popup = function() {

				};
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
			template: "<div class='post' ng-click=''> \
				<div class='cancel'></div> \
				<div class='title'>{{post.title}}</div> \
				<div class='speaker'>{{post.speaker}}</div> \
			</div>",
			// templateUrl: '',
			// replace: true,
			// transclude: true,
			// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
			link: function($scope, iElm, iAttrs, controller) {
				// console.log($scope.post)
				// iElm.
			}
		};
	}]);
