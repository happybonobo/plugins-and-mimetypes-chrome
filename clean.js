// Clean.
function clean() {
    // Allow Google Hangouts.
    var googleHangouts = location.host === 'plus.google.com' && location.pathname.match(/hangouts/);
    if (googleHangouts) {
        return;
    }

    navigator.__defineGetter__('mimeTypes', function() {
        return [];
    });

    navigator.__defineGetter__('plugins', function() {
        return [];
    });
}

// Inject.
var stringifiedCode = '(' + clean + ')();';
var script = document.createElement('script');
script.textContent = stringifiedCode;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
