(function ($) {
	$.fn.extend({
		"selectAll": function (options) {
			if(!private(options)){
				console.log("参数格式不对");
				return false;
			}

			var opt = $.extend({},defaults,options);
			return this.each(function(){
				var _this = this;
				var $checkboxs = $("[name="+opt.name+"]");
				$(this).on("change",function(){
					$checkboxs.each(function(){
						this.checked = _this.checked;
					})
				})
				$checkboxs.on("change",function(){
					var checkLen = $checkboxs.filter(function(){
						return this.checked
					}).length;
					_this.checked = checkLen == $checkboxs.length
				})
			})
		}
	});
	var defaults = {
		name:""
	}
	function private(opt){
		return opt && typeof opt === "object"?true:false;
	}
})(jQuery)