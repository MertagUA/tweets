export function setLocalStorageItem(key, value) {
  localStorage.setItem(`${key}`, JSON.stringify(value));
}

export function getLocalStorageItem(key) {
  const localData = localStorage.getItem(`${key}`);
  return JSON.parse(localData);
}
