Ext.define('Ext.ux.Iframe', {
    extend: 'Ext.Component',
    xtype: 'iframe',
    
    
    
    config: {
        /**
         * @cfg {String} url URL to load
         */
        url     : null,
       style: 'height: 100%; border:none',
       width: null,
        /**
         * @cfg
         * @inheritdoc
         *
         * Add your own style
         */
        baseCls : Ext.baseCSSPrefix + 'iframe'
    },

    initialize: function() {
        var me = this;
        me.callParent();

       // alert(this.getUrl())
        me.iframe = this.element.createChild({
            id: 'book_iframe',
            tag   : 'iframe',
            src   : this.getUrl(),
            style : 'height: 100%;border:none',
            width:this.getWidth()
        });

        me.relayEvents(me.iframe, '*'); 
    }
    
    
    
    
});