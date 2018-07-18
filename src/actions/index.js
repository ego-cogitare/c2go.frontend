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

export function refreshToken({ token }, success, error) {
    request(`/api/auth/refresh-token`, { token }, 'get', success, error);
};


/**
 * Profile actions
 */
export function progress(data, success, error) {
    request(`/api/user/progress/${data.progress}`, data, 'post', success, error);
};

export function profilePhoto(data, success, error) {
    request(`/api/user/profile-photo`, data, 'post', success, error);
};

export function category({ category }, success, error) {
    request(`/api/category/${category}`, {}, 'get', success, error);
};

export function categories(success, error) {
    request(`/api/categories`, {}, 'get', success, error);
};

export function profileInfo(success, error) {
    request(`/api/user/info`, {}, 'get', success, error);
};

export function profileDeactivate(success, error) {
    request(`/api/user/deactivate`, {}, 'post', success, error);
};

export function profileChangePassword(data, success, error) {
    request(`/api/user/change-password`, data, 'post', success, error);
};

export function profileDisabilityInformation(data, success, error) {
    request(`/api/user/disability-information`, data, 'post', success, error);
};

export function profileRequireAssistance(data, success, error) {
    request(`/api/user/require-assistance`, data, 'post', success, error);
};



export function requestOverview({ requestId }, success, error) {
    request(`/api/events/requests/${requestId}/overview`, {}, 'get', success, error);
};

export function eventRequests(success, error) {
    request(`/api/events/requests`, {}, 'get', success, error);
};

export function proposals({ event }, success, error) {
    request(`/api/events/proposals/${event}`, {}, 'get', success, error);
};

export function details({ proposal }, success, error) {
    request(`/api/events/details/${proposal}`, {}, 'get', success, error);
};

export function requests({ proposal }, success, error) {
    request(`/api/events/requests/${proposal}`, {}, 'get', success, error);
};

export function storeRequest({ proposal, message }, success, error) {
    request(`/api/events/requests/${proposal}`, { message }, 'post', success, error);
};

export function general({ proposal }, success, error) {
    request(`/api/events/general/${proposal}`, {}, 'get', success, error);
};

export function events(data, success, error) {
    request(`/api/events`, data, 'get', success, error);
};

export function eventAddAutocomplete({ keyword }, success, error) {
    request(`/api/events/autocomplete`, { keyword}, 'get', success, error);
};

export function eventAddGeneral(data, success, error) {
    request(`/api/events/add/general`, data, 'post', success, error);
};

export function eventAddCategory(data, success, error) {
    request(`/api/events/add/category`, data, 'post', success, error);
};

export function eventAddDatePlace(data, success, error) {
    request(`/api/events/add/date-place`, data, 'post', success, error);
};

export function eventAddTickets(data, success, error) {
    request(`/api/events/add/tickets`, data, 'post', success, error);
};

export function eventAdd(data, success, error) {
    request(`/api/events/add`, data, 'post', success, error);
};

export function upcomingEvents(success, error) {
    request(`/api/events/upcoming`, {}, 'get', success, error);
};

export function eventReject({ requestId }, success, error) {
    request(`/api/events/requests/${requestId}/reject`, {}, 'post', success, error);
};

export function eventAccept({ requestId }, success, error) {
    request(`/api/events/requests/${requestId}/accept`, {}, 'post', success, error);
};
