const BASE_URL = "https://api.github.com";

async function fetchData(route, params) {
    const url = new URL(route, BASE_URL);
    
    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }

    try {
        const response = await fetch(url.toString());
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export { fetchData };