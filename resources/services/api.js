const api = {
    get(endpoint) {
        return fetch(endpoint)
            .then(response => response.json())
    }
}

export default api;