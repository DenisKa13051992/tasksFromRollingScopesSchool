import './sources.css';
import { SourcesItem } from '../../../types/index';

class Sources {
    draw(data: SourcesItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            if (sourceItemTemp) {
                const sourceClone = <HTMLElement>sourceItemTemp.content.cloneNode(true);

                (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
                (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

                fragment.append(sourceClone);
            }
        });

        (<HTMLElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
