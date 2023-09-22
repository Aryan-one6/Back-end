# Back-end

# File Reading and Copying Script

This is a simple Node.js script that reads the contents of a file named `file.txt`, copies its contents to another file named `paste.txt`, and then deletes the original `file.txt`. This README file provides an overview of how the code works and how to use it.

## Getting Started

To use this script, follow the steps below:

1. **Prerequisites**: Ensure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

2. **Clone the Repository**: Clone this repository to your local machine or download the code as a ZIP file and extract it.

3. **Navigate to the Directory**: Open your terminal or command prompt and navigate to the directory where you have saved the code.

4. **Install Dependencies**: There are no external dependencies for this script, so you don't need to install anything.

5. **Run the Script**: Execute the script using the following command:

   ```bash
   node script.js
   ```

   Replace `script.js` with the actual filename if it's different.

## How the Script Works

1. The script first imports the `fs` (File System) module, which is built into Node.js and provides methods for working with the file system.

2. It then reads the contents of `file.txt` using the `fs.readFile` method. The contents are read as UTF-8 encoded text.

3. The `readingFile` function is defined as the callback function for reading the file. It checks for errors during file reading and logs them if any.

4. If there are no errors, it logs the contents of the file to the console and proceeds to write the same content to a new file named `paste.txt` using the `fs.writeFile` method.

5. The `writeFile` function is defined as the callback function for writing the file. It checks for errors during file writing and logs them if any.

6. If the writing process completes successfully, it logs a success message.

7. Finally, the script attempts to delete the original `file.txt` using the `fs.unlink` method. Any errors during deletion are logged, and if successful, a confirmation message is logged.

## Important Notes

- Make sure that `file.txt` exists in the same directory as the script. If it doesn't, you should create it manually.

- The script will overwrite the contents of `paste.txt` if it already exists in the same directory.

- Be cautious when running the script, especially in a production environment, as it deletes the original file.

## License

This code is provided under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the terms of the license.
