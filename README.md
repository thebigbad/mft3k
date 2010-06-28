Mystery Firefox Theater 3000
============

Adds a MST3K row of seats to the bottom of the browser, as a fun demonstration of a technique for overlay pages.

For Development
============

Like they say in the [good book](https://developer.mozilla.org/en/Setting_up_extension_development_environment#Firefox_extension_proxy_file), navigate to:

    ~/.mozilla/firefox/$PROFILE_NAME/extensions

...and create a file named:

    mft3k@borderstylo.com

Inside that file, write the path of this project (making sure it ends in slash).

For Sharing
===========

    make

... and open mft3k.xpi in Firefox
