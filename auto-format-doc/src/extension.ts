import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Affiche un message lorsque l'extension est activée
    console.log('Extension "auto-format-doc" has started...');

    // Fonction pour formater le document à chaque sauvegarde
    function formatDocument(document: vscode.TextDocument) {
        vscode.commands.executeCommand('editor.action.formatDocument').then(() => {
            vscode.window.showInformationMessage(`Document "${document.fileName}" formatted...`);
        });
    }

    // Fonction pour gérer le changement d'éditeur
    let lastDocument: vscode.TextDocument | undefined;

    const disposable = vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            if (lastDocument && lastDocument.uri.toString() !== editor.document.uri.toString()) {
                // Format last document if it was changed
                formatDocument(lastDocument);
            }
            // Update the last document to the currently active one
            lastDocument = editor.document;
        }
    });

    // Ajout du disposable au contexte pour le nettoyage automatique lors de la désactivation de l'extension
    context.subscriptions.push(disposable);
}

export function deactivate() {}