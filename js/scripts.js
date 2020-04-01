
var vowels = ['a', 'e', 'i', 'o', 'u']
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];



var finish = function(word) {
  var firstLetter = word.charAt(0); 
  console.log(firstLetter)
  // loop through vowels array and see if your char matches
  // loop through consonant array and see if your char matches
  var n = vowels.indexOf(firstLetter);
  console.log(n)
  if (n === 0) {
    return (word + " way");
  } else { 
    return (word + " not working")
  }
};
console.log(vowels)

// for(var i = 0; i < vowels.length; i++){
//   console.log(vowels[i]);
  for(var j = 0; j < consonants.length; j++){
    console.log(consonants[j]);
  //   console.log(vowels[i]);
  //   console.log(consonants[j] + vowels[i])
  // }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match

$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    var word = $("input#input1").val();
    var result = finish(word);
 
  
    $("#result").html(result);   
  });
});