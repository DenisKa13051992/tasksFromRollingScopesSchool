import './news.css';
import { NewsItem } from '../../../types/index';

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            if (newsItemTemp) {
                const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

                if (idx % 2) (newsClone.querySelector('.news__item') as HTMLElement).classList.add('alt');

                (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                    item.urlToImage ||
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.securitiesfinancetimes.com%2Fsecuritieslendingnews%2Ftechnologyarticle.php%3Farticle_id%3D225524%26navigationaction%3Dtechnologynews%26newssection%3Dtechnology&psig=AOvVaw0_PDOPAZYS_JX0TPi5f_MO&ust=1671353701436000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDz4O-jgPwCFQAAAAAdAAAAABAR'
                })`;
                (newsClone.querySelector('.news__meta-author') as HTMLElement).textContent =
                    item.author || item.source.name;
                (newsClone.querySelector('.news__meta-date') as HTMLElement).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                (newsClone.querySelector('.news__description-title') as HTMLElement).textContent = item.title;
                (newsClone.querySelector('.news__description-source') as HTMLElement).textContent = item.source.name;
                (newsClone.querySelector('.news__description-content') as HTMLElement).textContent = item.description;
                (newsClone.querySelector('.news__read-more a') as HTMLElement).setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        (document.querySelector('.news') as HTMLElement).innerHTML = '';
        (document.querySelector('.news') as HTMLElement).appendChild(fragment);
    }
}

export default News;
