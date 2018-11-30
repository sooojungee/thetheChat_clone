
$('textarea').on('keyup keydown', function () {
  adjustHeight();
});

function adjustHeight() {
  var textEle = $('textarea');
  textEle[0].style.height = 'auto';
  var textEleHeight = textEle.prop('scrollHeight');
  console.log(textEleHeight);
  textEle.css('height', textEleHeight);
};
