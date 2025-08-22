// Just Natural Expansion - Ultra Basic CCMM Wrapper
// Minimal wrapper to test CCMM compatibility

console.log('=== Just Natural Expansion CCMM wrapper starting ===');

// Immediate test to see if the script is executing at all
alert('Just Natural Expansion wrapper is executing!');

// Simple function call
function testFunction() {
    console.log('Test function called successfully');
    alert('Test function executed!');
}

// Call it immediately
testFunction();

// Try to load the mod directly
try {
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/dfsw/Just-Natural-Expansion/refs/heads/main/JustNaturalExpansion.js';
    script.onload = function() { alert('Mod loaded successfully!'); };
    script.onerror = function() { alert('Mod failed to load!'); };
    document.head.appendChild(script);
    console.log('Script element created and appended');
} catch (e) {
    console.error('Error creating script:', e);
    alert('Error: ' + e.message);
}

console.log('=== Just Natural Expansion CCMM wrapper finished ===');