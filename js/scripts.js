
vowels = ['a', 'e', 'i', 'o', ']

$(document).ready(function(){
  $("form#pig-latin").submit(function(event){
    event.preventDefault();

    var finish = function(input1) {
      
      return word;
    };
    
    
    var word = $("input#input1").val();
    var result = finish(word);

  
    $("#result").html(result);

   
  });
});