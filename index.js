document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4034,
        articles: [
            {
                source: { id: null, name: "Biztoc.com" },
                author: "news.google.com",
                title: "Stock market today: Stocks edge higher amid Mideast caution, Tesla slips after deliveries fall short",
                description: "Stock market today: Stocks edge higher amid Mideast caution, Tesla slips after deliveries fall short Yahoo FinanceView Full Coverage on Google News",
                url: "https://biztoc.com/x/905b1253d6ccea16",
                urlToImage: "https://biztoc.com/cdn/802/og.png",
                publishedAt: "2024-10-02T20:47:04Z",
                content: "Stock market today: Stocks edge higher amid Mideast caution, Tesla slips after deliveries fall short Yahoo FinanceView Full Coverage on Google News..."
            },
            {
                source: { id: null, name: "Observer" },
                author: "Abigail Bassett",
                title: "BMW Plans to Make Its First Hydrogen-Powered Electric Vehicle by 2028",
                description: "BMW recently announced a partnership with Toyota to introduce the first BMW hydrogen fuel cell vehicle by 2028.",
                url: "https://observer.com/2024/10/bmw-hydrogen-electric-vehicle/",
                urlToImage: "https://observer.com/wp-content/uploads/sites/2/2024/10/GettyImages-1645171863.jpg?quality=80",
                publishedAt: "2024-10-02T20:46:29Z",
                content: "A BMW iX5 Hydrogen stands at the BMW stand at the International Motor Show in September 2024..."
            },
            {
                source: { id: null, name: "Biztoc.com" },
                author: "news.google.com",
                title: "Will Tesla Robotaxis Live Up To 10 Years Of Development And Hype?",
                description: "Will Tesla Robotaxis Live Up To 10 Years Of Development And Hype? CNBC\nAfter a decade of Elon Musk promising Tesla robotaxis, here’s what we know...",
                url: "https://biztoc.com/x/a5125ca7f30c8c06",
                urlToImage: "https://biztoc.com/cdn/802/og.png",
                publishedAt: "2024-10-02T20:36:14Z",
                content: "Will Tesla Robotaxis Live Up To 10 Years Of Development And Hype? CNBC..."
            },
            {
                source: { id: null, name: "Newser" },
                author: "Rob Quinn",
                title: "Casino Company Was S&P 500's Biggest Winner",
                description: "US stocks edged higher in a quiet Wednesday, and Treasury yields rose following an encouraging update on the job market's strength. The S&P 500 rose 0.79 points...",
                url: "https://www.newser.com/story/357237/casino-company-was-sp-500s-biggest-winner.html",
                urlToImage: "https://img1-azrcdn.newser.com/image/1563682-12-20241002160618.jpeg",
                publishedAt: "2024-10-02T20:36:08Z",
                content: "On Wall Street, Caesars Entertainment jumped 5.3% for the biggest gain in the S&P 500..."
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
