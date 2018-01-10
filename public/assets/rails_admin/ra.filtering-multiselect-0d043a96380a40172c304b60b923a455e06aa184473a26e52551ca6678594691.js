!function(e){e.widget("ra.filteringMultiselect",{_cache:{},options:{createQuery:function(e){return{query:e}},sortable:!1,removable:!0,regional:{up:"Up",down:"Down",add:"Add",chooseAll:"Choose all",chosen:"Chosen records",clearAll:"Clear all",remove:"Remove"},searchDelay:400,remote_source:null,xhr:!1},_create:function(){this._cache={},this._build(),this._buildCache(),this._bindEvents()},_build:function(){var t;this.wrapper=e('<div class="ra-multiselect">'),this.wrapper.insertAfter(this.element),this.header=e('<div class="ra-multiselect-header ui-helper-clearfix">'),this.filter=e('<input type="search" placeholder="'+this.options.regional.search+'" class="form-control ra-multiselect-search"/>'),this.header.append(this.filter),this.wrapper.append(this.header),this.columns={left:e('<div class="ra-multiselect-column ra-multiselect-left">'),center:e('<div class="ra-multiselect-column ra-multiselect-center">'),right:e('<div class="ra-multiselect-column ra-multiselect-right">')};for(t in this.columns)this.columns.hasOwnProperty(t)&&this.wrapper.append(this.columns[t]);this.collection=e('<select multiple="multiple"></select>'),this.collection.addClass("form-control ra-multiselect-collection"),this.addAll=e('<a href="#" class="ra-multiselect-item-add-all"><span class="ui-icon ui-icon-circle-triangle-e"></span>'+this.options.regional.chooseAll+"</a>"),this.columns.left.html(this.collection).append(this.addAll),this.collection.wrap('<div class="wrapper"/>'),this.add=e('<a href="#" class="ui-icon ui-icon-circle-triangle-e ra-multiselect-item-add">'+this.options.regional.add+"</a>"),this.columns.center.append(this.add),this.options.removable&&(this.remove=e('<a href="#" class="ui-icon ui-icon-circle-triangle-w ra-multiselect-item-remove">'+this.options.regional.remove+"</a>"),this.columns.center.append(this.remove)),this.options.sortable&&(this.up=e('<a href="#" class="ui-icon ui-icon-circle-triangle-n ra-multiselect-item-up">'+this.options.regional.up+"</a>"),this.down=e('<a href="#" class="ui-icon ui-icon-circle-triangle-s ra-multiselect-item-down">'+this.options.regional.down+"</a>"),this.columns.center.append(this.up).append(this.down)),this.selection=e('<select class="form-control ra-multiselect-selection" multiple="multiple"></select>'),this.columns.right.append(this.selection),this.options.removable&&(this.removeAll=e('<a href="#" class="ra-multiselect-item-remove-all"><span class="ui-icon ui-icon-circle-triangle-w"></span>'+this.options.regional.clearAll+"</a>"),this.columns.right.append(this.removeAll)),this.selection.wrap('<div class="wrapper"/>'),this.element.css({display:"none"}),this.tooManyObjectsPlaceholder=e('<option disabled="disabled" />').text(RailsAdmin.I18n.t("too_many_objects")),this.noObjectsPlaceholder=e('<option disabled="disabled" />').text(RailsAdmin.I18n.t("no_objects")),this.options.xhr&&this.collection.append(this.tooManyObjectsPlaceholder)},_bindEvents:function(){var t=this;this.addAll.click(function(i){t._select(e("option",t.collection)),i.preventDefault(),t.selection.trigger("change")}),this.add.click(function(i){t._select(e(":selected",t.collection)),i.preventDefault(),t.selection.trigger("change")}),this.options.removable&&(this.removeAll.click(function(i){t._deSelect(e("option",t.selection)),i.preventDefault(),t.selection.trigger("change")}),this.remove.click(function(i){t._deSelect(e(":selected",t.selection)),i.preventDefault(),t.selection.trigger("change")}));var i=null;this.options.sortable&&(this.up.click(function(i){t._move("up",e(":selected",t.selection)),i.preventDefault()}),this.down.click(function(i){t._move("down",e(":selected",t.selection)),i.preventDefault()})),this.filter.bind("keyup click",function(){i&&clearTimeout(i),i=setTimeout(function(){t._queryFilter(t.filter.val())},t.options.searchDelay)})},_queryFilter:function(t){var i=this;i._query(t,function(t){var l,n=[];for(l in t)t.hasOwnProperty(l)&&!i.selected(t[l].id)&&n.push(l);if(n.length>0){i.collection.html("");for(l in n)i.collection.append(e("<option></option>").attr("value",t[n[l]].id).attr("title",t[n[l]].label).text(t[n[l]].label))}else i.collection.html(i.noObjectsPlaceholder)})},_buildCache:function(){var t=this;this.element.find("option").each(function(i,l){l.selected?(t._cache["o_"+l.value]={id:l.value,value:l.innerHTML},e(l).clone().appendTo(t.selection).attr("selected",!1).attr("title",e(l).text())):(t._cache["o_"+l.value]={id:l.value,value:l.innerHTML},e(l).clone().appendTo(t.collection).attr("selected",!1).attr("title",e(l).text()))})},_deSelect:function(t){var i=this;t.each(function(e,t){i.element.find('option[value="'+t.value+'"]').removeAttr("selected")}),e(t).appendTo(this.collection).attr("selected",!1)},_query:function(t,i){var l,n=[];if(""===t)if(this.options.xhr)this.collection.html(this.tooManyObjectsPlaceholder);else{for(l in this._cache)this._cache.hasOwnProperty(l)&&(option=this._cache[l],n.push({id:option.id,label:option.value}));i.apply(this,[n])}else if(this.options.xhr)e.ajax({beforeSend:function(e){e.setRequestHeader("Accept","application/json")},url:this.options.remote_source,data:this.options.createQuery(t),success:i});else{t=new RegExp(t+".*","i");for(l in this._cache)this._cache.hasOwnProperty(l)&&t.test(this._cache[l].value)&&(option=this._cache[l],n.push({id:option.id,label:option.value}));i.apply(this,[n])}},_select:function(t){var i=this;t.each(function(t,l){var n=i.element.find('option[value="'+l.value+'"]');n.length?n.attr("selected","selected"):i.element.append(e("<option></option>").attr("value",l.value).attr("selected","selected"))}),e(t).appendTo(this.selection).attr("selected",!1)},_move:function(t,i){var l=this;"up"==t?i.each(function(t,i){var n=e(i).prev();if(n.length>0){var o=l.element.find('option[value="'+i.value+'"]'),s=l.element.find('option[value="'+n[0].value+'"]');s.before(o),n.before(e(i))}}):(e.fn.reverse=[].reverse,i.reverse().each(function(t,i){var n=e(i).next();if(n.length>0){var o=l.element.find('option[value="'+i.value+'"]'),s=l.element.find('option[value="'+n[0].value+'"]');s.after(o),n.after(e(i))}}))},selected:function(e){return this.element.find('option[value="'+e+'"]').attr("selected")},destroy:function(){this.wrapper.remove(),this.element.css({display:"inline"}),e.Widget.prototype.destroy.apply(this,arguments)}})}(jQuery);