import { request } from '../core/helpers/Request';

export function register(data, success, error) {
    request(`/api/auth/registration`, data, 'post', success, error);
};

export function userValidation(data, success, error) {
    request(`/api/auth/user-validation`, data, 'post', success, error);
};

export function login(data, success, error) {
    request(`/api/auth/login`, data, 'post', success, error);
};
