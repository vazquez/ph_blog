//= require "jquery"

$(document).ready(function() {
  console.log( "Section height is: " + $("section").height() + "px");
  $("aside").height(Math.max($("section").height()+300,$("aside").height()));
});
