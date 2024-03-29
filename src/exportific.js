#!/usr/bin/env node
const recast = require("recast");
const {
    identifier: id,
    expressionStatement,
    memberExpression,
    assignmentExpression,
    arrowFunctionExpression,
    blockStatement
} = recast.types.builders;

recast.run(function(ast, printSource) {
    // 一个块级域 {}
    console.log('\n\nstep1:');
    printSource(blockStatement([]));

    // 一个箭头函数 ()=>{}
    console.log('\n\nstep2:');
    printSource(arrowFunctionExpression([], blockStatement([])));

    // add 赋值为箭头函数 add = ()=>{}
    console.log('\n\nstep3:');
    printSource(assignmentExpression('=', id('add'), arrowFunctionExpression([], blockStatement([]))));

    // exports.add 赋值为箭头函数 exports.add = ()=>{}
    console.log('\n\nstep4:');
    printSource(expressionStatement(assignmentExpression('=', memberExpression(id('exports'), id('add')),
        arrowFunctionExpression([], blockStatement([]))
    )));

})