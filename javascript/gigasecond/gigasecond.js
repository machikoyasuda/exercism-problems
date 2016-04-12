function Gigasecond(dateOfBirth){
  'use strict';

  this.date = function() {
    var gigaSecond = 1000000000000,
        gigaBirthday = new Date(dateOfBirth.getTime() + gigaSecond);
    gigaBirthday.setHours(0, 0, 0, 0);
    return gigaBirthday;
  };

}

module.exports = Gigasecond;
