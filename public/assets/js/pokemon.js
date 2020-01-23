$(function () {

  $(".pokemon-btn").on("click", function (event) {
    var id = $(this).data("id");
    console.log(id)
    console.log("You clicked!")
    // Send the GET request
    $.ajax("/api/pokemon/" + id, {
      type: "GET",
      url: "/api/pokemon/" + id
    }).then(
      function (result) {
        console.log("result: ", result);
        var pokemonName = result[0].pokemon_name;
        console.log("This the pokemon_name: ", pokemonName);
        var type = result[0].type_name;
        var hp = result[0].hitpoints;
        var atk = result[0].physical_attack;
        var def = result[0].physical_defense;
        var spAtk = result[0].special_attack;
        var spDef = result[0].special_defense;
        var spd = result[0].speed;
        var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemonName.toLowerCase() + ".gif"

        $("#render-pokemon-stats")
          .empty()
          .append(`
                    <b>${pokemonName}</b><br>
                    <img class="pokemon-sprite"
                        src="${iconURL}"><br>
                    Type: ${type}<br>
                    Hit Points: ${hp}<br>
                    Attack: ${atk}<br>
                    Defence: ${def}<br>
                    Special Attack: ${spAtk}<br>
                    Special Defence: ${spDef}<br>
                    Speed: ${spd}<br>`) //end append

        $(".team-selection").removeClass("hidden")

        $("#render-add-btn")
          .empty()
          .append(`
                    <br>
                    <input type="button" id="choose-team" class="btn add-btn" name="choose-team" data-id=${id} value="ADD TO TEAM"/>`)
      }) //end .then ajax call
  }) //end on click function


  $("#render-add-btn").click(function (event) {
    event.preventDefault();
    let pokemonID = $(this).children("input").data("id");
    let e = $(".team-selection");
    console.log(e[0].options[e[0].options.selectedIndex].value);
    let teamID = e[0].options[e[0].options.selectedIndex].value;
    let teamArray = {
      pokemon_id: pokemonID,
      team_id: teamID
    };
    console.log(teamArray);
    $.ajax("/api/team-members/", {
      type: "POST",
      data: teamArray,
      url: "/api/team-members/"
    }).then(
      function () {
        console.log("Pokemon has been added to the team");
        location.reload();
      }
    );
  });


  $(".view-team-btn2").on("click", function (event) {
    document.location.href = "/teams"
  }
  );
})
