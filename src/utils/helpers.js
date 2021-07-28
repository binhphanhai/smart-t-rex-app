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
