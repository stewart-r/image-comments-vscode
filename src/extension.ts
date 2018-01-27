'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CommentsDisplayCtrl } from "./CommentsDisplay/CommentsDisplayCtrl"

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    console.log(`image-comments extension activated!`);
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log(`image-comments extension activated!`);
}