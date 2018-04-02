function Place(place, year, landmark, note){
  this.place=place;
  this.year=year;
  this.landmark=landmark;
  this.note=note;
}


$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var place=$("#new-place").val();
    var year=$("#year").val();
    var landmark=$("#notable-landmark").val();
    var note=$("#additional-note").val();
    var newPlace = new Place(place, year, landmark, note);
    $("#places").prepend("<li>" + newPlace.place + "</li>");
  });
});
