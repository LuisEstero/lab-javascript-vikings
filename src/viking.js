// Soldier
class Soldier {
 
  constructor(health, strength){
    this.health = health;
    this.strength = strength
    }
    attack(){
      return this.strength
    }
    receiveDamage(damage){
      this.health -= damage
    }
}


// Viking
class Viking extends Soldier {
constructor(name, health, strength){ 
  this.name = name;
  super(health,strength) ;
}
attack (){
  return this.strength;
}
receiveDamage(damage){
  this.health -=health;
  if(this.health <= 0 ) {
    console.log( NAME +  "has received DAMAGE points of damage")
  } 
    return (NAME +  "has died in act of combat")
  }

  }
  



// Saxon
class Saxon extends Soldier {

  attack (){
    this.strength = this.strength
  }
  receiveDamage (damage){
    this.health -=health;
    if(saxon >= 0){
      return 'A Saxon has received DAMAGE points of damage';
    } else {
       return "A Saxon has died in combat";

    }
  }
}




// Saxon
class Saxon extends Soldier {

  attack (){
    this.strength = this.strength
  }
  receiveDamage (damage){
    this.health -=health;
    if(saxon >= 0){
      return 'A Saxon has received DAMAGE points of damage';
    } else {
       return "A Saxon has died in combat";

    }
  }
}


// War
class War {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
