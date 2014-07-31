Ext.define('Ext.ux.Iframe', {
    extend: 'Ext.Component',
    xtype: 'iframe',
    
    
    
    config: {
        /**
         * @cfg {String} url URL to load
         */
        url     : null,
       style: 'height: 100%;', 
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

        me.iframe = this.element.createChild({
            tag   : 'iframe',
            src   : this.getUrl(),
            style : 'width: 100%; height: 100%;'
        });

        me.relayEvents(me.iframe, '*');
    }
    
    
    
    
});