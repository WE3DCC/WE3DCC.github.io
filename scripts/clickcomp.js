AFRAME.registerComponent('cliccomp', {
  init: function () {
    var COLORS = ['red', 'green', 'blue'];
    href="https://3dccanimation.myportfolio.com/reel"
    this.el.addEventListener('click', function (evt) {
      var randomIndex = Math.floor(Math.random() * COLORS.length);
      this.setAttribute('material', 'color', COLORS[randomIndex]);
      require('aframe');
      require('aframe-href-component');
      require('aframe-event-set-component');
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});