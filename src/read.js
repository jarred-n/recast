#!/usr/bin/env node
const recast  = require('recast')

// 1 recast.run —— 命令行文件读取
recast.run(function(ast, printSource) {
    printSource(ast);
})

// 2 recast.visit —— AST节点遍历
// recast.run(function(ast, printSource) {
//     recast.visit(ast, {
//         visitFunctionDeclaration: function(/*{node} */  path ) {
//             const node = path.node;
//             printSource(node);
//             this.traverse(path);
//             // console.log(node);
//             // return false;
//         }
//     })
// })

// 3 TNT —— 判断AST对象类型
// const TNT = recast.types.namedTypes;

// recast.run(function(ast, printSource) {
//     recast.visit(ast, {
//         visitExpressionStatement: function(path) {
//             const node = path.node;
            // 判断是否为ExpressionStatement，正确则输出一行字。
            // if(TNT.ExpressionStatement.check(node)) {
            //     console.log('这是一个ExpressionStatement');
            // }
            // 判断是否为ExpressionStatement，正确不输出，错误则全局报错
//             TNT.ExpressionStatement.assert(node);
//             this.traverse(path);
//         }
//     })
// })