// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {

    $(".teams-btn").on("click", function(event) {
        var id = $(this).data("id");
       
        // Send the GET request.
        $.ajax("/api/teams/" + id, {
          type: "GET",
          url: "/api/teams/" + id
        }).then(
          function(result) {
            var teamName = result.team_name
            var teamDescription = result.team_description

            var pokemon1 = result.pokemonid_1
            var pokemon2 = result.pokemonid_2
            var pokemon3 = result.pokemonid_3
            var pokemon4 = result.pokemonid_4
            var pokemon5 = result.pokemonid_5
            var pokemon6 = result.pokemonid_6

            $(".render-team-name").html = teamName + "<br>" + teamDescription
          }
        ).then(function(event) {
            $.ajax("/api/pokemon/" {
                type: "GET",
                url: "/api/pokemon/",
        }).then(
            function(result) {
            
            $(".render-pokemon1-icon-name-type").html = //Pokemon 1 icon, name type
            $(".render-pokemon1-stats").html = //Pokemon 1 stats
            $(".render-pokemon1-icon-name-type").html = //Pokemon 2 icon, name type
            $(".render-pokemon1-stats").html = //Pokemon 2 stats
            $(".render-pokemon1-icon-name-type").html = //Pokemon 3 icon, name type
            $(".render-pokemon1-stats").html = //Pokemon 3 stats
            $(".render-pokemon1-icon-name-type").html = //Pokemon 4 icon, name type
            $(".render-pokemon1-stats").html = //Pokemon 4 stats
            $(".render-pokemon1-icon-name-type").html = //Pokemon 5 icon, name type
            $(".render-pokemon1-stats").html = //Pokemon 5 stats
            $(".render-pokemon1-icon-name-type").html = //Pokemon 6 icon, name type
            $(".render-pokemon1-stats").html = //Pokemon 6 stats

            $(".render-team-status").html = //Team Stats (combined)
            $(".render-delete-team").html = //Delete Team Button (data=teamid)
        
      })
    })

// delete-team (button)
$(".delete-team").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/teams/" + id, {
      type: "DELETE",
      url: "/api/teams/" + id
    }).then(
      function() {
        console.log("TEAM DELETED");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

// view-pokemon button renders pokemon handlebars page
    $(".view-pokemon-btn").on("click", function(event) {
        document.location.href = "/pokemon"
        }
      );
    });