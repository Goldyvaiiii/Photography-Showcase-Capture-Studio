document.addEventListener('DOMContentLoaded', () => {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const portfolioItems = [
        {
            image: 'https://images.unsplash.com/photo-1519741497674-611481863552',
            title: 'Wedding Photography',
            category: 'wedding'
        },
        {
            image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
            title: 'Portrait Photography',
            category: 'portrait'
        },
        {
            image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
            title: 'Nature Photography',
            category: 'nature'
        },
        // Add more items as needed
    ];

    // Create portfolio items
    function createPortfolioItems(items) {
        portfolioGrid.innerHTML = items.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-item-content">
                    <h3>${item.title}</h3>
                </div>
            </div>
        `).join('');
    }

    // Initial portfolio load
    createPortfolioItems(portfolioItems);

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            const filteredItems = filter === 'all' 
                ? portfolioItems 
                : portfolioItems.filter(item => item.category === filter);
            
            createPortfolioItems(filteredItems);
        });
    });
});