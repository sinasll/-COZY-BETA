// Import TonConnect SDK
const tonConnect = new TonConnect();

// Select the UI elements
const connectWalletButton = document.getElementById('connect-wallet');
const walletInfo = document.getElementById('wallet-info');

// Add click event listener to the "Connect Wallet" button
connectWalletButton.addEventListener('click', async () => {
    try {
        // Trigger the wallet connection popup
        await tonConnect.connect();

        // Fetch the user's wallet address after successful connection
        const account = await tonConnect.getAccount();
        console.log('Wallet connected:', account);

        // Display the wallet address on the UI
        walletInfo.textContent = `Wallet Connected: ${account}`;
    } catch (error) {
        // Handle errors during connection
        console.error('Wallet connection failed:', error);
        walletInfo.textContent = 'Failed to connect wallet. Please try again.';
    }
});
