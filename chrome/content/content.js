new function () {
  var css = "chrome://mft3k/skin/stylesheets/binding.css";

  // See: https://developer.mozilla.org/en/Using_the_Stylesheet_Service
  var styleSheetService = Cc["@mozilla.org/content/style-sheet-service;1"].
      getService(Ci.nsIStyleSheetService);
  var ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);
  var sheet = ios.newURI(css, null, null);
  var type = styleSheetService.USER_SHEET;
  styleSheetService.loadAndRegisterSheet(sheet, type);
}
