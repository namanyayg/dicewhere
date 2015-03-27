const SIZE = 8192;

function getPhrase ( words ) {
  var phrase = '';

  for ( var i = 0; i < words; i++ ) {
    phrase += wordlist[Math.floor(Math.random() * SIZE)] + ' ';
  }

  return phrase;
}

function printPhrase ( words ) {
  var phrase = getPhrase(words);
  $('.passphrase').text(phrase);
}

$(function() {
  var words;

  $('.words').on('input', function() {
    words = parseFloat($(this).val()) || 5;
    if ( words < 5 ) {
      $('.warning').slideDown();
    } else {
      $('.warning').slideUp();
    }
    printPhrase(words);
  });

  printPhrase(5);
});