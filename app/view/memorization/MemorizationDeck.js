

Ext.define('book.view.memorization.MemorizationDeck', {
    extend: 'Ext.Panel',
    xtype: 'memorizationdeck',
    requires: [],
    config: {         
        cls: 'deck_panel',
        flex:1,       
        items: [
            {
                xtype: 'toolbar',
                title:'Key Banking Terminology',
                ui: 'bluenav',
                items:[
                    {
                        xtype: 'image',
                        src: 'resources/images/memorization_engine_icon.png',
                        height: 28,
                        width: 40 
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: '6/12'
                    }
                ]
            },
            {
                cls: 'card_question',
                html: 'Define the banking term "Redlining"'
            },
            {
                cls: 'answers_btn',
                layout: 'vbox',
                items:[
                    {
                        xtype: 'button',
                        ui: 'segment',
                        html: [
                            '<div class="btn_main">',
                                '<div class="question_no">',
                                    '1.',
                                '</div>',
                                '<div class="question_ans">',
                                    'The practice of making risky loans in order to maximize profit. The lender goes up to the "red line".',
                                '</div>',
                            '</div>'
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        ui: 'segment',
                        html: [
                            '<div class="btn_main">',
                                '<div class="question_no">',
                                    '2.',
                                '</div>',
                                '<div class="question_ans">',
                                    'The practice of color coding bundles of money in order to avoid recounting during cash transactions.',
                                '</div>',
                            '</div>'
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        ui: 'segment',
                        html: [
                            '<div class="btn_main">',
                                '<div class="question_no">',
                                    '3.',
                                '</div>',
                                '<div class="question_ans">',
                                    'The practice of not making mortgage, home improvement,and small business loans in neighborhoods that are considered by the lender to be poor investments.',
                                '</div>',
                            '</div>'
                        ].join("")
                    },
                    {
                        xtype: 'button',
                        ui: 'segment',
                        html: [
                            '<div class="btn_main">',
                                '<div class="question_no">',
                                    '4.',
                                '</div>',
                                '<div class="question_ans">',
                                    'When a bank lends more than the total FDIC insured amount thus putting the bank in danger of default.',
                                '</div>',
                            '</div>'
                        ].join("")
                    }
                ]
            },
            {
                layout: 'hbox',
                cls: 'cmpile_progress',
                items:[
                    {
                         xtype: 'spacer'
                    },
                    {
                        html: '<div style="margin-top:10px;">Completed: 3/12</div>'
                    },
                    {
                         xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        html: '<img src="resources/images/help_button_icon.png">'
                    }
                ]
            }
        ]
    }
})

