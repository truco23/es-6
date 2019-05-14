import { PhotoView } from '../views/index.js';
import { PhotoModel } from '../models/PhotoModel.js';

export class IndexController {
    
    constructor() {
        this._init();
    };

    _init() {
        this._photoModel = new PhotoModel();
        this._photoView = new PhotoView('.photo-listing');
    }

    render() {

        this._photoView.update(this._photoModel);
    }
}