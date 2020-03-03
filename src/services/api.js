const BASE_URL = 'https://api.github.com/users/';

export const getUser = user => {
  return fetch(`${BASE_URL}${user}`).then(res => res.json());
};

export const getRepos = user => {
  return fetch(`${BASE_URL}${user}/repos`).then(res => res.json());
};
