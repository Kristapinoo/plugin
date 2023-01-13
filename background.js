chrome.storage.local.set({keywords: [i]}, function() {
    console.log('Value is set to ' + value);
});

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.example.com", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        // handle the response here
    }
};
xhr.send();

// Avoid using eval() function, it's a security risk

// Avoid using inline scripts, it's a security risk

// Avoid using document.write() function, it can cause performance issues

// Avoid using alert() or confirm() functions, they are blocking functions and can cause usability issues
