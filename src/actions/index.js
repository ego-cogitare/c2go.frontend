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

export function progress(data, success, error) {
  console.log(data)
    request(`/api/user/progress/${data.progress}`, data, 'post', success, error);
};

export function profilePhoto(data, success, error) {
    request(`/api/user/profile-photo`, data, 'post', success, error);
};

export function eventAccept({ event }, success, error) {
    request(`/api/events/accept/${event}`, {}, 'get', success, error);
};

export function userEvents(success, error) {
    request(`/api/events/requests`, {}, 'get', success, error);
};

export function proposals({ id }, success, error) {
    request(`/api/events/proposals/${id}`, {}, 'get', success, error);
};

export function details({ event, user }, success, error) {
    request(`/api/events/details/${event}/user/${user}`, {}, 'get', success, error);
};

export function requests({ event, user }, success, error) {
    request(`/api/events/requests/${event}/user/${user}`, {}, 'get', success, error);
};

export function storeRequest({ event, user, message }, success, error) {
    request(`/api/events/requests/${event}/user/${user}`, { message }, 'post', success, error);
};

export function general({ event, user }, success, error) {
    request(`/api/events/general/${event}/user/${user}`, {}, 'get', success, error);
};

export function events(data, success, error) {
    request(`/api/events`, data, 'get', success, error);
};

export function categories(success, error) {
    request(`/api/categories`, {}, 'get', success, error);
};
