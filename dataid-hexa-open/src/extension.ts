// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('hexa-selection-open.extractSelectedText', async () => {
		const regex = /^0x[0-9a-fA-F]{8}$/;
		const editor = vscode.window.activeTextEditor;
	
		if (editor) {
		  const selection = editor.document.getText(editor.selection);
		  if (regex.test(selection)) {
			const hexValue = selection.substring(2); // Retirer le "0x"
			const pattern = `**/${hexValue}.*.json`;
			console.log("Searching for files with pattern:", pattern);
	
			const files = await vscode.workspace.findFiles(pattern);
			console.log("Files found:", files);

			await Promise.all(files.map(async uriFile => {
				const document = await vscode.workspace.openTextDocument(uriFile);
				await vscode.window.showTextDocument(document, { preview: false });
			  }));

		  } else {
			vscode.window.showInformationMessage("Selected text does not match the required format.");
		  }
		} else {
		  vscode.window.showInformationMessage("No active text editor found.");
		}
	  });
	
	  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
