document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const payload = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    const response = await fetch("https://localhost:7203/api/ContactForm", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const messageElement = document.getElementById("responseMsg");

    if (response.ok) {
        messageElement.textContent = "Message sent successfully!";
    } else {
        messageElement.textContent = "Failed to send message.";
    }
});
