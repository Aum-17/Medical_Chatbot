function sendMessage() {
    let userInput = document.getElementById("userInput");
    let message = userInput.value.trim();
    if (message === "") return;

    appendMessage("user", message);
    userInput.value = "";

    let typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typing");
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    document.getElementById("chatBody").appendChild(typingIndicator);

    fetch("/get", {
        method: "POST",
        body: new URLSearchParams({ msg: message }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("chatBody").removeChild(typingIndicator);

        // **Cleaning the Response Properly**
        try {
            let parsedData = JSON.parse(data);  // Convert JSON string to object
            let cleanMessage = parsedData.answer.trim(); // Extract only the answer
            appendMessage("bot", cleanMessage);
        } catch (error) {
            console.error("Error parsing response:", error);
            appendMessage("bot", "Sorry, I couldn't understand that.");
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const startBtn = document.getElementById("start-record");
    const output = document.getElementById("user-input");

    if (!("webkitSpeechRecognition" in window)) {
        alert("Speech Recognition is not supported in your browser.");
    } else {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";

        startBtn.addEventListener("click", function () {
            recognition.start();
        });

        recognition.onresult = function (event) {
            const transcript = event.results[0][0].transcript;
            output.value = transcript;  // Set text in the input field
        };

        recognition.onerror = function (event) {
            console.error("Speech recognition error:", event.error);
        };
    }
});

