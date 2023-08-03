var editorContainer = document.querySelector('.editorContainer')
CodeMirror(editorContainer, {
  lineNumbers: true,
  mode: 'javascript',
  value: 'var b = 3;'
})
