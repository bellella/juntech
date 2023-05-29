class AxiosApi {
    constructor() {
        this.api = null;
    }

    setApi(axios) {
        this.api = axios;
        this.api.interceptors.request.use((config) => {
            config = {...config, url: `/api${config.url}`};
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
    }

    GET(url, context, opts = {}) {
        if (context) {
            return this.api.get(this.inject(url, context), opts).then(r => r.data);
        } else {
            return this.api.get(url, opts).then(r => r.data);
        }
    }

    POST(url, body = {}, opts = {}) {
        return this.api.post(url, body, opts).then(r => r.data);
    }

    PATCH(url, body, opts = {}) {
        return this.api.patch(url, body, opts).then(r => r.data);
    }

    PUT(url, body, opts = {}) {
        return this.api.put(url, body, opts).then(r => r.data);
    }

    DELETE(url, context, opts = {}) {
        if (context) {
            return this.api.delete(this.inject(url, context), opts).then(r => r.data);
        } else {
            return this.api.delete(url, opts).then(r => r.data);
        }
    }

    inject(restApi, context) {
        let properties = restApi.match(/(:\w+)/g);

        properties.forEach((property) => {
            let contextVar = property.substring(1);
            let contextValue = context[contextVar];

            if (contextValue !== undefined) {
                restApi = restApi.replace(property, contextValue);
            } else {
                throw new Error('inject: context.' + contextVar + ' expected but undefined');
            }
        });

        return restApi;
    }
}

export default new AxiosApi();