//System to create gameplay boos, desttoy, and instantiate boos for a gameplay of 3 minutes
//then adds points to the groups total score
AFRAME.registerSystem("BooHooInstantiator", {
    schema: 
    init: function () {
        var CurrentBoo = ;
        this.el.setObject3D('camera', camera);
      },
    update: