let input = [
    {
        id: 1, val: '学校', parentId: null
    }, {
        id: 2, val: '班级1', parentId: 1
    }, {
        id: 3, val: '班级2', parentId: 1
    }, {
        id: 4, val: '学生1', parentId: 2
    }, {
        id: 5, val: '学生2', parentId: 3
    }, {
        id: 6, val: '学生3', parentId: 3
    },
]
// 实现为:
let output = {
    id: 1,
    val: '学校',
    children: [{
        id: 2,
        val: '班级1',
        children: [
            {
                id: 4,
                val: '学生1',
                children: []
            },
            {
                id: 5,
                val: '学生2',
                children: []
            }
        ]
    }, {
        id: 3,
        val: '班级2',
        children: [{
            id: 6,
            val: '学生3',
            children: []
        }]
    }]
}


toTree(input);

function toTree(ary) {
    var res = ary.forEach((item,index)=>{
        if(item instanceof Object){//如果是对象
            toTree(item);
        }else {//若是普通类型 这里没有考虑数组
            
        }
    })
}