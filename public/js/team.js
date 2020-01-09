// add new pokemon
$(document).ready(function () {
    // Getting references to the name input and team container, as well as the table body
    var nameInput = $("#team-name");
    var teamList = $("tbody");
    var teamContainer = $(".team-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an team
    $(document).on("submit", "#team-form", handleteamFormSubmit);
    $(document).on("click", ".delete-team", handleDeleteButtonPress);
  
    // Getting the initial list of teams
    getteams();
  
    // A function to handle what happens when the form is submitted to create a new team
    function handleteamFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim()) {
        return;
      }
      // Calling the upsertteam function and passing in the value of the name input
      upsertteam({
        name: nameInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an team. Calls getteams upon completion
    function upsertteam(teamData) {
      $.post("/api/teams", teamData)
        .then(getTeams);
    }
  
    // Function for creating a new list row for teams
    function createteamRow(teamData) {
      var newTr = $("<tr>");
      newTr.data("team", teamData);
      newTr.append("<td>" + teamData.name + "</td>");
      if (teamData.pokemons) {
        newTr.append("<td> " + teamData.pokemons.length + "</td>");
      } else {
        newTr.append("<td>0</td>");
      }
      newTr.append("<td><a href='/pokemon?team_id=" + teamData.id + "'>Go to pokemons</a></td>");
      newTr.append("<td><a href='/index?team_id=" + teamData.id + "'>Create a pokemon</a></td>");
      newTr.append("<td><a style='cursor:pointer;color:red' class='delete-team'>Delete team</a></td>");
      return newTr;
    }
  
    // Function for retrieving teams and getting them ready to be rendered to the page
    function getteams() {
      $.get("/api/teams", function (data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createteamRow(data[i]));
        }
        renderteamList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of teams to the page
    function renderteamList(rows) {
      teamList.children().not(":last").remove();
      teamContainer.children(".alert").remove();
      if (rows.length) {
        $("#error-message").html("");
        $("#teamsTable").css("display", "block");
        console.log(rows);
        teamList.prepend(rows);
      }
      else {
        $("#teamsTable").css("display", "none");
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no teams
    function renderEmpty() {
      var alertDiv = $("<div>");
      $("#error-message").text("You must create a team before you can create a pokemon.");
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("team");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/teams/" + id
      })
        .then(getteams);
    }
  });
  
// create new team

// hover for each pokemon on team

// click for team cumulative 