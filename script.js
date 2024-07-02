const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
document.addEventListener('DOMContentLoaded', function() {
    // Display current time in UTC
    function updateTime() {
        document.getElementById("currentTimeUTC").innerText = `Time (UTC): ${utcTime}`;
        document.getElementById("currentDay").innerText = `Current Day: ${dayOfWeek}`;
    }

    updateTime();
    setTimeout(updateTime, 1000); 
});

