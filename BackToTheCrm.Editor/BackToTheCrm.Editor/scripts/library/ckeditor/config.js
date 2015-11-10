/// <reference path="../tools.js" />
/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    config.contentsCss = CKEDITOR.getUrl('contents.css');
    CKEDITOR.config.language = BackToTheCrm.Tools.Localization.getUserLocale("en");
    config.autoGrow_onStartup = true;
    config.removeButtons = 'Anchor,JustifyBlock,Maximize,Save,Font,FontSize,Blockquote,BGColor,CreateDiv,Subscript,Superscript,Table';
    config.toolbarGroups = [
        { name: 'document', groups: ['mode', 'document', 'doctools'] },
        { name: 'clipboard', groups: ['clipboard', 'undo'] },
        { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
        { name: 'forms' },
        { name: 'styles' },
        { name: 'colors' },
        { name: 'tools' },
        { name: 'others' },
        { name: 'about' },
        '/',
        { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
        { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
        { name: 'links' },
        { name: 'insert' }
    ];

    CKEDITOR.on('instanceReady', function (ev) {
        CKEDITOR.instances.RTEditor.execCommand('maximize');
    });
};
