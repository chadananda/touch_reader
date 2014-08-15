

Ext.define('book.view.book.DiscussMenu', {
    extend: 'Ext.Panel',
    xtype: 'discussmenu',
    requires: ['Ext.ux.AccordionList'],
    
    config: { 
        //allowMultiple: true,
        width:700,
        height: 480,
        top: 300,      
        modal:true,
        hideOnMaskTap: true,
        cls: 'discuss_menu',
        layout: 'vbox',
        flex:1,
        items: [{
                        xtype: 'accordionlist',
                        store: Ext.create('book.store.SDiscussMenu'),
                        headerItemTpl: [
                           
                                '<div <tpl if="values.replies"></tpl>>',
                                '<div class="discussion_window">',
                         
                                '<div class="discussion_img">',
                                    '<img src="resources/images/bibliography_icon.png">',
                                '</div>',
                                
                                '<div class="discussion_description">',
                                   '<div class="title">{text}</div>',
                                   '<hr class="style">',
                                   '<div class="text">{description}</div>',
                                   '<div id="replay_btn" style="float:right;"><img src="resources/images/replay_button.png"</div>',
                                '</div>',
                                '</div></div>',
                          
                        ].join(''),
                        
                        contentItemTpl: [
                            '<div class="discussion_window">',
                         
                                '<div class="discussion_img">',
                                    '<img src="resources/images/bibliography_icon.png">',
                                '</div>',
                                
                                '<div class="discussion_description">',
                                   '<div class="title">{text}</div>',
                                   '<hr class="style">',
                                   '<div class="text">{description}</div>',
                                   '<div id="replay_btn" style="float:right;"><img src="resources/images/replay_button.png"</div>',
                                '</div>',
                                '</div>'
                        ].join(''),
                        useSelectedHighlights: false,
                       // showCount: true,
                        animation: true,
                        indent: true,
                        animationDuration: 300,
                        flex: 1,
                        itemId: 'nested',
                        listeners: {
                            initialize: function() {
                                this.load();
                               
                            }
                        }
                    },{
                      html:[
                      
                        '<div class="discussion_window" style="margin-left:30px;width:93%">',
                         
                                '<div class="discussion_img">',
                                    '<img src="resources/images/bibliography_icon.png" width="25" height="24">',
                                '</div>',
                                
                                '<div class="discussion_description">',
                                   '<div class="title">You - Now</div>',
                                   '<hr class="style">',
                                   '<div class="text"><input type="textarea" style="width:90%;height:60px;"></textarea></div>',
                                   '<div id="replay_btn" style="float:right;"><img src="resources/images/post_button.png"</div>',
                                '</div>',
                                '</div>'
                      
                      ].join(""),
                          
                    },{
                        style: 'margin-bottom:10px;',
                        layout:'hbox',
                        items:[{
                            xtype: 'spacer',
                        },{
                             xtype: 'button',
                            text: '<img src="resources/images/chat_button.png"> New Comment',
                            ui: 'normal',
                            
                           
                        },{
                            xtype: 'spacer',
                        }]
                       
                    
                    }]
         
    }
})

