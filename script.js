$(document).ready(() => {
  console.log("js ready");
  console.log(navigator.appVersion);
  var Name = "Not known";
  if (navigator.appVersion.indexOf("Win") != -1) Name = "Windows OS";
  if (navigator.appVersion.indexOf("Mac") != -1) Name = "MacOS";
  if (navigator.appVersion.indexOf("X11") != -1) Name = "UNIX OS";
  if (navigator.appVersion.indexOf("Linux") != -1) Name = "Linux OS";
  console.log(Name);

  $("body").append(`<h1>YOU ARE RUNNING ${Name}!!</h1>`);
});
