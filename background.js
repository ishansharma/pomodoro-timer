chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('index.html', {
		minWidth: 600, minHeight: 220,
     	maxWidth: 600, maxHeight: 220
	});
});