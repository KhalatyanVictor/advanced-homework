// Airplane TASK:
// Write an Airplane object that initializes name.
// Give airplanes the ability to .takeOff() and .land():
// If a plane takes off, its isFlying property is set to true.
// If a plane lands, its isFlying property is set to false.

const Airplane = {
    __name__: "",
    __isFlying: false,
    
    set name(newName){
        Airplane.__name__ = newName;
    },

    get name(){
        return Airplane.__name__;
    },

    takeOff: function(){
        Airplane.__isFlying = true;
        return `Airplane Name::: ${Airplane.__name__}, isFlying = ${Airplane.__isFlying}`;
    },
    land: function(){   
        Airplane.__isFlying = false;
        return `Airplane Name::: ${Airplane.__name__}, isFlying::: ${Airplane.__isFlying}`;
    },
}

Airplane.name = "Boeing"
console.log(Airplane.takeOff());
