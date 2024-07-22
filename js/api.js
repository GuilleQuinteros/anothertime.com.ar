const apiKey = 'ouqVQKsCMVm06bEqKE1Q7SghqQQTpt3PiW0Fh5f9GobFiCCL';
        const url = `https://api.currentsapi.services/v1/latest-news?language=es&apiKey=${apiKey}`;
        let pageNumber = 1;
        const pageSize = 4;

        const newsCards = document.getElementById('news-cards');
        const loadMoreButton = document.getElementById('loadMore');

        loadMoreButton.addEventListener('click', loadMoreNews);

        function loadMoreNews() {
            fetch(`${url}&page_number=${pageNumber}&page_size=${pageSize}`)
                .then(response => response.json())
                .then(data => {
                    displayNews(data.news);
                    pageNumber++;
                })
                .catch(error => console.error('Error fetching news:', error));
        }

        function displayNews(news) {
            news.forEach(article => {
                const col = document.createElement('div');
                col.className = 'col-md-6 col-lg-3 mb-4';
                col.innerHTML = `
                    <div class="card h-100">
                        <img src="${article.image || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${article.title}">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-primary">Leer más</a>
                        </div>
                    </div>
                `;
                newsCards.appendChild(col);
            });
        }

        document.addEventListener('DOMContentLoaded', loadMoreNews);