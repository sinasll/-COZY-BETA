// Function to generate a random guest username
function generateRandomGuestUsername() {
    const randomString = Math.random().toString(36).substring(2, 10);  // Generate a random alphanumeric string
    return `guest${randomString}`;  // Return the random guest username
}

// Initialize the Telegram Web App
if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.ready();  // Initialize the WebApp

    // Get user information
    const user = Telegram.WebApp.initDataUnsafe.user;

    // Check if username exists
    if (user && user.username) {
        document.getElementById('username').innerText = `@${user.username}`;
        // Optionally, store the username in localStorage for future use
        localStorage.setItem('username', user.username);
    } else {
        // Generate a random guest username if no Telegram username is available
        const guestUsername = generateRandomGuestUsername();
        document.getElementById('username').innerText = `@${guestUsername}`;
        // Store the guest username in localStorage
        localStorage.setItem('username', guestUsername);
    }
} else {
    // Fallback for non-WebApp environments
    console.log('Telegram WebApp is not available.');
    const guestUsername = generateRandomGuestUsername();
    document.getElementById('username').innerText = `@${guestUsername}`; // Display random guest username
    localStorage.setItem('username', guestUsername); // Store guest username
}

// Function to handle "Play Game" button click
function playGame() {
    window.location.href = 'game.html'; 
}

// Function to handle "Daily Reward" button click
function Reward() {
    window.location.href = 'rewards.html' ;
}

// Function to handle "Tasks" button click
function viewTasks() {
    window.location.href = 'tasks.html'; // Navigate to the tasks page
}

// Function to handle "Friends" button click
function viewFriends() {
    window.location.href = 'friends.html'; // Navigate to the friends page
}

// Function to handle "Wallet" button click
function viewWallet() {
    window.location.href = 'wallet.html'; // Navigate to the wallet page
}

// Function to handle "Music" button click
function viewMusic() {
    window.location.href = 'music.html'; // Navigate to the music page
}

// Initial setup when the page loads
window.onload = function() {
    getUsername(); // Fetch and display username
}
