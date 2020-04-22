const IMAGES = [
    {name: 'modry', src: 'img/modry.svg'},
    {name: 'cerveny', src: 'img/cerveny.svg'},
    {name: 'minca', src: 'img/minca.svg'},
    {name: 'zem', src: 'img/brick.svg'},
    {name: 'ostrov', src: 'img/brick2.svg'},
    {name: 'spec', src: 'img/brick3.svg'},
    {name: 'postava', src: 'img/postava.svg'},
    {name: 'background', src: 'img/pozadie.svg'},
    {name: 'background1', src: 'img/pozadie1.svg'},
    {name: 'gameover', src: 'img/gameover.svg'},
	{name: 'play', src: 'img/play.png'},
	{name: 'instructions', src: 'img/instructions.png'},
	{name: 'home', src: 'img/home.svg'},
    {name: 'soundon', src: 'img/zvuk1.png'},
    {name: 'soundoff', src: 'img/zvuk2.png'},
	
];

class ResourceManager {
    loadedImages = new Map();

    async init() {
        await this.loadImages();
    }

    async loadImages() {
        await Promise.all(
            IMAGES.map(image => this.loadImage(image)),
        )
    }
   
    async loadImage(imgResource) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imgResource.src;			
            img.onload = () => {
                this.loadedImages.set(imgResource.name, img);
                resolve(img);
            }
            img.onerror = (err) => {
                reject(err);
            }
        });
    }

    getImageSource(imageName) {
        const image = this.loadedImages.get(imageName);
        if (image == null) {
            throw new Error(`Image '${imageName}' not found`);
        }
        return image;
    }
}