function get(key) {
    const data = localStorage.getItem(key);
    if (data) {
        try {
            return JSON.parse(data);
        } catch (e) {
            console.log(e);
            return null;
        }
    } else {
        return null;
    }
}

function save(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function remove(key) {
    localStorage.removeItem(key);
}

export default {
    get,
    save,
    remove
};