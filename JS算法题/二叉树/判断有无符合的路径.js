
const data3 = [
  {
    id: 1,
    name: '前端',
    children: [
        {
            id: 2,
            name: 'html',
            children: [
                { id: 5, name: 'vue', children: [] },
                { id: 6, name: 're', children: [] },
            ]
        },
        {
            id: 3,
            name: 'html',
            children: [
                { id: 7, name: 'vue', children: [] },
                { id: 8, name: 're', children: [] },
            ]
        }
    ]
  }
]

function findNodePath(data, targetName) {
  let result = [];
  function dfs(node, path) {
    if (node.name === targetName) {
      result.push(path.concat(node.id));
    }
    if (node.children) {
      for (let child of node.children) {
        dfs(child, path.concat(node.id));
      }
    }
  }
  for (let node of data) {
    dfs(node, []);
  }
  return result;
}

function findPath(data, target) {
  let res = []
  function dfs(node, path) {
    // 命中的情况
    if (node.name === target) {
      res.push(path.concat(node.id));
    }

    if (node.children) {
      for (let child of node.children) {
        dfs(child, path.concat(node.id));
      }
    }
  }

  for (node of data) {
    dfs(node, [])
  }
  return res;
}

console.log(findPath(data3, 'vue'))
