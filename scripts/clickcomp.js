AFRAME.registerComponent('cliccomp', {
  init: function () {
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      require('aframe');
      require('aframe-href-component');
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});