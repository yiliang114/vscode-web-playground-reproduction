export function getTreeData() {
  return fetch(
    "http://localhost:3000/static/devextensions/src/mock/treeData.json",
    {
      headers: {
        accept: "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "if-modified-since": "Wed, 21 Jun 2023 03:17:55 GMT",
        "sec-ch-ua": '"Chromium";v="115", "Not/A)Brand";v="99"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"macOS"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
      },
      referrer: "http://localhost:3000/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  ).then((resp) => resp.json());
}
