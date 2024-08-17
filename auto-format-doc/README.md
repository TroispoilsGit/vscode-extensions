# Auto Format Document

**Auto Format Document** est une extension pour [Visual Studio Code](https://code.visualstudio.com/) qui formate automatiquement les documents de type C#, JSON, HTML et CSS lorsqu'un utilisateur change de document. Cette fonctionnalité vise à maintenir un code propre et cohérent sans avoir à formater manuellement chaque fois que vous passez d'un fichier à un autre.

## Fonctionnalités

- **Formatage Automatique** : Formate les documents au format C#, JSON, HTML et CSS lorsque vous changez de document dans Visual Studio Code.
- **Notification** : Affiche un message d'information indiquant que le document a été formaté, avec le nom du fichier formaté.

## Installation

1. Ouvrez Visual Studio Code.
2. Accédez à la vue Extensions en cliquant sur l'icône Extensions dans la barre latérale gauche ou en utilisant le raccourci `Ctrl+Shift+X`.
3. Recherchez `Auto Format Document` et cliquez sur le bouton **Installer**.

## Utilisation

Une fois l'extension installée et activée, elle formatte automatiquement les fichiers suivants lorsque vous passez d'un document à un autre :

- **C#** (`.cs`)
- **JSON** (`.json`)
- **HTML** (`.html`)
- **CSS** (`.css`)

### Notes

- **Activation** : L'extension s'active automatiquement lorsqu'un fichier est ouvert ou lorsqu'un autre fichier est sélectionné. Elle ne fonctionne qu'avec les types de fichiers spécifiés ci-dessus.
- **Performance** : Le formatage est effectué juste avant que vous ne changiez de document. Assurez-vous que cette fonctionnalité convient à votre flux de travail, en particulier pour des fichiers volumineux ou complexes.

## Contribuer

Si vous souhaitez contribuer à l'amélioration de cette extension, veuillez suivre ces étapes :

1. Fork le projet.
2. Créez une branche pour vos modifications (`git checkout -b feature/your-feature`).
3. Commitez vos changements (`git commit -am 'Add new feature'`).
4. Poussez la branche (`git push origin feature/your-feature`).
5. Ouvrez une pull request sur GitHub.

## Licence

Cette extension est sous la licence [MIT](LICENSE).