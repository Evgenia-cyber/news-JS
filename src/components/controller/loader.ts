import { ENDPOINTS, IOptions, STATUS_CODE, ServerResponseData, METHOD } from './../../types/common';

abstract class Loader {
    constructor(private baseLink: string, private options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: ENDPOINTS; options: IOptions },
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load(METHOD.GET, endpoint, callback, options);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === STATUS_CODE.UNAUTHORIZED || res.status === STATUS_CODE.NOT_FOUND)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: ENDPOINTS): string {
        const urlOptions: { [index: string]: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: METHOD,
        endpoint: ENDPOINTS,
        callback: (data: ServerResponseData) => void,
        options: IOptions = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
