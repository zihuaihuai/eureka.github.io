let messages = [
    "We're glad you're here.",
    "Our company is committed to excellence.",
    "Stay tuned for more updates."
];

function getRandomMessage() {
    let index = Math.floor(Math.random() * messages.length);
    return messages[index];
}
