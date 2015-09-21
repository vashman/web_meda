<script type="text/javascript">

function
page_count(){
var count = get_cookie('page_count')
  if (count == "") {
  set_cookie('page_count', '1', exp)
  return 1
  }
var newcount = parseInt(count) + 1;
set_cookie('page_count',newcount,exp)
return count
}

</script>
