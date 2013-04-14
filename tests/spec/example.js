var human = function() {

  var isBitten = false,
    hasRabies = false,
    setBitten;
  
  setBitten = function(rabies) {
    isBitten = true;
    hasRabies = rabies;
  };

  return {

    setBitten : setBitten

  };

};

var cat = function() {

  var meow,
  biteMe;

  meow = function(level, human) {

    if(level > 4) {
      var hasRabies = false;
      if(level > 10) {
        hasRabies = true;
      }
      biteMe(human, hasRabies);
    }
    return "meow";
  }

  biteMe = function(human, hasRabies) {
    human.setBitten(hasRabies);
  };

  return {

    meow : meow,
    biteMe : biteMe

  }


}