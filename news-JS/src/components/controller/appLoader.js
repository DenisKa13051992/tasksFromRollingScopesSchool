import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '64264965e7994d6f8aaac6b1c6e43c5d', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
