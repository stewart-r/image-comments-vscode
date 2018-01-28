import * as vscode from 'vscode'
import { Disposable, window, HoverProvider, Hover } from 'vscode';
import * as omnisharp from "./omnisharpInterop"

export class CommentsDisplayProvider implements HoverProvider{
    
    
    async provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Promise<vscode.Hover> {
        const ret = new vscode.MarkdownString();
        const csExtension = vscode.extensions.getExtension("ms-vscode.csharp");
        await csExtension.exports.initializationFinished;
        
        const existingContent = await vscode.commands.executeCommand("vscode.executeHoverProvider", document, position)
        ret.appendMarkdown(`

![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

        `);
        return new Hover(ret);
    }
    
}