import { IEverythingEndpointResponseData, ISourceEndpointResponseData } from '../../types/common';
import AppController from '../controller/controller';
import AppView from '../view/appView';

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
                this.controller.getNews(e, (data?: IEverythingEndpointResponseData) => this.view.drawNews(data))
            );
        this.controller.getSources((data?: ISourceEndpointResponseData) => this.view.drawSources(data));
    }
}

export default App;
