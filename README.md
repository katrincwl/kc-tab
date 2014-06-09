kc-tab
======

jQuery plugin: Make dom element into tabs easily 

HTML DOM example
<pre><code>&lt;div class="container" >
  &lt;!-- Tab buttons -->
  &lt;div class="kc_tab_btn" data-tabbox-id="tabbox_1" >&lt;/div>
  &lt;div class="kc_tab_btn" data-tabbox-id="tabbox_2" >&lt;/div>
  &lt;!-- Tab contents -->
  &lt;div class="kc_tab_content" data-tabbox-id="tabbox_1" > {tab 1 content} &lt;/div>
  &lt;div class="kc_tab_content" data-tabbox-id="tabbox_2" > {tab 2 content} &lt;/div>
&lt;/div>
</code></pre>

Javascript Example
<pre><code>$('.container').kc_tab({
  default_tab : 0,
	tab_btn_cls : 'kc_tab_btn',
	tab_content_cls : 'kc_tab_content',
	active_tab_cls : 'kc_active_tab',
	active_content_cls : 'kc_active_content'
});
</code></pre>

CSS Example
<pre><code>.kc_tab_content{display:none;}
.kc_active_tab{background-color:#10334B;}
.kc_active_content{display:block;}
</code></pre>
