// Emoji dictionary: emoji -> meaning
const emojiDict = {
  "🎂": "cake",
  "🚗": "car",
  "🐍": "snake",
  "📚": "books",
  "🎧": "headphones",
  "🏠": "house",
  "☕": "coffee",
  "😂": "laugh",
  "😴": "sleep",
  "✈️": "airplane"
};

const emojis = Object.keys(emojiDict);
let currentEmoji = '';

// DOM elements
const emojiDisplay = document.getElementById('emojiDisplay');
const guessInput = document.getElementById('guessInput');
const resultDiv = document.getElementById('result');
const checkBtn = document.getElementById('checkBtn');
const nextBtn = document.getElementById('nextBtn');

// Function to load a random emoji
function newEmoji() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  currentEmoji = emojis[randomIndex];
  emojiDisplay.textContent = currentEmoji;
  resultDiv.textContent = '';
  guessInput.value = '';
  guessInput.focus();
}

// Function to check user's guess
function checkAnswer() {
  const userGuess = guessInput.value.trim().toLowerCase();
  const correctAnswer = emojiDict[currentEmoji].toLowerCase();

  if (userGuess === '') {
    resultDiv.style.color = 'red';
    resultDiv.
