

Ext.define('book.view.vocabularyassessment.VocabularyAssessment', {
    extend: 'Ext.Panel',
    xtype: 'vocabularyassessment',
    requires: [],
    config: {         
        cls: 'vocabulary_assessment_panel',
        flex:1,       
        items: [
            {
                xtype: 'toolbar',
                title:'Vocabulary Assessment',
                ui: 'bluenav',
                items:[
                    {
                        xtype: 'image',
                        src: 'resources/images/vocabulary_assessmen_icon.png',
                        height: 28,
                        width: 40 
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: '7/40'
                    }
                ]
              
            },
            {
                cls: 'card_question',
                html: 'Lucid'
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
                                    'Changeable.',
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
                                    'Damaged',
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
                                    'Clear',
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
                                    'Forgotten',
                                '</div>',
                            '</div>'
                        ].join("")
                    }
                ]
            }
        ]
    }
})

