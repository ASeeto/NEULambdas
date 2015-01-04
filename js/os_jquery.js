// jquery code


DELAY = 0.1;
jQuery.fn.update_form_page = function(form_page_id) {
  this.click(function() {
    $j.post(this, $j("#edit_form_page_" + form_page_id).serialize(), null, "script");
    return false;
  });
  return this;
};

jQuery.fn.update_form_element = function(id) {
  this.click(function() {
    $j.post(this, $j("#edit_form_element_" + id).serialize(), null, "script");
    $j("#form_element_" + id).removeClass('selected');
    $j("#form_element_" + id + " div.forms_selected_properties").hide();
    return false;
  });
  return this;
};

jQuery.fn.update_field = function(to) {
  this.delayedObserver(function() {
    $j(to).html(this.val().gsub('\n','<br />'));
  }, DELAY);
};

jQuery.fn.update_initial = function(to) {
  this.delayedObserver(function() {
    $j(to).val(this.val());
  }, DELAY);
};

jQuery.fn.fill_multiple = function(to,type) {
	out = "";
  choices = this.val().split("\n");
  if(type == 'selection') {
    out += "<select>";
    $j.each(choices, function() {
      out += "<option>" + this + "</option>";
    });
    out += "</select>";
  } else {
    $j.each(choices, function() {
      if(this != '')
        out += "<input type=" + type + " value=\"1\" disabled=\"disabled\"/>&nbsp;&nbsp;<label>" + this + "</label><br />";
    });
	}
	$j(to).html(out);
}

jQuery.fn.update_multiple = function(to, type) {
	this.fill_multiple(to,type);
  this.delayedObserver(function() {
		this.fill_multiple(to,type);
  }, DELAY);
};

jQuery.fn.submitFormWithAjax = function(dom_id) {
  this.click(function() {
    showLoadingTag();
	tinyMCE.triggerSave();
    $j.post(this, $j(dom_id).serialize(), null, "script");
    return false;
  })
  return this;
};

jQuery.fn.update_submission = function() {
  this.click(function() {
    $j.post(this, $j("#form_page_elements").serialize(), null, "script");
    return false;
  });
  return this;
};