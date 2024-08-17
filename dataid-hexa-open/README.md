# DataIDHexaOpen-Extension

DataIDHexaOpen-Extension is a Visual Studio Code extension that allows you to easily open JSON files associated with specific hexadecimal IDs directly from your active text editor. It searches for files matching a specific pattern based on the selected hexadecimal ID and opens them in the editor.

## Features

- **Hexadecimal ID Recognition**: Select a hexadecimal ID in your text editor (in the format `0x12345678`), and the extension will search for JSON files that match this ID.
- **Context Menu Command**: Right-click on a selected hexadecimal ID and choose the `DataID: Open File` option to search and open matching files.
- **File Opening**: Automatically opens all matching files in the editor for easy access and editing.
- **User Feedback**: Displays informative messages if the selected text doesn't match the expected format or if no text editor is active.

## How to Use

1. **Select a Hexadecimal ID**: In your active text editor, select a text that follows the format `0x12345678`.
2. **Right-Click**: Right-click on the selected text to open the context menu.
3. **Choose the Command**: Select `DataID: Open File` from the context menu.
4. **View Matching Files**: If any JSON files match the selected ID, they will be opened automatically in the editor.

## Installation

1. Clone this repository or download the extension from the Visual Studio Marketplace.
2. Open the extension folder in Visual Studio Code.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the extension by pressing `F5` to open a new VS Code window with the extension loaded.

## Commands

- **DataID: Open File**: This command is available in the context menu when you right-click on a selected hexadecimal ID in the editor. It searches for and opens JSON files that match the selected ID.

## Development

To contribute or modify this extension:

1. Fork the repository and clone it locally.
2. Make your changes.
3. Test the extension by pressing `F5` to run it in a new VS Code window.
4. Submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Issues

If you encounter any issues or have suggestions for improvements, please create an issue in the repository.

## Credits

Developed by [Troispoils].

---

Thank you for using DataIDHexaOpen-Extension! We hope it makes your workflow more efficient and enjoyable.