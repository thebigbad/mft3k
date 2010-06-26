window.addEventListener(
  "load",
  function () {
    gBrowser.addEventListener(
      "DOMContentLoaded",
      function (event) {
        var doc = event.originalTarget;

        // don't add binding to frames
        if (doc.defaultView.frameElement) return;

        var bindingUrl = 'url("chrome://mft3k/content/binding.xml#seats")';
        doc.body.parentNode.style.MozBinding = bindingUrl;
      },
      false
    );
  },
  false
);
