const photosListing = [
    {
        id: 1,
        url: 'url1',
        legend: 'legend 1',
        description: 'desc 1'
    },
    {
        id: 2,
        url: 'url2',
        legend: 'legend 2',
        description: 'desc 2'
    }
];

export class PhotoModel {

    constructor() {
        this._photos = []
    };

    get photos() {

        this._photos = photosListing;
        return this._photos;
    };

    set photos(photo) {
        this._photos.push(photo);
    };
}