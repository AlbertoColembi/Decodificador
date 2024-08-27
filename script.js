document.getElementById("encryptBtn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    if (inputText) {
        const encryptedText = btoa(inputText);
        displayOutput(encryptedText);
    }
});

document.getElementById("decryptBtn").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
    if (inputText) {
        try {
            const decryptedText = atob(inputText);
            displayOutput(decryptedText);
        } catch (e) {
            alert("Texto inválido para descriptografia!");
        }
    }
});

function displayOutput(text) {
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<p>${text}</p>`;
}
