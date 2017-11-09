/**
 * 
 */
(function ($) {
	$.fn.extend({
        "selectAll": function (options) {
        	if(!private(options)) {
        		console.log("参数格式不对"); 
        		return this;
        	}
            var opt = $.extend({}, defaluts, options); 
           
            return this.each(function () { 
            	var _this = this;
            	var $checkboxs = $("[name="+ opt.name +"]");
            	$(this).on("click",function(e){
            		//因为数据有可能时刻变化， 所以在这里重新获取一下
            		var $checkboxs = $("[name="+ opt.name +"]");
        			$checkboxs.each(function(){
        				this.checked = _this.checked;
        			});
        			opt.callback && opt.callback($(this),$checkboxs);
        		});
        		
        		$checkboxs.on("click",function(e){
        			var checkedLen = $checkboxs.filter(function(){
        				return this.checked; //filter 返回true表示保留该元素,返回false不保留
        			}).length;
        			_this.checked = checkedLen == $checkboxs.length;
        		});
            });
        }
    });
    //默认参数
    var defaluts = {
         name:""
    };
    //私有方法，检测参数是否合法
    function private(options) {
        return options && typeof options === "object" ? true : false;
    }
})(jQuery);
