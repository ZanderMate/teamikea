// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {

  $(".teams-btn").on("click", function (event) {
    var id = $(this).data("id");

    // Send the GET request.
    $.ajax("/api/teams/" + id, {
      type: "GET",
      url: "/api/teams/" + id
    }).then(
      function (result) {
        console.log(result)
        console.log(result[0].team_name)
        var teamName = result[0].team_name
        var teamDescription = result[0].team_description
        //TO DO - Add teamDescription to page somewhere
        $(".render-team-name").empty().append(teamName)

        comAtk = []
        comDef = []

        if (typeof result[0] !== "undefined") {
          var pokemon1 = result[0].pokemon_name
          var atk1 = result[0].physical_attack
          var def1 = result[0].physical_defense
          comAtk.push(atk1)
          comDef.push(def1)
          $(".render-pokemon1-icon-name-type").empty().append(pokemon1)
          $(".render-pokemon1-stats").empty().append("Attack:" + atk1 + "<br>Defense:" + def1)
        }
        if (typeof result[1] !== "undefined") {
          var pokemon2 = result[1].pokemon_name
          var atk2 = result[1].physical_attack
          var def2 = result[1].physical_defense
          comAtk.push(atk2)
          comDef.push(def2)
          $(".render-pokemon2-icon-name-type").empty().append(pokemon2)
          $(".render-pokemon2-stats").empty().append("Attack:" + atk2 + "<br>Defense:" + def2)
        }
        if (typeof result[2] !== "undefined") {
          var pokemon3 = result[2].pokemon_name
          var atk3 = result[2].physical_attack
          var def3 = result[2].physical_defense
          comAtk.push(atk3)
          comDef.push(def3)
          $(".render-pokemon3-icon-name-type").empty().append(pokemon3)
          $(".render-pokemon3-stats").empty().append("Attack:" + atk3+ "<br>Defense:" + def3)
        }
        if (typeof result[3] !== "undefined") {
          var pokemon4 = result[3].pokemon_name
          var atk4 = result[3].physical_attack
          var def4 = result[3].physical_defense
          comAtk.push(atk4)
          comDef.push(def4)
          $(".render-pokemon4-icon-name-type").empty().append(pokemon4)
          $(".render-pokemon4-stats").empty().append("Attack:" + atk4 + "<br>Defense:" + def4)
        }
        if (typeof result[4] !== "undefined") {
          var pokemon5 = result[4].pokemon_name
          var atk5 = result[4].physical_attack
          var def5 = result[4].physical_defense
          comAtk.push(atk5)
          comDef.push(def5)
          $(".render-pokemon5-icon-name-type").empty().append(pokemon5)
          $(".render-pokemon5-stats").empty().append("Attack:" + atk5 + "<br>Defense:" + def5)
        }
        if (typeof result[5] !== "undefined") {
          var pokemon6 = result[5].pokemon_name
          var atk6 = result[5].physical_attack
          var def6 = result[5].physical_defense
          comAtk.push(atk6)
          comDef.push(def6)
          $(".render-pokemon6-icon-name-type").empty().append(pokemon6)
          $(".render-pokemon6-stats").empty().append("Attack:" + atk6 + "<br>Defense:" + def6)
        }

        
        var sumAtk = comAtk.reduce(function(a, b) { return a + b; }, 0);
        var sumDef = comDef.reduce(function(a, b) { return a + b; }, 0);

        $(".render-team-stats").empty().append("comb atk:" + sumAtk + "<br>comb def:" + sumDef)
        // $(".render-delete-team").html = //Delete Team Button (data=teamid)

      })
  })

  // // delete-team (button)
  // $(".delete-team").on("click", function(event) {
  //     var id = $(this).data("id");

  //     // Send the DELETE request.
  //     $.ajax("/api/teams/" + id, {
  //       type: "DELETE",
  //       url: "/api/teams/" + id
  //     }).then(
  //       function() {
  //         console.log("TEAM DELETED");
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });

  // // view-pokemon button renders pokemon handlebars page
  $(".view-pokemon-btn").on("click", function (event) {
    document.location.href = "/pokemon"
  }
  );
});