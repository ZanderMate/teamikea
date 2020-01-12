// Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function () {

    $(".pokemon-btn").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id)
        console.log("You clicked!")
        // Send the GET request.
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
                console.log("ICON: ", iconURL);

                $("#render-pokemon-stats")
                    .empty()
                    .append(`
                    ${pokemonName}<br>
                    <img class="pokemon-sprite"
                        src="${iconURL}"><br>
                    Type: ${type}<br>
                    Hit Points: ${hp}<br>
                    Attack: ${atk}<br>
                    Defence: ${def}<br>
                    Special Attack: ${spAtk}<br>
                    Special Defence: ${spDef}<br>
                    Speed: ${spd}<br> `)//end append

                //RENDERS BUTTON TO ADD TO TEAM
                    $(".render-add-btn").html =
                    `<input type="button" id="choose-team" class="btn add-btn" name="choose-team" data= "${id}"value="ADD TO TEAM" />`

            }
        )//end .then ajax call
    })//on click function

})

    //Button Listener to add pokemon to team (PUT REQUEST)
    // $(".add-btn").on("click", function(event) {
    //     var id = $(this).data("id");
    // var newPokemon = {
    //     pokemon_id = id
    //   };
    //   $.ajax("/api/teams/" + id, {
    //     type: "PUT",
    //     data: newPokemon,
    //     url: "/api/teams/" + id
    //   }).then(
    //     function() {
    //       console.log("Pokemon has been added to the team");
    //       location.reload();
    //     }
    //   );
    // });
    //     }
    //   );
    // Button listener to render team page
    // $(".view-team-btn").on("click", function(event) {
    //     document.location.href = "/add"
    //     }
    //   );
