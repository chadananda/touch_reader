

Ext.define('book.view.vocabularyassessment.VocabularyAssessmentContainer', {
    extend: 'Ext.Panel',
    xtype: 'vocabularyassessmentContainer',
    requires: [],
    config: {         
        
        flex:1,
        layout: 'hbox',        
        items: [
            {
                xtype: 'spacer'
            },
            {
                xtype: 'vocabularyassessment'
            },
            {
                xtype: 'spacer'
            }
        ]
    }
})

