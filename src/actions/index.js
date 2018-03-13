import { request } from '../core/helpers/Request';

export function brand({id}, success, error) {
    request(`/api/${id}`, {}, 'get', success, error);
};
