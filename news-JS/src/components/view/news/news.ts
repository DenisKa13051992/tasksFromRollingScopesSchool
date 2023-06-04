import './news.css';
import { NewsItem } from '../../../types/index';

class News {
    draw(data: NewsItem[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        news.forEach((item, idx) => {
            if (newsItemTemp) {
                const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);

                if (idx % 2) (<HTMLElement>newsClone.querySelector('.news__item')).classList.add('alt');

                (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                    item.urlToImage ||
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.securitiesfinancetimes.com%2Fsecuritieslendingnews%2Ftechnologyarticle.php%3Farticle_id%3D225524%26navigationaction%3Dtechnologynews%26newssection%3Dtechnology&psig=AOvVaw0_PDOPAZYS_JX0TPi5f_MO&ust=1671353701436000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDz4O-jgPwCFQAAAAAdAAAAABAR'
                })`;
                (<HTMLElement>newsClone.querySelector('.news__meta-author')).textContent =
                    item.author || item.source.name;
                (<HTMLElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                (<HTMLElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
                (<HTMLElement>newsClone.querySelector('.news__description-source')).textContent = item.source.name;
                (<HTMLElement>newsClone.querySelector('.news__description-content')).textContent = item.description;
                (<HTMLElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

                fragment.append(newsClone);
            }
        });

        (<HTMLElement>document.querySelector('.news')).innerHTML = '';
        (<HTMLElement>document.querySelector('.news')).appendChild(fragment);
    }
}

export default News;
