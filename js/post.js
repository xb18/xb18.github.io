// lazyloaded mediumZoom
document.addEventListener('lazyloaded', (e) => {
  mediumZoom(e.target);
});

// toc-list
window.addEventListener('hashchange', (event) => {
	onhashchange(event);
}, true);

function onhashchange (e) {
	let {newURL, oldURL} = e;
	const active = 'active';
	document.querySelectorAll(`.toc-link[href="${getHash(oldURL)}"]`).forEach(elem => {
		let classList = elem.classList;
		if (classList.contains(active)) {
			classList.remove(active);
		}
	});
	document.querySelectorAll(`.toc-link[href="${getHash(newURL)}"]`).forEach(elem => {
		let classList = elem.classList;
		if (!classList.contains(active)) {
			classList.add(active);
		}
	});
}

function getHash(url) {
	return new URL(url).hash;
}
// 事件代理 修复点击目录地址栏不会改变bug
document.addEventListener('click', (event) => {
	if (event.target.className.includes('toc-link')) {
		let href = event.target.getAttribute('href');
		location.href = href;
	}
});

// post-copyright
window.addEventListener('load', () => {
  let copiedTimeout = null;
  let clipboard = new ClipboardJS('.moelj-post-copyright .copy-btn');
  clipboard.on('success', function (e) {
    e.clearSelection();
    if (copiedTimeout) {
      clearTimeout(copiedTimeout)
      copiedTimeout = null;
    };
    let copyBtn = document.querySelector('.moelj-post-copyright .copy-btn');
    let copiedText = copyBtn.getAttribute('data-copiedtext');
    let copyText = copyBtn.getAttribute('data-copytext');
    copyBtn.setAttribute('title', copiedText);
    copyBtn.classList.add('copied');
    copiedTimeout = setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyBtn.setAttribute('title', copyText);
    }, 1500);
  });
});