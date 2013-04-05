//= require "jquery"

$(document).ready(function() {
  
  // Make the sidebar as tall as the section height
  console.log( "Section height is: " + $("section").height() + "px");
  // $("aside").height(Math.max($("section").height()+600,$("aside").height()));
  
  // Find all code tags and add class Prettyprint for code syntax highlighting
  $("code").addClass("prettyprint");
});
