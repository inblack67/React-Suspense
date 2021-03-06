import produce from 'immer'
import lru from 'lru-cache'
import md5 from 'md5'

const cache = new lru(50);

export default (url, options={}) => {
    const key = `${url}.${md5(JSON.stringify(options))}`;

    const value = cache.get(key) || { status: 'new', data: null }

    if(value.status === 'resolved'){
        return value.data;
    }

    const promise = fetch(url).then(res => res.json());

    promise.then(data => {
        cache.set(key, produce(value, draft => {
            draft.status = 'resolved';
            draft.data = data;
        }));
    })

    throw promise; // will be caught by suspense
}