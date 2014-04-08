(function() {
  var RotateChildClass = angular.module('ngRotateChildClass');

  RotateChildClass.directive('rotateChildClass', function() {
    return {
      restrict: 'A',
      scope: {
        dontRotateIf: '='
      },
      link: function(scope, element, attrs) {
        var rotateEvery = parseInt(attrs.rotateEvery, 10),
            children = element.children(),
            index = 0;

        var interval = setInterval(rotateClass, rotateEvery);
        rotateClass();

        function rotateClass() {
          children.each(function(i, c) {
            if(index != i) {
              c.classList.remove(attrs.rotateChildClass);
            } else {
              c.classList.add(attrs.rotateChildClass);
            }
          });
          index == children.length - 1 ? index = 0 : index++;
        }

        function stopRotate() {
          clearInterval(interval);
          interval = undefined;
        }

        scope.$watch('dontRotateIf', function(dontRotate) {
          if(dontRotate) stopRotate();
          else if(!interval)
            interval = setInterval(rotateClass, rotateEvery);
        });

        scope.$on('$destroy', stopRotate);
      }
    };
  });
})();
