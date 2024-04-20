<template>
    <h1>Home Screen</h1>
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
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
main {
    flex: 1;
    padding: 20px;
}
footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #007bff;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
}
button {
    padding: 10px 20px;
    font-size: 16px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    cursor: pointer;
}
button:hover {
    background-color: #0056b3;
}
</style>