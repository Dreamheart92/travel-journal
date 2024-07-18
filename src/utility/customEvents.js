const userStorageChange = (action) => new CustomEvent('userStorageChange', { detail: action });

export default userStorageChange;
