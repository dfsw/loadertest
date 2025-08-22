// Just Natural Expansion - CCMM Compatible Wrapper
// Designed to work with CCMM's script injection method

console.log('Just Natural Expansion CCMM wrapper starting...');

// Wait for the game to be fully ready before executing the mod
function waitForGameReady() {
    if (typeof Game !== 'undefined' && Game.ready && Game.Objects && Object.keys(Game.Objects).length > 0) {
        console.log('Game is ready, loading Just Natural Expansion...');
        loadModContent();
    } else {
        console.log('Waiting for game to be ready...');
        requestAnimationFrame(waitForGameReady);
    }
}

function loadModContent() {
    console.log('Loading mod content...');
    
    // Create script element to load the actual mod
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/dfsw/Just-Natural-Expansion/refs/heads/main/JustNaturalExpansion.js';
    
    script.onload = function() {
        console.log('Just Natural Expansion content loaded successfully');
    };
    
    script.onerror = function() {
        console.error('Failed to load mod content, trying fetch...');
        loadViaFetch();
    };
    
    document.head.appendChild(script);
}

function loadViaFetch() {
    console.log('Using fetch fallback...');
    
    fetch('https://raw.githubusercontent.com/dfsw/Just-Natural-Expansion/refs/heads/main/JustNaturalExpansion.js')
        .then(response => response.text())
        .then(code => {
            console.log('Code fetched, executing...');
            try {
                eval(code);
                console.log('Just Natural Expansion executed via fetch');
            } catch (e) {
                console.error('Execution failed:', e);
            }
        })
        .catch(error => {
            console.error('Fetch failed:', error);
        });
}

// Start the loading process
waitForGameReady();

console.log('Just Natural Expansion CCMM wrapper initialized');