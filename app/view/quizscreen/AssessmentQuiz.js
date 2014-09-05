

Ext.define('book.view.quizscreen.AssessmentQuiz', {
    extend: 'Ext.Panel',
    xtype: 'assessmentquiz',
    requires: [],
    config: {         
        cls: 'quiz_panel',
        flex:1,       
        items: [
            {
                xtype: 'toolbar',
                title:'Basic Banking Terminology',
                ui: 'bluenav',
                items:[
                    {
                        xtype: 'image',
                        src: 'resources/images/vocabulary_assessmen_icon.png',
                        height: 31,
                        width: 30 
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: '7/15'
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
                                    'The practice of making risky loans in order to maximize profit. The lender goes up to the “red line”',
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
            }
        ]
    }
})

