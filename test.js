fs = require('fs');
a = [{'url': 'www1'}, {'url': 'www2'}]
fs.writeFile(
    './results.json',
    JSON.stringify(a),
    function (err) {
        if (err) {
            console.error('Crap happens');
        }
    }
);