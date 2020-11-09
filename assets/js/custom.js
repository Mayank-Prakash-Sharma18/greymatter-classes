// Disable right click (https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page.html)

src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js"
$(document).ready(function() {
  $("body").on("contextmenu", function(e) {
      return false;
    });
});