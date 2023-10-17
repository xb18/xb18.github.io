window.addEventListener('load', () => {
  const codeBlocks = document.querySelectorAll('figure.highlight');
  if (!codeBlocks.length) return;
  const addCopyButton = (codeBlock) => {
    // lang
    let lang = codeBlock.querySelector('td.code > pre > code').classList;
    lang = Array.from(lang);
    lang = lang.find(item => item !== 'hljs');
    lang = lang.trim();
    if (lang) {
      lang = lang.toLowerCase();
      const langElem = document.createElement('div');
      langElem.setAttribute('class', 'codeblock-lang-wrapper');
      langElem.setAttribute('data-lang', lang);
      langElem.innerText = lang;
      codeBlock.appendChild(langElem);
    }
    // copy
    const copyWrapper = document.createElement('div');
    copyWrapper.setAttribute('class', 'codeblock-copy-wrapper');
    let copiedTimeout = null;
    copyWrapper.addEventListener('click', (ev) => {
      const highlightDom = ev.target.parentElement;
      const code = highlightDom.querySelector('code') || highlightDom.querySelector('.code');

      let copiedCode = '';
      (function traverseChildNodes(node) {
        const childNodes = node.childNodes;
        childNodes.forEach((child) => {
          switch (child.nodeName) {
            case '#text': // 文本节点
              copiedCode += child.nodeValue;
              break;
            case 'BR': // <br />
              copiedCode += '\n';
              break;
            default:
              traverseChildNodes(child);
          }
        });
      })(code);

      navigator.clipboard.writeText(
        /* 去掉最后的换行 */
        copiedCode.slice(0, -1)
      ).then(() => {
        if (!!copiedTimeout) clearTimeout(copiedTimeout);

        copyWrapper.classList.add('codeblock-copy-wrapper-copied');
        copiedTimeout = setTimeout(() => {
          copyWrapper.classList.remove('codeblock-copy-wrapper-copied');
          copiedTimeout = null;
        }, 1500);
      });
    });
    codeBlock.appendChild(copyWrapper);
  };

  codeBlocks.forEach(addCopyButton);
});
