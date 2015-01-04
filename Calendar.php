<?php require 'META HEAD.php'; ?>
<?php require 'HEADER.php'; ?>
<script language="JavaScript">
function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).style.height= (newheight) + "px";
    document.getElementById(id).style.width= (newwidth) + "px";
}
</script>
<iframe id="iframe" frameborder="0" allowtransparency="true" scrolling="no" src="http://neu.orgsync.com/org/neulambdas/Calendar" height="1000px" width="100%" onLoad="autoResize('iframe')"></iframe>
<?php require 'FOOTER.php'; ?>