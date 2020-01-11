// add to team
$(document).ready(function () {

    // pokemonContainer holds all of our pokemons
    var pokemonContainer = $(".pokemon-container");
    var pokemonCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handlepokemonDelete);
    $(document).on("click", "button.edit", handlepokemonEdit);
    // Variable to hold our pokemons
    var pokemons;
  
    // The code below handles the case where we want to get pokemons for a specific team\
    // Looks for a query param in the url for team_id
    var url = window.location.search;
    var teamId;
    //looks in the url for teamid
    if (url.indexOf("?team_id=") !== -1) {
      teamId = url.split("=")[1];
      getpokemons(teamId);
    }
    // If there's no teamId we just get all pokemons as usual
    else {
      getpokemons();
    }
  
  
    // This function grabs pokemons from the database and updates the view
    function getpokemons(team) {
      teamId = team || "";
      if (teamId) {
        teamId = "/?team_id=" + teamId;
      }
      $.get("/api/pokemons" + teamId, function (data) {
        console.log("pokemons", data);
        pokemons = data;
        if (!pokemons || !pokemons.length) {
          displayEmpty(team);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete pokemons
    function deletepokemon(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/pokemons/" + id
      })
        .then(function () {
          getpokemons(pokemonCategorySelect.val());
        });
    }
  
    // InitializeRows handles appending all of our constructed pokemon HTML inside pokemonContainer
    function initializeRows() {
      pokemonContainer.empty();
      var pokemonsToAdd = [];
      for (var i = 0; i < pokemons.length; i++) {
        pokemonsToAdd.push(createNewRow(pokemons[i]));
      }
      pokemonContainer.append(pokemonsToAdd);
    }
  
    // This function constructs a pokemon's HTML
    function createNewRow(pokemon) {
  
      var newpokemonRow = $("<div>");
      newpokemonRow.addClass("row");
      newpokemonRow.data("pokemon", pokemon);
  
      var newpokemonCol = $("<div>");
      newpokemonCol.addClass("col-md-3 lead");
      newpokemonCol.text(pokemon.title);
  
      var newteamCol = $("<div>");
      newteamCol.addClass("col-md-3 lead");
      newteamCol.text(pokemon.team.name);
  
      var formattedDate = new Date(pokemon.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
  
      var newDateCol = $("<div>");
      newDateCol.addClass("col-md-4 small");
      newDateCol.html("Added:<br>" + formattedDate);
  
      var newButtonCol = $("<div>");
      newButtonCol.addClass("col-md-2");
  
      var deleteBtn = $("<button>");
      deleteBtn.text("Delete");
      deleteBtn.addClass("delete btn btn-danger");
  
      var editBtn = $("<button>");
      editBtn.text("Edit");
      editBtn.addClass("edit btn btn-info");
  
      newButtonCol.append(editBtn);
      newButtonCol.append(deleteBtn);
  
      newpokemonRow.append(newpokemonCol);
      newpokemonRow.append(newteamCol);
      newpokemonRow.append(newDateCol);
      newpokemonRow.append(newButtonCol);
  
  
      $(".pokemon-container").prepend(newpokemonRow);
  
  
      return newpokemonRow;
    }
  
    // This function figures out which pokemon we want to delete and then calls deletepokemon
    function handlepokemonDelete() {
      var currentpokemon = $(this)
        .parent()
        .parent()
        .data("pokemon");
      deletepokemon(currentpokemon.id);
    }
  
    // This function figures out which pokemon we want to edit and takes it to the appropriate url
    function handlepokemonEdit() {
      var currentpokemon = $(this)
        .parent()
        .parent()
        .data("pokemon");
      window.location.href = "/cms?pokemon_id=" + currentpokemon.id;
    }
  
    // This function displays a message when there are no pokemons
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for team #" + id;
      }
      pokemonContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No pokemons yet" + partial + ", navigate <a href='/cms" + query +
        "'>here</a> in order to get started.");
      pokemonContainer.append(messageH2);
    }
  
  });
//view teams

//pokemon buttons for stats

//dropdown to place on team