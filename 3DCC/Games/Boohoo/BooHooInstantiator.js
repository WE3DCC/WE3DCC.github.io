// Possible Instantiator component schematic
// Component to change to a sequential color on click.
    AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var SpawnSpaceLocations = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
        lastIndex = (lastIndex + 1) % COLORS.length;
        this.setAttribute('material', 'color', COLORS[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
        });
    }
    })
// random space generator
    AFRAME.registerComponent('random-space', {
        dependencies: ['material'],
        init: function () {
          // Set material component's color property to a random color.
          this.el.setAttribute('material', 'color', getRandomColor());
        }
      });
      function getRandomColor() {
        const letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }