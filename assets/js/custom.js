// Disable right click (https://www.w3docs.com/snippets/javascript/how-to-disable-text-selection-copy-cut-paste-and-right-click-on-a-web-page.html)

src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.0/jquery.min.js"
$(document).ready(function() {
  $("body").on("contextmenu", function(e) {
      return false;
    });
});

// Copy to Clipboard functionality added by me / Mak / Mayank. 
// Source - https://stackoverflow.com/questions/49236100/copy-text-from-span-to-clipboard 
// This function will work only for one text element per page, because it uses id. If you want to add more than one copy to clipboard buttons on a page then you will have to add similar functions with different ids (or do some R&D and find a method that uses class, rather than id)
document.getElementById("cp_btn").addEventListener("click", makCopyToClipboard);

function makCopyToClipboard() {

    var copyText = document.getElementById("cp_spn");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}