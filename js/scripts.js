function Place(place, year, landmark, note){
  this.place=place;
  this.year=year;
  this.landmark=landmark;
  this.note=note;
}
Place.prototype.landmarkArray = function() {
  return this.landmark.split(", ");
}


$(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var place=$("#new-place").val();
    var year=$("#year").val();
    var landmark=$("#notable-landmark").val();
    var note=$("#additional-note").val();
    var newPlace = new Place(place, year, landmark, note);
    var landmarks = newPlace.landmarkArray();
    $("#places").prepend("<li><span class='place'>" + newPlace.place + "</span></li>");
    $("#new-place").val("");
    $("#year").val("");
    $("#notable-landmark").val("");
    $("#additional-note").val("");

    $(".place").first().click(function(){
      $("#show-info").show();
      $(".location").text(newPlace.place);
      $(".year").text(newPlace.year);
      for (var i = 0; i < landmarks.length; i++) {
        $(".notable-landmark").append("<li>" + landmarks[i] + "</li>");
      }

      $(".additional-note").text(newPlace.note);
    });
  });
});
