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
                var pokemonName = result.pokemon_name
                var type = result.type_id
                var hp = result.hit_points
                var atk = result.physical_attack
                var def = result.physical_defence
                var spAtk = result.special_attack
                var spDef = result.special_defence
                var spd = result.speed
                var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemonName + ".gif"

                $(".render-pokemon-stats").html = `
                    ${pokemonName}<br>
                    <img class="pokemon-sprite"
                        src="${iconURL}"><br>
                    Type: ${type}
                    Hit Points: ${hp}<br>
                    Attack: ${atk}<br>
                    Defence: ${def}<br>
                    Special Attack: ${spAtk}<br>
                    Special Defence: ${spDef}<br>
                    Speed: ${spd}<br> `

                //RENDERS BUTTON TO ADD TO TEAM
                    $(".render-add-btn").html =
                    `<input type="button" id="choose-team" class="btn add-btn" name="choose-team" data= "${id}"value="ADD TO TEAM" />`

            }
        )
    })

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
