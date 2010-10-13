window.addEventListener(
  "load",
  function () {
    gBrowser.addEventListener(
      "DOMContentLoaded",
      function (event) {
        var doc = event.originalTarget;

        // don't add binding to frames
        if (doc.defaultView.frameElement) return;

        var styleSheetService = Cc["@mozilla.org/content/style-sheet-service;1"].
            getService(Ci.nsIStyleSheetService);
        var IOService = Cc["@mozilla.org/network/io-service;1"].
            getService(Ci.nsIIOService);
        var flashHackURI = IOService.
            newURI("chrome://mft3k/skin/stylesheets/binding.css", null, null);
        var type = styleSheetService.USER_SHEET;
        styleSheetService.
            loadAndRegisterSheet(flashHackURI, styleSheetService.USER_SHEET);
      },
      false
    );
  },
  false
);
