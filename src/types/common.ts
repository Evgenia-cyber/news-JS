export enum RESPONSE_STATUS {
    OK = 'ok',
    ERROR = 'error',
}

export enum METHOD {
    GET = 'GET',
}

export enum STATUS_CODE {
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
}

export enum ENDPOINTS {
    SOURCES = 'sources',
    EVERYTHING = 'everything',
}

export interface IOptions {
    readonly apiKey?: string;
    sources?: string;
}

export interface ISource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export type ISourceArticle = Pick<ISource, 'id' | 'name'>;

export interface IArticle {
    source: ISourceArticle;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ISourceEndpointResponseData {
    status: RESPONSE_STATUS.OK;
    sources: Array<ISource>;
}

export interface IEverythingEndpointResponseData {
    status: RESPONSE_STATUS.OK;
    totalResults: number;
    articles: Array<IArticle>;
}

export interface IErrorResponseData {
    status: RESPONSE_STATUS.ERROR;
    code: string;
    message: string;
}

export type ServerResponseData = IEverythingEndpointResponseData | ISourceEndpointResponseData | IErrorResponseData;
