import Loader from './loader';

abstract class AppLoader extends Loader {
    constructor() {
        super('https://news-js-server.herokuapp.com/', {
            apiKey: '19e9dbb0325c4420bbc0897b7c6629b2', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
