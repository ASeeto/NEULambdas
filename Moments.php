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
<h2>Moments</h2>

<hr />
<a title="" target="_blank" href="#" onclick="window.open('http://neu.orgsync.com/org/neulambdas/Moments','','width=720,height=480,scrollbars=no,resizable=no,location=no,menubar=no,toolbar=no')">Click to view our Photo Albums</a>

<!--<iframe id="iframe" frameborder="0" allowtransparency="true" scrolling="no" src="http://neu.orgsync.com/org/neulambdas/Moments" height="1400px" width="100%" onLoad="autoResize('iframe')"></iframe>-->
<?php require 'FOOTER.php'; ?>