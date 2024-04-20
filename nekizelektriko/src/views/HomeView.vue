<template>
    
    <div class="container">
        
        <div class="top-section">
            <h1 class="welcome-text">Welcome!</h1>
        </div>

        <div class="mid-section">
            <div class="account-info">
                <div class="account-image_border ">
                    <div class="account-image"></div>
                </div>
                <h2 class="username">Username</h2>
            </div>
        </div>

        <div class="household_info-section">
            <div class="household">
                <h1>Your Household</h1>
                <div class="account white">
                    Account 1
                </div>
                <div class="account green">
                    Account 2
                </div>
                <div class="account white">
                    Account 3
                </div>
            </div>
        </div>
        
    </div>
    
    <footer>
        <a href="/login">Button 1</a>
        <a href="/test">Button 2</a>
        <a href="">Button 3</a>
    </footer>

</template>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
    }

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .top-section {
        width: 100%;
        height: 16.67vh;
        background-color: green;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .welcome-text {
        font-size: 2em;
        color: white;
        margin-bottom: 10%;
    }

    .mid-section {
        width: 100%;
        height: 7.33vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: white;
    }

    .account-info {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .account-image {
        width: 80px;
        height: 80px;
        background-color: grey; /* You can add an image here later */
        border-radius: 50%; /* Makes it a circle */
        
    }

    .account-image_border {
        width: 90px;
        height: 90px;
        background-color: white; /* You can add an image here later */
        border-radius: 50%; /* Makes it a circle */
        margin-bottom: 10%;
        display: flex;
        justify-content: center; /* Centers horizontally */
        align-items: center; /* Centers vertically */
    }

    .username {
        font-size: 1.2em;
        color: black;
    }

    .household {
        width: 80%;
        display: flex;
        justify-content: space-between;
    }

    .account {
        width: calc(33.33% - 20px);
        height: 100px;
        background-color: green;
        color: black;
        text-align: center;
        padding: 20px;
        margin: 10px;
        border-radius: 8px;
    }

    .account.white {
        background-color: white;
        color: black;
    }

    .household_info-section {
        background-color: white;
        height: 100em;
        width: 100%;
    }

    footer {
        margin-top: 20px;
    }
</style>
