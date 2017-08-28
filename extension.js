const vscode = require('vscode');

// console.log('vscode >>>>>>>>>>>>', vscode);

const path = require('path');
const { workspace, window, commands } = vscode;

function getTestName(fileName) {
    const fileNameParts = fileName.split('.');
    const extension = fileNameParts[fileNameParts.length - 1];

    fileNameParts[fileNameParts.length - 1] = `spec.${extension}`;

    return fileNameParts.join('.');
}

function getSourceName(fileName) {}

function getMockName(fileName) {}

exports.activate = function(context) {
    context.subscriptions.push(
        commands.registerCommand('extension.goToTest', function() {
            const editor = vscode.window.activeTextEditor;

            if (!editor) {
                return;
            }

            const currentFilePath = editor.document.fileName;
            const fileName = path.basename(currentFilePath);
            const directoryName = path.dirname(currentFilePath);
            const testFileName = getTestName(fileName);
            const testFilePath = `${directoryName}/__tests__/${testFileName}`;

            return workspace
                .openTextDocument(testFilePath)
                .then(doc => window.showTextDocument(doc));
        })
    );

    context.subscriptions.push(
        commands.registerCommand('extension.goToSource', function() {
            window.showInformationMessage('Go to Source');
        })
    );

    context.subscriptions.push(
        commands.registerCommand('extension.goToMock', function() {
            window.showInformationMessage('Go to mock');
        })
    );

    context.subscriptions.push(
        commands.registerCommand('extension.toggleSourceAndMock', function() {
            window.showInformationMessage('Toggle Source and Mock');
        })
    );

    context.subscriptions.push(
        commands.registerCommand('extension.toggleSourceAndTest', function() {
            window.showInformationMessage('Toggle Source and Test');
        })
    );
};

exports.deactivate = function() {};
