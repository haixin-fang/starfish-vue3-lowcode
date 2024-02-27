import store from "@/controller/shortcut";

export function clearCanvas() {
  store.commit("clear");
}

export function copy() {
  store.commit("copy");
}

export function paste() {
  store.commit("paste");
}

export function cut() {
  store.commit("copy");
  store.commit("delete");
}

export function onDelete() {
  store.commit("delete");
}

export function onTop() {
  store.commit("onTop");
}

export function onBottom() {
  store.commit("onBottom");
}

const result =  {
  copy,
  paste,
  cut,
  delete: onDelete,
  onTop,
  onBottom,
  clearCanvas
}
export type shortCutType = typeof result;
export default result