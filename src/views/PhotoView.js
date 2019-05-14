import { View } from './index.js';

export class PhotoView extends View {

    constructor(el) {
        super(el);
    };

    template(model) {
        
        return `
            ${  
                model.photos.map(photo => {
                    
                    return `
                        <section class="photo-wrapper">
                            <figure class="photo-content">
                                <img class="photo-img" src="${ photo.url }" alt="${ photo.description }">
                                <figcaption class="photo-legend">
                                    ${ photo.legend }
                                </figcaption>
                            </figure>
                        </section>
                    `
                })
            }
        `
    };
};