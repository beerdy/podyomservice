!function(e){var t;e.filters=t={append:function(t){t=t||{};var l=t.label,i=t.name,n=t.type,s=t.value,a=t.operator,o=t.select_options,d=t.index,c="f["+i+"]["+d+"][v]",p="f["+i+"]["+d+"][o]",r=null,u=null;switch(n){case"boolean":var r='<select class="input-sm form-control" name="'+c+'"><option value="_discard">...</option><option value="true"'+("true"==s?'selected="selected"':"")+">"+RailsAdmin.I18n.t("true")+'</option><option value="false"'+("false"==s?'selected="selected"':"")+">"+RailsAdmin.I18n.t("false")+'</option><option disabled="disabled">---------</option><option '+("_present"==s?'selected="selected"':"")+' value="_present">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_blank"==s?'selected="selected"':"")+' value="_blank"  >'+RailsAdmin.I18n.t("is_blank")+"</option></select>";break;case"date":u='<input size="20" class="date additional-fieldset default input-sm form-control" style="display:'+(a&&"default"!=a?"none":"inline-block")+';" type="text" name="'+c+'[]" value="'+(s[0]||"")+'" /> <input size="20" placeholder="-\u221e" class="date additional-fieldset between input-sm form-control" style="display:'+("between"==a?"inline-block":"none")+';" type="text" name="'+c+'[]" value="'+(s[1]||"")+'" /> <input size="20" placeholder="\u221e" class="date additional-fieldset between input-sm form-control" style="display:'+("between"==a?"inline-block":"none")+';" type="text" name="'+c+'[]" value="'+(s[2]||"")+'" />';case"datetime":case"timestamp":r=r||'<select class="switch-additionnal-fieldsets input-sm form-control" name="'+p+'"><option '+("default"==a?'selected="selected"':"")+' data-additional-fieldset="default" value="default">'+RailsAdmin.I18n.t("date")+"</option><option "+("between"==a?'selected="selected"':"")+' data-additional-fieldset="between" value="between">'+RailsAdmin.I18n.t("between_and_")+"</option><option "+("today"==a?'selected="selected"':"")+' value="today">'+RailsAdmin.I18n.t("today")+"</option><option "+("yesterday"==a?'selected="selected"':"")+' value="yesterday">'+RailsAdmin.I18n.t("yesterday")+"</option><option "+("this_week"==a?'selected="selected"':"")+' value="this_week">'+RailsAdmin.I18n.t("this_week")+"</option><option "+("last_week"==a?'selected="selected"':"")+' value="last_week">'+RailsAdmin.I18n.t("last_week")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==a?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==a?'selected="selected"':"")+' value="_null" >'+RailsAdmin.I18n.t("is_blank")+"</option></select>",u=u||'<input size="25" class="datetime additional-fieldset default input-sm form-control" style="display:'+(a&&"default"!=a?"none":"inline-block")+';" type="text" name="'+c+'[]" value="'+(s[0]||"")+'" /> <input size="25" placeholder="-\u221e" class="datetime additional-fieldset between input-sm form-control" style="display:'+("between"==a?"inline-block":"none")+';" type="text" name="'+c+'[]" value="'+(s[1]||"")+'" /> <input size="25" placeholder="\u221e" class="datetime additional-fieldset between input-sm form-control" style="display:'+("between"==a?"inline-block":"none")+';" type="text" name="'+c+'[]" value="'+(s[2]||"")+'" />';break;case"enum":var m=s instanceof Array;r='<select style="display:'+(m?"none":"inline-block")+'" '+(m?"":'name="'+c+'"')+' data-name="'+c+'" class="select-single input-sm form-control"><option value="_discard">...</option><option '+("_present"==s?'selected="selected"':"")+' value="_present">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_blank"==s?'selected="selected"':"")+' value="_blank">'+RailsAdmin.I18n.t("is_blank")+'</option><option disabled="disabled">---------</option>'+o+'</select><select multiple="multiple" style="display:'+(m?"inline-block":"none")+'" '+(m?'name="'+c+'[]"':"")+' data-name="'+c+'[]" class="select-multiple input-sm form-control">'+o+'</select> <a href="#" class="switch-select"><i class="icon-'+(m?"minus":"plus")+'"></i></a>';break;case"string":case"text":case"belongs_to_association":r='<select class="switch-additionnal-fieldsets input-sm form-control" value="'+a+'" name="'+p+'"><option data-additional-fieldset="additional-fieldset"'+("like"==a?'selected="selected"':"")+' value="like">'+RailsAdmin.I18n.t("contains")+'</option><option data-additional-fieldset="additional-fieldset"'+("is"==a?'selected="selected"':"")+' value="is">'+RailsAdmin.I18n.t("is_exactly")+'</option><option data-additional-fieldset="additional-fieldset"'+("starts_with"==a?'selected="selected"':"")+' value="starts_with">'+RailsAdmin.I18n.t("starts_with")+'</option><option data-additional-fieldset="additional-fieldset"'+("ends_with"==a?'selected="selected"':"")+' value="ends_with">'+RailsAdmin.I18n.t("ends_with")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==a?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==a?'selected="selected"':"")+' value="_null">'+RailsAdmin.I18n.t("is_blank")+"</option></select>",u='<input class="additional-fieldset input-sm form-control" style="display:'+("_blank"==a||"_present"==a?"none":"inline-block")+';" type="text" name="'+c+'" value="'+s+'" /> ';break;case"integer":case"decimal":case"float":r='<select class="switch-additionnal-fieldsets input-sm form-control" name="'+p+'"><option '+("default"==a?'selected="selected"':"")+' data-additional-fieldset="default" value="default">'+RailsAdmin.I18n.t("number")+"</option><option "+("between"==a?'selected="selected"':"")+' data-additional-fieldset="between" value="between">'+RailsAdmin.I18n.t("between_and_")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==a?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==a?'selected="selected"':"")+' value="_null" >'+RailsAdmin.I18n.t("is_blank")+"</option></select>",u='<input class="additional-fieldset default input-sm form-control" style="display:'+(a&&"default"!=a?"none":"inline-block")+';" type="'+n+'" name="'+c+'[]" value="'+(s[0]||"")+'" /> <input placeholder="-\u221e" class="additional-fieldset between input-sm form-control" style="display:'+("between"==a?"inline-block":"none")+';" type="'+n+'" name="'+c+'[]" value="'+(s[1]||"")+'" /> <input placeholder="\u221e" class="additional-fieldset between input-sm form-control" style="display:'+("between"==a?"inline-block":"none")+';" type="'+n+'" name="'+c+'[]" value="'+(s[2]||"")+'" />';break;default:r='<input type="text" class="input-sm form-control" name="'+c+'" value="'+s+'"/> '}var f=e("<p>").addClass("filter form-search").append('<span class="label label-info form-label"><a href="#delete" class="delete"><i class="fa fa-trash-o fa-fw icon-white"></i></a> '+l+"</span>").append("&nbsp;"+r+"&nbsp;"+(u||""));e("#filters_box").append(f),f.find(".date, .datetime").datetimepicker({locale:RailsAdmin.I18n.locale,showTodayButton:!0,format:t.datetimepicker_format}),e("hr.filters_box:hidden").show("slow")}},e(document).on("click","#filters a",function(t){t.preventDefault(),e.filters.append({label:e(this).data("field-label"),name:e(this).data("field-name"),type:e(this).data("field-type"),value:e(this).data("field-value"),operator:e(this).data("field-operator"),select_options:e(this).data("field-options"),index:e.now().toString().slice(6,11),datetimepicker_format:e(this).data("field-datetimepicker-format")})}),e(document).on("click","#filters_box .delete",function(t){t.preventDefault(),form=e(this).parents("form"),e(this).parents(".filter").remove(),!e("#filters_box").children().length&&e("hr.filters_box:visible").hide("slow")}),e(document).on("click","#filters_box .switch-select",function(t){t.preventDefault();var l=e(this).siblings("select:visible"),i=e(this).siblings("select:hidden");i.attr("name",i.data("name")).show("slow"),l.attr("name",null).hide("slow"),e(this).find("i").toggleClass("icon-plus icon-minus")}),e(document).on("change","#filters_box .switch-additionnal-fieldsets",function(){var t=e(this).find("option:selected");(klass=e(t).data("additional-fieldset"))?(e(this).siblings(".additional-fieldset:not(."+klass+")").hide("slow"),e(this).siblings("."+klass).show("slow")):e(this).siblings(".additional-fieldset").hide("slow")})}(jQuery);