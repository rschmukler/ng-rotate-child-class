# ng-rotate-child-class

Rotate a class (e.g. `active` on child elements)... Useful for things like sliders.


## Installation

Either copy paste or use component. Then, require the module as a dependency of your app.

```js
var app = angular.module('myApp, ['ngRotateChildClass']);
```

## Example

```html
<div id="mySlider" rotate-child-class="active" rotate-every="3000" dont-rotate-if="rotationPaused">
  <div id="mySlider-slide1" class="slide">
    ...
  </div>
  <div id="mySlider-slide2" class="slide">
    ...
  </div>
  <div id="mySlider-slide3" class="slide">
    ...
  </div>
</div>
```

```css
#mySlider > .slide {
  display: none
}

#mySlider > .slide.active {
  display: block
}
```

## Available directive Options


#### rotate-child-class <class>

The class name to rotate


#### rotate-every <interval>

How often to switch the classes. This should be a `Number` of milliseconds.

#### dont-rotate-if <boolean>

Pause rotation if certain thing is happening.
