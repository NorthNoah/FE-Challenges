function promiseAjax() {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "/login", true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;

      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status !== 304) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = function () {
      reject(new Error(xhr.statusText));
    };

    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();
  });
}
