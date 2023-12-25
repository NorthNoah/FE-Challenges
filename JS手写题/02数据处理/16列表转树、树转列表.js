// 1.对象列表转树：找父节点
source = [
	{
		id: 1,
		pid: 0,
		name: "body",
	},
	{
		id: 2,
		pid: 1,
		name: "title",
	},
	{
		id: 3,
		pid: 2,
		name: "div",
	},
]
function jsonToTree(data) {
	// 初始化结果数组，并判断输入数据的格式
	let result = []
	if (!Array.isArray(data)) {
		return result
	}
	// 使用map，将当前对象的id与当前对象对应存储起来
	let map = {}
	data.forEach((item) => {
		map[item.id] = item
	})
	//
	data.forEach((item) => {
		let parent = map[item.pid] // 寻找父节点
		if (parent) {
			(parent.children || (parent.children = [])).push(item) // 存在父节点，则将当前item放入父节点的children数组中
		} else {
			result.push(item) // 无父节点，则直接将当前节点放入根路径
		}
	})
	return result
}
console.log(jsonToTree(source)[0].children[0].children)

// 2.树形结构数组转列表:dfs到最底层
const data = [
    {
        id: 1,
        text: '节点1',
        parentId: 0,
        children: [
            {
                id: 2,
                text: '节点1_1',
                parentId: 1
            }
        ]
    }
]
function treeToList(data) {
	let res = []
	const dfs = tree => {
		for (const item of tree) {
			if (item.children) {
				dfs(item.children)
				delete item.children
			}
			res.push(item)
		}
	}
	dfs(data)
	return res
}
console.log(treeToList(data))



