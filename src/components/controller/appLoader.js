import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '19e9dbb0325c4420bbc0897b7c6629b2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
