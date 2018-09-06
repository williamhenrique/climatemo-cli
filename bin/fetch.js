

export const fetch = (query, type) => {
    return fetch(`${API_URL}/search?q=${query}&type=${type}`, HEADER).then(toJSON);
};