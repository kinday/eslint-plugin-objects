'use strict';

var linter = require('eslint').linter;
var ESLintTester = require('eslint-tester');
var eslintTester = new ESLintTester(linter);

eslintTester.addRuleTest('./lib/rules/no-object-properties-one-line', {
    valid: [
        {code: 'var a = {};'},
        {code: 'var a = {b: 1};'},
        {code: 'var a = {b: 1,\n         c: 2};'},
        {code: 'var a = {\n    b: 1,\n    c: 2};'},
        {code: 'var a = {\n    b: 1,\n    c: 2\n};'},
        {code: 'var a = {a: 1, b: 2}', args: [2, {properties: 2}]}
    ],
    invalid: [
        {
            code: 'var a = {b: 1, c: 2};',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'var a = {\n    b: 1, c: 2,\n    d: 3\n};',
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        },
        {
            code: 'var a = {a: 1, b: 2, c: 3, d: 4}',
            args: [2, {properties: 2}],
            errors: [
                {message: 'multiple object properties on one line'}
            ]
        }
    ]
});
