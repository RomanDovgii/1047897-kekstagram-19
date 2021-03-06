'use strict';

(function () {
  var BIG_PICTURE = document.querySelector('.big-picture');
  var BIG_PICTURE_COMMENTS_MORE = BIG_PICTURE.querySelector('.social__comments-loader');
  var BIG_PICTURE_DISPLAYED_COMMENTS = BIG_PICTURE.querySelector('.comments-displayed');
  var SOCIAL_COMMENTS = BIG_PICTURE.querySelector('.social__comments');
  var SOCIAL_COMMENT_TEMPLATE = SOCIAL_COMMENTS.querySelector('.social__comment');

  window.comments = {
    add: function (comments, counter, maxRender) {

      if (maxRender > comments.length) {
        maxRender = comments.length;
        BIG_PICTURE_COMMENTS_MORE.classList.add('hidden');
      }

      BIG_PICTURE_DISPLAYED_COMMENTS.textContent = maxRender;

      for (var i = counter; i < maxRender; i++) {
        var socialComment = SOCIAL_COMMENT_TEMPLATE.cloneNode(true);
        socialComment.querySelector('.social__picture').src = comments[i].avatar;
        socialComment.querySelector('.social__picture').alt = comments[i].name;
        socialComment.querySelector('.social__text').textContent = comments[i].message;
        SOCIAL_COMMENTS.append(socialComment);
      }
    }
  };
})();
