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
        console.log("This is the result", result)
        console.log(result[0].team_name)
        var teamName = result[0].team_name
        $(".render-team-name").empty().append(teamName)

        comHp = []
        comSpeed = []
        comAtk = []
        comDef = []
        comSpA = []
        comSpD = []


        if (typeof result[0] !== "undefined") {
          var pokemon = result[0].pokemon_name
          var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif"
          var hp = result[0].hitpoints
          var speed = result[0].speed
          var atk = result[0].physical_attack
          var def = result[0].physical_defense
          var spatk = result[0].special_attack
          var spdef = result[0].special_defense

          comHp.push(hp)
          comAtk.push(atk)
          comDef.push(def)
          comSpeed.push(speed)
          comSpA.push(spatk)
          comSpD.push(spdef)

          $(".render-pokemon1-icon-name-type").empty().append(pokemon)
          $(".render-pokemon1-icon-name-type").append(`<br><img class="pokemon-sprite" src="${iconURL}"><br>`)
          $(".render-pokemon1-stats").empty().append("HP: " + hp + "<br>Speed: " + speed + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Sp Atk: " + spatk + "<br>Sp Def: " + spdef)
        }

        if (typeof result[1] !== "undefined") {
          var pokemon = result[1].pokemon_name
          var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif"
          var hp = result[1].hitpoints
          var speed = result[1].speed
          var atk = result[1].physical_attack
          var def = result[1].physical_defense
          var spatk = result[1].special_attack
          var spdef = result[1].special_defense

          comHp.push(hp)
          comAtk.push(atk)
          comDef.push(def)
          comSpeed.push(speed)
          comSpA.push(spatk)
          comSpD.push(spdef)

          $(".render-pokemon2-icon-name-type").empty().append(pokemon)
          $(".render-pokemon2-icon-name-type").append(`<br><img class="pokemon-sprite" src="${iconURL}"><br>`)
          $(".render-pokemon2-stats").empty().append("HP: " + hp + "<br>Speed: " + speed + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Sp Atk: " + spatk + "<br>Sp Def: " + spdef)
        }
        if (typeof result[2] !== "undefined") {
          var pokemon = result[2].pokemon_name
          var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif"
          var hp = result[2].hitpoints
          var speed = result[2].speed
          var atk = result[2].physical_attack
          var def = result[2].physical_defense
          var spatk = result[2].special_attack
          var spdef = result[2].special_defense

          comHp.push(hp)
          comAtk.push(atk)
          comDef.push(def)
          comSpeed.push(speed)
          comSpA.push(spatk)
          comSpD.push(spdef)

          $(".render-pokemon3-icon-name-type").empty().append(pokemon)
          $(".render-pokemon3-icon-name-type").append(`<br><img class="pokemon-sprite" src="${iconURL}"><br>`)
          $(".render-pokemon3-stats").empty().append("HP: " + hp + "<br>Speed: " + speed + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Sp Atk: " + spatk + "<br>Sp Def: " + spdef)
        }
        if (typeof result[3] !== "undefined") {
          var pokemon = result[3].pokemon_name
          var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif"
          var hp = result[3].hitpoints
          var speed = result[3].speed
          var atk = result[3].physical_attack
          var def = result[3].physical_defense
          var spatk = result[3].special_attack
          var spdef = result[3].special_defense

          comHp.push(hp)
          comAtk.push(atk)
          comDef.push(def)
          comSpeed.push(speed)
          comSpA.push(spatk)
          comSpD.push(spdef)

          $(".render-pokemon4-icon-name-type").empty().append(pokemon)
          $(".render-pokemon4-icon-name-type").append(`<br><img class="pokemon-sprite" src="${iconURL}"><br>`)
          $(".render-pokemon4-stats").empty().append("HP: " + hp + "<br>Speed: " + speed + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Sp Atk: " + spatk + "<br>Sp Def: " + spdef)
        }
        if (typeof result[4] !== "undefined") {
          var pokemon = result[4].pokemon_name
          var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif"
          var hp = result[4].hitpoints
          var speed = result[4].speed
          var atk = result[4].physical_attack
          var def = result[4].physical_defense
          var spatk = result[4].special_attack
          var spdef = result[4].special_defense

          comHp.push(hp)
          comAtk.push(atk)
          comDef.push(def)
          comSpeed.push(speed)
          comSpA.push(spatk)
          comSpD.push(spdef)
        
          $(".render-pokemon5-icon-name-type").empty().append(pokemon)
          $(".render-pokemon5-icon-name-type").append(`<br><img class="pokemon-sprite" src="${iconURL}"><br>`)
          $(".render-pokemon5-stats").empty().append("HP: " + hp + "<br>Speed: " + speed + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Sp Atk: " + spatk + "<br>Sp Def: " + spdef)
        }
          if (typeof result[5] !== "undefined") {
            var pokemon = result[5].pokemon_name
            var iconURL = "http://img.pokemondb.net/sprites/black-white/anim/normal/" + pokemon.toLowerCase() + ".gif"
            var hp = result[5].hitpoints
            var speed = result[5].speed
            var atk = result[5].physical_attack
            var def = result[5].physical_defense
            var spatk = result[5].special_attack
            var spdef = result[5].special_defense

            comHp.push(hp)
            comAtk.push(atk)
            comDef.push(def)
            comSpeed.push(speed)
            comSpA.push(spatk)
            comSpD.push(spdef)
          
            $(".render-pokemon6-icon-name-type").empty().append(pokemon)
            $(".render-pokemon6-icon-name-type").append(`<br><img class="pokemon-sprite" src="${iconURL}"><br>`)
            $(".render-pokemon6-stats").empty().append("HP: " + hp + "<br>Speed: " + speed + "<br>Attack: " + atk + "<br>Defense: " + def + "<br>Sp Atk: " + spatk + "<br>Sp Def: " + spdef)
          }


          var sumAtk = comAtk.reduce(function (a, b) { return a + b; }, 0);
          var sumDef = comDef.reduce(function (a, b) { return a + b; }, 0);
          var sumSpD = comSpD.reduce(function (a, b) { return a + b; }, 0);
          var sumSpA = comSpA.reduce(function (a, b) { return a + b; }, 0);
          var sumHp = comHp.reduce(function (a, b) { return a + b; }, 0);
          var sumSp = comSpeed.reduce(function (a, b) { return a + b; }, 0);

          $(".render-team-stats").empty().append("Com HP :" + sumHp + "<br>Com Spd: " + sumSp + "<br>Com Atk: " + sumAtk + "<br>Com Def: " + sumDef + "<br>Com SpAtk: " + sumSpA + "<br>Com SpDef: " + sumSpD)
        
          $(".delete-team").attr("data-id", id).show()

        })
  })

  // // delete-team (button)
  $(".delete-team").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
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

  // // view-pokemon button renders pokemon handlebars page
  $(".view-pokemon-btn").on("click", function (event) {
    document.location.href = "/pokemon"
  }
  );

  $(".team-btn3").on("click", function(event) {
    document.location.href = "/add"
    }
  );

});