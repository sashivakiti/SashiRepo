// site.js
(function () {

    //Javascript syntax below:
    //--------------------------------------------
    //var ele = getElementById("username");
    //ele.innerHTML("Sashidhar Vakiti");

    //var main = getElementById("main");
    //main.onmouseenter, function () {
    //  main.style = "background-color: #888;";
    //};
    //main.onmouseleave, function () {
    //  main.style = "";
    //};
    //--------------------------------------------
    //or the above can be done using JQuery Selector syntax below:
    //--------------------------------------------
     //var ele = $("#username");
  //ele.text("Sashidhar Vakiti");

  //var main = $("#main");
  //main.on("mouseenter", function () {
  //  main.style = "background-color: #888;";
  //});
  //main.on("mouseleave", function () {
  //  main.style = "";
  //});
    //--------------------------------------------
  //var menuItems = $("ul.menu li a");
  //menuItems.on("click", function () {
  //  var me = $(this);
  //  alert(me.text());
  //});

  var $sidebarAndWrapper = $("#sidebar,#wrapper");

  $("#sidebarToggle").on("click", function () {
    $sidebarAndWrapper.toggleClass("hide-sidebar");
    if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
      $(this).text("Show Sidebar");
    } else {
      $(this).text("Hide Sidebar");
    }
  });
})();