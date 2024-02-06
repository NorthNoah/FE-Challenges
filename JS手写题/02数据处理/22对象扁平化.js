function flat(item, preKey = "", res = {}) {
  Object.entries(item).forEach(([key, val]) => {
    if (val && typeof val === "object") {
      flat(val, preKey + key + ".", res);
    } else {
      res[preKey + key] = val;
    }
  });
  return res;
}

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } };
console.log(flat(source));

