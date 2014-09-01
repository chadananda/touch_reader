 Ext.define('Ext.ux.Iframe', {
    extend: 'Ext.Component',
    xtype: 'iframe',
    
    
    
    config: {
        /**
         * @cfg {String} url URL to load
         */
        url     : null,
       //style: 'height: 100%; border:none',
       style: '-webkit-overflow-scrolling: touch; height: 100%; overflow: auto; width: 100%;',
       width: '300',
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
        
        var iframe = this.element.createChild({
            id: 'book_iframe',
            tag   : 'iframe',
            //src   : this.getUrl(),
            src   : this.getUrl(),
            //style : 'height: 100%;border:none',
            //style: '-webkit-overflow-scrolling: touch; height: 100%; overflow: hidden; height: 300px;',
            style: 'height: 100%; border: 0;',
            width : this.getWidth()
        })
        
                 
        me.iframe = iframe;

        me.relayEvents(me.iframe, '*');
        
    },
   
    
    
});
