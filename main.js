$(document).ready(function(){
  $('.buttons').click(function(){
    var valueOfSearch = $('.search-input input').val();
    $(location).attr('href', 'file:///Users/Alisher778/Desktop/Web-Dev/examples/lesson_02/search.html#');

     
  });
  $('.searchInput').val(valueOfSearch);
});