const express = require('express');
const bodyParser = require('body-parser');
const fs = require("fs");

const file = "test.db";
const limit = 10;


// DATABASE CONFIG
const exists = fs.existsSync(file);
const typeMap = {
    string: "TEXT",
    number: "REAL",
    boolean: "INT"
};


if (!exists) {
    fs.openSync(file, "w");
}

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(file);

/// SELECT name FROM my_db.sqlite_master WHERE type='table';
var tables = [];
db.each("SELECT name FROM sqlite_master WHERE type = 'table'", (err, data) => {
    tables.push(data.name);
});


// API CONFIGURATION
var app = express();
app.use(bodyParser.json()); // for parsing application/json
app.listen(9000, function () {
    console.log('listening on 9000')
});

app.get('/api/tables', (req, res) => {
    res.send(tables);
});

app.get('/api/:res/:id?', (req, res) => {
    var resource = getResourceName(req.params.res),
        id = req.params.id,
        size = req.query.limit || limit,
        page = req.query.page,
        stmt;

    if (!id) {
        stmt = 'SELECT * FROM ' + resource + ' LIMIT ' + size;
        if (page) {
            stmt += ' OFFSET ' + (page * size);
        }
        db.all(stmt, (err, data) => {
            res.send(data);
        });
    } else {
        stmt = 'SELECT * FROM ' + resource + ' WHERE id=' + id + ';';
        db.get(stmt, (err, data) => {
            res.send(data);
        });
    }
});

app.delete('/api/:res/:id?', (req, res) => {
    var resource = getResourceName(req.params.res),
        id = req.params.id,
        stmt;

    if (id) {
        stmt = 'DELETE FROM ' + resource + ' WHERE id=' + id + ';';
    } else {
        stmt = 'DROP TABLE ' + resource;
    }

    db.run(stmt, (err, data) => {
        res.send('ok');
    });
});

app.patch('/api/:res/:id', (req, res) => {
    var body = req.body,
        resource = getResourceName(req.params.res),
        id = req.params.id,
        updateValues;

    Object.keys(body).forEach((key) => {
        if (key !== 'id') {
            if (updateValues) {
                updateValues = updateValues
                    .concat(',')
                    .concat(key)
                    .concat('=')
                    .concat(getValueTypeForData(body[key]));
            } else {
                keys = key;
                updateValues = key
                    .concat('=')
                    .concat(getValueTypeForData(body[key]));
            }
        }
    });

    var stmt = "UPDATE " + resource + " SET  " + updateValues + " WHERE id=" + id + ";";

    db.run(stmt, (err, data) => {
        res.send('ok');
    });
});

app.put('/api/:res', (req, res) => {
    var body = req.body,
        resource = getResourceName(req.params.res);

    db.serialize(function () {
        stmt = createIfNotExists(resource, body);

        if (stmt) {
            db.run(stmt);
        }

        var run = "INSERT INTO " + resource + " VALUES (null";

        Object.keys(body).forEach((key) => {
            run += ',' + getValueTypeForData(body[key]);
        });

        run += ');';

        db.run(run, (err, data) => {
            res.send(data);
        });
    });

});

function getValueTypeForData(data) {
    if (typeof data === 'string') {
        return "'" + data + "'";
    } else if (typeof data === 'boolean') {
        return data ? 1 : 0;
    } else {
        return data;
    }
}


function createIfNotExists(res, object) {
    var stmt;
    if (tables.indexOf(res) === -1) {
        stmt = "CREATE TABLE " + res + "(id INTEGER PRIMARY KEY   AUTOINCREMENT";

        Object.keys(object).forEach((key) => {
            stmt += "," + key + " " + typeMap[typeof object[key]];
        });

        stmt += ");";
        tables.push(res);
    }

    return stmt;
}

function getResourceName(value) {
    if (value) {
        return value.toLowerCase();
    }

    return value;
}