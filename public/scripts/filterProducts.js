
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    cards.forEach(card => {
    if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
    });
});
});

