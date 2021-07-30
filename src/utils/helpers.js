import { STATUS } from "./enum";

export const capitalizeString = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export const removeDuplicates = (arr) => {
  const rs = [];
  const map = {};
  arr.forEach((val) => {
    if (map[val] === undefined) {
      map[val] = true;
      rs.push(val);
    }
  });
  return rs;
};

export const createResource = (promise) => {
  let status = STATUS.PENDING;
  let result = promise
    .then((res) => {
      status = STATUS.SUCCESS;
      result = res.data;
    })
    .catch((err) => {
      status = STATUS.ERROR;
      result = err.response?.data;
    });
  return {
    read() {
      if (status === STATUS.PENDING) throw result;
      if (status === STATUS.ERROR) throw result;
      if (status === STATUS.SUCCESS) return result;
      throw new Error("This should be impossible");
    },
  };
};
