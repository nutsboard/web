jQuery.expandable=jQuery.expandable||{};jQuery.expandable.options={controlClass:"exw-control",collapsedClass:"exw-collapsed",expandedClass:"exw-expanded",collapsedContentClass:"exw-collapsed-content",expandedHtml:"&#9662;",collapsedHtml:"&#9656;",speed:100};
jQuery.expandable.buildExpandable_=function(c,b){var a=jQuery(c).find(".expand-control").eq(0);a.length||(a=jQuery("<a></a>",{"class":b.controlClass}).html(b.collapsedHtml),jQuery(c).prepend(a));a.bind("expand",function(a,c){a=c||b.speed;jQuery(this).hasClass("expand-control")||jQuery(this).html(b.expandedHtml);$(this).parent().find("."+b.collapsedContentClass).removeClass(b.collapsedContentClass).show(a);jQuery(this).hasClass("once")?jQuery(this).remove():jQuery(this).removeClass(b.collapsedClass).addClass(b.expandedClass)});
a.bind("collapse",function(a,c){a=c||b.speed;jQuery(this).hasClass("expand-control")||jQuery(this).html(b.collapsedHtml);jQuery(this).removeClass(b.expandedClass).addClass(b.collapsedClass);jQuery(this).siblings(":not(.showalways)").addClass(b.collapsedContentClass).hide(a)});a.click(function(){jQuery(this).hasClass(b.expandedClass)?jQuery(this).trigger("collapse"):jQuery(this).trigger("expand");return!1});a[0].parentNode.id&&"#"+a[0].parentNode.id==window.location.hash?a.trigger("expand",null):a.trigger("collapse",
null)};jQuery.fn.expandable=function(c){var b=jQuery.extend({},jQuery.expandable.options,c);this.each(function(a,c){a=b;c&&a&&jQuery.expandable.buildExpandable_(c,a)});window.addEventListener("hashchange",function(){var a=window.location.hash.replace(/[^\w\-#]/g,"_"),a=a+".expandable";0<jQuery(a).length&&(a=jQuery(a).find(".exw-control"),0<a.length&&a.trigger("expand",null))},!1);return this};jQuery.expandable.fromDomElement=function(c){$(c).expandable()};