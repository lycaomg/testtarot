const cards = [
  { name: "The Fool 🌱", meaning: "New beginnings, spontaneity, free spirit. Leap of Faith - Trust the journey. Jump even if you don’t see the landing! " },
  { name: "The Magician 🪄", meaning: "Manifestation, resourcefulness, power. Everything you need is within you. Focus + action = magic. You've Got this! " },
  { name: "The High Priestess 🌙", meaning: "Intuition, mystery, subconscious mind. Your intuition knows. Quiet the noise. The answer is inside. Trust the vibes! " },
  { name: "The Empress 🌿", meaning: "Abundance, nurturing, fertility. Nurture, love, and let yourself bloom. Receive and thrive! " },
  { name: "The Emperor 🏛️", meaning: "Authority, stability, structure. Take control. Set boundaries. Lead with confidence. Own Your throne! " },
  { name: "The Hierophant 📖", meaning: "Tradition, wisdom, spiritual guidance. Honor traditions or break them—but know why. Learn. Lead. Grow. Stay Grounded! " },
  { name: "The Lovers ❤️", meaning: "Relationships, choices, harmony. Choices matter. Pick what lights you up. Love starts with you. Heart over Mind. " },
  { name: "The Chariot 🏎️", meaning: "Determination, control, willpower. Focus. Drive. Go for it. Victory is yours if you stay the course. Eyes Forward! " },
  { name: "Strength 🦁", meaning: "Courage, influence, inner strength. True strength is calm. Be fierce and kind—at the same time. Soft Power. " },
  { name: "The Hermit 🕯️", meaning: "Reflection, solitude, inner guidance. Step back. Listen to your inner voice. Light your own path. Pause and Reflect. " },
  { name: "Wheel of Fortune 🎡", meaning: "Destiny, change, cycles. Life turns. Ride the wave. Luck is what you make of it. Shift Happens!" },
  { name: "Justice ⚖️", meaning: "Fairness, truth, law. Choices have consequences. Stay true. Do what’s right. What goes around comes around. " },
  { name: "The Hanged Man 🔄", meaning: "Perspective, letting go, sacrifice. Perspective is everything. Let go to move forward. Flip the Script. " },
  { name: "Death 💀", meaning: "Transformation, endings, new beginnings. Endings make space for beginnings. Release. Renew. Let it Die. " },
  { name: "Temperance 🌈", meaning: "Balance, moderation, patience. Blend and breathe. Patience brings harmony. " },
  { name: "The Devil 😈", meaning: "Attachment, temptation, shadow self. What’s holding you back? Face it. You’re freer than you think. Cut the Chains! " },
  { name: "The Tower ⚡", meaning: "Sudden change, upheaval, revelation. Chaos clears the way. Trust the breakdown. Growth follows. Break to Rebuild! " },
  { name: "The Star ⭐", meaning: "Hope, inspiration, serenity.  Stay hopeful. Dream big. The universe has your back. Hope Wins! " },
  { name: "The Moon 🌕", meaning: "Illusion, fear, anxiety.  Not all is clear. Trust your gut over your eyes. Feel the Feels! " },
  { name: "The Sun 🌞", meaning: "Joy, success, positivity. Joy is your birthright. Celebrate. Life loves you back. Shine On! " },
  { name: "Judgement 🎺", meaning: "Reflection, reckoning, awakening. Time to answer the call. Step into your higher self. Rise up! " },
  { name: "The World 🌍", meaning: "Completion, accomplishment, travel. Completion. Celebrate your journey. New adventures await. You did it!" }
];

const drawButton = document.getElementById("draw-btn");
const cardContainer = document.getElementById("card-container");

drawButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * cards.length);
  const { name, meaning } = cards[randomIndex];

  cardContainer.innerHTML = `
    <div class="card">
      <p><strong>${name}</strong></p>
      <p>${meaning}</p>
    </div>
  `;
});
