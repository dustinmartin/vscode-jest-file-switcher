/* global suite, test */

const { expect } = require('chai');
const vscode = require('vscode');
const extension = require('../extension');

suite('Extension Tests', function() {
    suite('tests', () => {
        test('should find test file relative to current source file');

        test('should find source file relative to current test file');

        test('should create test file if not found');
    });

    suite('mocks', () => {
        test('should find mock file relative to current source file');

        test('should find source file relative to current mock file');

        test('should create mock file if not found');
    });
});
