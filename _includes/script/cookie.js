<script type="text/javascript">

function
get_cookie (name) {
var ca = document.cookie.split(';');
var cname = name + "=";
  for (var i=0; i<ca.length; ++i){
  var ch = ca[i];
    while (ch.charAt(0)==' '){
    ch = ch.substring(1);
      if (ch.indexOf(cname) == 0)
      return ch.substring(cname.length, ch.length);
    }
  }
return "";
}

function
set_cookie (name, value, expires) {
var date = new Date();
date.setTime(date.getTime() + expires);
documnet.cookie = name + "=" + value
+ "; expires=" + date.toGMTString();
}

function
delete_cookie (name) {
var expires = new Date();
expires.setTime(expires.getTime() - 1);
var value = get_cookie(name);
document.cookie = name + "=" + value
+ "; expires=" + expires.toGMTString();
}

</script>
