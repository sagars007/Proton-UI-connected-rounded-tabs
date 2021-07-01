//enable browser to read userChrome.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//Full screen fade faster:
user_pref("full-screen-api.transition-duration.enter", 50 50);
user_pref("full-screen-api.transition-duration.leave", 50 50);

//backspace button to go to previous page:
user_pref("browser.backspace_action", 0);

//compact mode option visible
user_pref("browser.compactmode.show", true);

//pocket disabled
user_pref("extensions.pocket.enabled", false);

//ctrltab cycles through recently used tabs first
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

//remove about:config open warning
user_pref("browser.aboutConfig.showWarning", false);

//security padlock icon switch to green color icon
user_pref("security.secure_connection_icon_color_gray", false);

//disable urlbar open on click - urlbar opens only when start typing
user_pref("browser.urlbar.suggest.topsites", false);
