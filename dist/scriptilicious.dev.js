"use strict";

//Making the html disappear
$('#html').click(function () {
  $('#first').toggle("swing");
}); //Making the css disappear

$('#css').click(function () {
  $('#second').toggle("swing");
}); //Making the js disappear

$('#js').click(function () {
  $('#third').toggle("swing");
}); //Making the output disappear

$('#output').click(function () {
  $('#fourth').toggle("swing");
}); //function to add css js and html in the iframe

function output() {
  $('#fourth').contents().find('html').html('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style type="text/css" rel="stylesheet">' + $("#second").val() + '</style></head><body>' + $("#first").val() + '</body></html>');
  document.getElementById('fourth').contentWindow.eval($('#third').val());
} //updating output when interacted with html


$('#first').on('change keyup  focus paste', function () {
  output();
}); //updating output when interacted with css

$('#second').on('change keyup  focus paste', function () {
  output();
}); //updating output when interacted with js

$('#third').on('change keyup focus paste', function () {
  output();
}); //updating output when page is loaded for the first time for the default code to be displayed

window.onload = function () {
  output();
};