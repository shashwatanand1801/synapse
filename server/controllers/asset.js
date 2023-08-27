const fs = require('fs')

const directoryPath = './assets/Beckn Protocols';

class Asset {

    getAllFileName(req, res) {
        // Read the file names from the specified directory
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
            // Send the file names as 'items' in JSON format
            res.json(files);
            }
        });
        return res;
    }
}

const assetController = new Asset();
module.exports = assetController;
