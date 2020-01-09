// Make sure we wait to attach our handlers until the DOM is fully loaded.
// Button listener to render team page
$(function() {
    $(".team-btn").on("click", function(event) {
        document.location.href = "/teams"
        }
      );
    });