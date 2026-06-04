const stars = document.querySelectorAll('.stars i');
const emojiDisplay = document.getElementById('emoji-display');
const ratingText = document.getElementById('rating-text');

// Lista de emojis baseada na pontuação (1 a 5)
const emojis = {
    1: { char: "😠", color: "#e74c3c" },
    2: { char: "🙁", color: "#f39c12" },
    3: { char: "😐", color: "#f1c40f" },
    4: { char: "🙂", color: "#2ecc71" },
    5: { char: "😍", color: "#1abc9c" }
};

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const rating = index + 1;
        
        updateRating(rating);
    });

    // Efeito visual de hover
    star.addEventListener('mouseenter', () => {
        highlightStars(index + 1);
    });

    star.addEventListener('mouseleave', () => {
        const currentActive = document.querySelectorAll('.stars i.active').length;
        highlightStars(currentActive);
    });
});

function highlightStars(count) {
    stars.forEach((s, i) => {
        if (i < count) {
            s.style.color = "#ffc107";
        } else {
            s.style.color = "#e0e5ec";
        }
    });
}

function updateRating(rating) {
    // Atualiza as estrelas permanentemente
    stars.forEach((s, i) => {
        if (i < rating) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });

    // Atualiza o texto
    ratingText.innerText = `${rating} out of 5`;

    // Atualiza o emoji com animação de "pulo"
    emojiDisplay.innerText = emojis[rating].char;
    emojiDisplay.style.transform = "scale(1.2)";
    
    setTimeout(() => {
        emojiDisplay.style.transform = "scale(1)";
    }, 200);
}
