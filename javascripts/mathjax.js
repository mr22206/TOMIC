window.MathJax = {
  loader: {
    load: ['[tex]/ams', '[tex]/color']
  },
  tex: {
    packages: {'[+]': ['ams', 'color']},
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    processHtmlClass: 'arithmatex'
  },
  startup: {
    typeset: true
  }
}; 