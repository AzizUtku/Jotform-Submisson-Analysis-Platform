/* eslint-disable func-names */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-extend-native */
import axios from 'axios';

const methods = {
  GET: 'get',
  POST: 'post',
};

const urls = {
  FORMS_URL: 'https://api.jotform.com/user/forms',
  QUESTIONS_URL: 'https://api.jotform.com/form/{1}/questions?apiKey={0}',
  SUBMISSONS_URL: 'https://api.jotform.com/form/{1}/submissions?apiKey={0}',
  GENDERS_URL: 'https://api.genderize.io/?name={0}',
};

const apiCall = (url, method = methods.GET, callback = () => {}, headers = {}) => {
  axios({
    url,
    method,
    headers,
  }).then((response) => {
    callback(response);
  });
};

export const getForms = (apiKey, callback) => {
  apiCall(urls.FORMS_URL, methods.GET, callback, { APIKEY: apiKey });
};

export const getQuestions = (apiKey, formId, callback) => {
  apiCall(urls.QUESTIONS_URL.format(apiKey, formId), methods.GET, callback);
};

export const getSubmissions = (apiKey, formId, callback) => {
  apiCall(urls.SUBMISSONS_URL.format(apiKey, formId), methods.GET, callback);
};

export const getGenders = (name, callback) => {
  apiCall(urls.GENDERS_URL.format(name), methods.GET, callback);
};

String.prototype.format = function () {
  const args = [].slice.call(arguments);
  return this.replace(/(\{\d+\})/g, a => args[+a.substr(1, a.length - 2) || 0]);
};
