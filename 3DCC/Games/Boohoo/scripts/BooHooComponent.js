// Creating a boo character that appears, moves, then disappears
      AFRAME.registerComponent('randomposition', {
        schema: { 
              type: {'vec3' },
        }
        var min = -20;
        var max = 20;
        var ymin = 0;
        var xspot = { type: 'int'};
        var yspot = { type: 'int' };
        var zspot = { type: 'int' };
        
        init: function() {
              
              }
    
        update: function () {
          entity.addEventListener('componentremoved', function (evt) {
            if (evt.detail.name === 'obj') {
              xspot = Math.floor(Math.random() * (max-min) + min);
              yspot = Math.floor(Math.random() * (max-ymin) + ymin);
              zspot = Math.floor(Math.random() * (max-min) + min);
              AFRAME.utils.coordinates.parse("xspot yspot zspot");
            }
          });
          this.el.setAttribute("position", {x:xspot, y:yspot, z:zspot})
        }
      });

      AFRAME.registerComponent('BooHoo', {
        schema: {
          boohooType: {type:"obj"}
          randomposition: {type: "vec3"}
          animationType: {default: anim[0]}
        }


      init: function getRandomHidingSpot () {
              var randomIndex = ;
              var ArraySpots=[];
              var hidingSpot: }
              for (var i = 0; i < 10; i++ ) {
                  ;
              }
              return SpaceNumber;
            }
      
      update: function() {

              // entity.setAttribute('modeltype', {
               // type: 'sphere', // sphere, cube, or triangle
               // animation: "", //raise up, peak left and right, spin 
                
              });
    })

      AFRAME.registerComponent('random-space', {
          dependencies: ['random-space'],
          init: function () {
            // Set material component's color property to a random color.
            this.el.setAttribute('material', 'color', getRandomColor());
          }
          var lastIndex = -1;
          var SpawnSpaceLocations = ['red', 'green', 'blue'];
          this.el.addEventListener('click', function (evt) {
          lastIndex = (lastIndex + 1) % SpawnSpaceLocations.length;
          this.setAttribute('position', );
          });
        });
  update:  
  createBooHoo: function (data) {
    // create boo
    //if user clicks boo, boo spins, team gets point
    //boo deletes after 7 seconds
    return new ComplexObject(data);
  }
  remove: function(){
    this.el.removeObject3D("BooHooVersion")
  }