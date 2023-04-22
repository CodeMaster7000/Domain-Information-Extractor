function url_domain(data) {
  var    a      = document.createElement('a');
         a.href = data;
  return a.hostname;
}
$(function(){
  $("#extract").click(function(){
    $("#domain").html(
      url_domain($("#url").val()));
  })
})
