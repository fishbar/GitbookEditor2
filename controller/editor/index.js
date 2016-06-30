'use strict';
require('ace-builds/src/ace');
require('ace-builds/src/mode-markdown');
const view = require('../../lib/view');

const clipboard = require('electron').clipboard;
const {BrowserWindow} = require('electron').remote;

/**
 * 初始化视图
 */
exports.init = function () {
  let body = document.querySelector('body');
  // init layout
  view.render(body, 'editor.html', {
    autosave: false,
    keyboardShortcut: function (str) {
      return str;
    }
  });
  let editorNode = document.querySelector('#editor');
  editorNode.style.height = '400px';
  editorNode.style.width = '100%';
  // init ace editor
  let editor = ace.edit(editorNode);
  var MarkDownModel = ace.require('ace/mode/markdown').Mode;
  editor.session.setMode(new MarkDownModel());
  editor.session.setNewLineMode('unix');
  editor.setShowPrintMargin(false);

  // 绑定黏贴事件
  window.addEventListener('paste', function (e) {
    console.log(e);
    console.log(clipboard.availableFormats());
    console.log(clipboard.readText());
  });

};

/**
 * 销毁视图
 */
exports.destroy = function () {

};

