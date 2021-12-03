import { IEverythingEndpointResponseData, ISourceEndpointResponseData } from '../../types/common';
import News from './news/news';
import Sources from './sources/sources';

class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IEverythingEndpointResponseData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: ISourceEndpointResponseData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
