// link for under-age users https://www.vote411.org/
// link for voters https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en
// create list for upcoming elections



$(document).ready(function(){

  $("form#ageQ").submit(function(event) {
    var age = $("input:radio[name=age]:checked").val();
    event.preventDefault();

    if (age >= 18) {
      $("#voter").show();
      $("#minor").hide();
    } else {
      $("#voter").hide();
      $("#minor").show();
    }
  });
});
