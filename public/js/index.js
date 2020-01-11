// add team button
$(document).ready(function () {
    var titleInput = $("#title");
    var teamForm = $("#teamForm");
    var teamSelect = $("#team");

    // Adding an event listener for when the form is submitted
  $(teamForm).on("submit", handleFormSubmit);
  // Gets the part of the url that comes after the "?" (which we have if we're updating a pokemon)
  var url = window.location.search;
  var pokemonId;
  var teamId;
  // Sets a flag for whether or not we're updating a pokemon to be false initially
  var updating = false;

// If we have this section in our url, we pull out the pokemon id from the url
  // In '?pokemon_id=1', pokemonId is 1
  if (url.indexOf("?pokemon_id=") !== -1) {
    pokemonId = url.split("=")[1];
    getpokemonData(pokemonId, "pokemon");
  }
  // Otherwise if we have an team_id in our url, preset the team select box to be our team
  else if (url.indexOf("?team_id=") !== -1) {
    teamId = url.split("=")[1];
  }

  // Getting the teams, and their pokemons
  getTeams();

  // A function for handling what happens when the form to create a new pokemon is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the pokemon if we are missing a title, or team
    if (!titleInput.val().trim() || !teamSelect.val()) {
      return;
    }
    // Constructing a newpokemon object to hand to the database
    var newPokemon = {
      title: titleInput
        .val()
        .trim(),
      teamId: teamSelect.val()
    };

    // If we're updating a pokemon run updatepokemon to update a pokemon
    // Otherwise run submitpokemon to create a whole new pokemon
    if (updating) {
      newPokemon.id = pokemonId;
      updatepokemon(newPokemon);
    }
    else {
      submitpokemon(newPokemon);
    }
  }

  // Submits a new pokemon and brings user to pokemon page upon completion
  function submitpokemon(pokemon) {
    $.post("/api/pokemons", pokemon, function () {
      window.location.href = "/pokemon";
    });
  }

  // Gets pokemon data for the current pokemon if we're editing, or if we're adding to an team's existing pokemons
  function getpokemonData(id, type) {
    var queryUrl;
    switch (type) {
      case "pokemon":
        queryUrl = "/api/pokemons/" + id;
        break;
      case "team":
        queryUrl = "/api/teams/" + id;
        break;
      default:
        return;
    }
    $.get(queryUrl, function (data) {
      if (data) {
        console.log(data.teamId || data.id);
        // If this pokemon exists, prefill our cms forms with its data
        titleInput.val(data.title);
        teamId = data.teamId || data.id;
        // If we have a pokemon with this id, set a flag for us to know to update the pokemon
        // when we hit submit
        updating = true;
      }
    });
  }

  // A function to get teams and then render our list of teams
  function getteams() {
    $.get("/api/teams", renderTeamList);
  }
  // Function to either render a list of teams, or if there are none, direct the user to the page
  // to create an team first
  function renderTeamList(data) {
    if (!data.length) {
      window.location.href = "/teams";
    }
    $(".hidden").removeClass("hidden");
    var rowsToAdd = [];
    for (var i = 0; i < data.length; i++) {
      rowsToAdd.push(createteamRow(data[i]));
    }
    teamSelect.empty();
    console.log(rowsToAdd);
    console.log(teamSelect);
    teamSelect.append(rowsToAdd);
    teamSelect.val(teamId);
  }

  // Creates the team options in the dropdown
  function createteamRow(team) {
    var listOption = $("<option>");
    listOption.attr("value", team.id);
    listOption.text(team.name);
    return listOption;
  }

  // Update a given pokemon, bring user to the pokemon page when done
  function updatepokemon(pokemon) {
    $.ajax({
      method: "PUT",
      url: "/api/pokemons",
      data: pokemon
    })
      .then(function () {
        window.location.href = "/pokemon";
      });
  }
});
