const KEY = "redux";

export const saveState = (state) => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem(KEY, serializeState);
  } catch (e) {
    console.log(e);
  }
};

export const loadState = () => {
  try {
    const serializeState = localStorage.getItem(KEY);
    if (!serializeState) return undefined;
    return JSON.parse(serializeState);
  } catch (e) {
    return undefined;
  }
};
