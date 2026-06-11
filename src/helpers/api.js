import axios from 'axios';

const api = axios.create({
  baseURL: 'https://essdemo.alwijha.net'
});

const DEV_AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozNiwicm9sZSI6Ik1hbmFnZXIiLCJkZXBhcnRtZW50IjoiTWFya2V0aW5nIiwiZXhwIjoxNzgxNzcwMDM5LCJpYXQiOjE3ODExNjUyMzksInRva2VuIjpudWxsfQ.64iXC2KRm0svNqe8bu8Dzq4zpQXCy05tsp-kRd2XhMc';

const getStoredToken = () => {
  if (typeof localStorage === 'undefined') return DEV_AUTH_TOKEN;

  const tokenKeys = ['token', 'accessToken', 'access_token', 'authToken'];

  for (const key of tokenKeys) {
    const token = localStorage.getItem(key);
    if (token) return token.replace(/^"|"$/g, '').replace(/^Bearer\s+/i, '');
  }

  const authSession = localStorage.getItem('_LAHOMES_AUTH_KEY_');

  if (authSession) {
    try {
      const parsedSession = JSON.parse(authSession);
      return parsedSession?.token || parsedSession?.accessToken || parsedSession?.access_token;
    } catch {
      return undefined;
    }
  }

  return DEV_AUTH_TOKEN;
};

api.interceptors.request.use(config => {
  const token = getStoredToken();

  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
