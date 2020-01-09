// Button listener to render team page
$(".view-team-btn").on("click", function (event) {
  document.location.href = "/teams"
}
);

// Button listener to render pokemon page
$(".view-pokemon-btn").on("click", function (event) {
  document.location.href = "/pokemon"
}
);

$(".add-team-form").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newTeam = {
    team_name: $("#name").val().trim(),
    devoured: $("#description")
  };

  // Send the POST request.
  $.ajax("/api/teams", {
    type: "POST",
    data: newTeam,
    url: "/api/teams/"
  }).then(
    function () {
      console.log("created new team");
      // Reload the page to get the updated list and clear form
      location.reload();
    }
  );
});