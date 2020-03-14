'use strict';

(function () {
  window.sort = {
    discussed: function (array) {
      var sortedArray = array.slice();
      sortedArray.sort(function (a, b) {
        return b.comments.length - a.comments.length;
      });
      return sortedArray;
    },
    random: function (array) {
      var randomArray = array.slice();
      randomArray.sort(function () {
        return Math.random() - 0.5;
      });
      return randomArray;
    }
  };
})();
