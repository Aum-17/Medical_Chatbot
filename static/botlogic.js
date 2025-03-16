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
