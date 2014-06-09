/**
 *  @file kc.tab.js
 *  @brief Tabbify the target element
 *  		Example:
 *  		< class="container" >
 *  			< class="kc_tab_btn" data-tabbox-id="{tabbox_1}" />< class="kc_tab_btn" data-tabbox-id="{tabbox_2}" />
 *  			< class="kc_tab_content" data-tabbox-id="tabbox_1" > {content} </>
*		  		< class="kc_tab_content" data-tabbox-id="tabbox_2" > {content} </>
 *			< / >
 *			$('.container').kc_tab();
 *  		Add also css to style sheet for tab btn and content style 
 *  		e.g 
 *  		.kc_tab_content{display:none;}
 *			.button.kc_active_tab{background-color:#10334B;}
 *			.kc_active_content{display:block;}
 *  @author Mark Luk
 */

(function($) {
   $.kc_tab = function(element, options) {
      this.options = {};
      var plugin = this;
      element.data('kc_tab', this);
      
      this.init = function(element, options) {         
  	  	this.options = $.extend({}, $.kc_tab.defaultOptions, options); 
  		 
        //Bind tab_btn onclick action
        element.find('.'+this.options.tab_btn_cls).bind('click', function(){
          //set current tab as the active tab, and show corresponding content
          element.find('.'+plugin.options.active_tab_cls).removeClass(plugin.options.active_tab_cls);
          element.find('.'+plugin.options.active_content_cls).removeClass(plugin.options.active_content_cls);
          $(this).addClass(plugin.options.active_tab_cls);
          element.find('.'+plugin.options.tab_content_cls+'[data-tabbox-id="'+$(this).attr('data-tabbox-id')+'"]')
            .addClass(plugin.options.active_content_cls);
        });
  		 
          //Call public function
          this.set_active_tab(this.options.default_tab);
      };
            
      this.set_active_tab = function(tab_pos) {
		    element.find('.'+this.options.tab_btn_cls).eq(tab_pos).trigger('click');
      };
 
      this.init(element, options);
   };
  
  $.fn.kc_tab = function(options) {                   
    return this.each(function() {
       (new $.kc_tab($(this), options));              
    });        
  };
  
 
  $.kc_tab.defaultOptions = {
    default_tab : 0,
	  tab_btn_cls : 'kc_tab_btn',
  	tab_content_cls : 'kc_tab_content',
  	active_tab_cls : 'kc_active_tab',
  	active_content_cls : 'kc_active_content'
  }
 
})(jQuery);
