const OPEN_NAV_BUTTON = document.getElementById('open-nav-menu'),
      CLOSE_NAV_BUTTON = document.getElementById('close-nav-menu'),
      NAV_MENU = document.getElementById('nav-flyout'),
      OPEN_CLASS = "nav__flyout--is-open",
      VISIBLE_CLASS= "nav__flyout--is-visible";


CLOSE_NAV_BUTTON.addEventListener("click", function(e) {
  //document.body.classList.remove(nav_open_class);
  NAV_MENU.classList.remove(OPEN_CLASS);
  OPEN_NAV_BUTTON.focus();
});

OPEN_NAV_BUTTON.addEventListener("click", function(e) {
  //document.body.classList.add(nav_open_class);
  NAV_MENU.classList.add(OPEN_CLASS);
  CLOSE_NAV_BUTTON.focus();

  setTimeout(function(){
    //overlay.classList.add(visible_class);
  }, 100);

  trapFocus(NAV_MENU);

});
