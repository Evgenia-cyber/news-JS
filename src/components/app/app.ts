import { ServerResponseData } from '../../types/common';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: MouseEvent) =>
                this.controller.getNews(e, (data?: ServerResponseData) => this.view.drawNews(data))
            );
        this.controller.getSources((data?: ServerResponseData) => this.view.drawSources(data));
    }
}

export default App;