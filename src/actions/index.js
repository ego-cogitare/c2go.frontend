import { request } from '../core/helpers/Request';

export function dashboard(success, error) {
    request(`/api/dashboard`, {}, 'get', success, error);
};

export function register(data, success, error) {
    request(`/api/auth/registration`, data, 'post', success, error);
};

export function userValidation(data, success, error) {
    request(`/api/auth/user-validation`, data, 'post', success, error);
};

export function login(data, success, error) {
    request(`/api/auth/login`, data, 'post', success, error);
};

export function progress(data, success, error) {
    request(`/api/user/progress/${data.progress}`, data, 'post', success, error);
};

export function profilePhoto(data, success, error) {
    request(`/api/user/profile-photo`, data, 'post', success, error);
};

export function events(data, success, error) {
    request(`/api/events`, data, 'get', success, error);
};

export function categories(success, error) {
    request(`/api/categories`, {}, 'get', success, error);
};
