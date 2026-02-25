export const setStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error reading storage:", error);
    return null;
  }
};