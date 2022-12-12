import './sources.css';
import {SourcesItem} from '../../../types/index'

class Sources {
    draw(data: SourcesItem[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null  = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
           if (sourceItemTemp) {
             const sourceClone = sourceItemTemp.content.cloneNode(true)  as HTMLElement;

            (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
            (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
          }
        });

        (document.querySelector('.sources') as HTMLElement).append(fragment);
    }
}

export default Sources;
