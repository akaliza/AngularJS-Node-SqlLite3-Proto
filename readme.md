# Basic AngularJS 1.5.x, NodeJS & SQLLite App

## API

**PUT** URL: domain:9000/api/{entity}

Stores data in table *entity*. If the table does not exists it will be created automatically using fields as column names. Object fields will not be stored
Content: application/json

    {
        field1: "value"
        field2: "value"
        ...
    }

**GET** domain:9000/api/[entity]?page={page}&limit={limit}

- *entity* - table name
- *page* [optional] - page number (starts from 0)
- *limit* [optional] - number of elements to fetch (default 10)

Lists a page of first 10 rows from *entity* database

**GET** domain:9000/api/[entity]/[id]

- *entity* - table name
- *id* - unique identifier

returns entity for *id*

**GET** domain:9000/api/tables

List table names

**DELETE** domain:9000/api/[entity]/[id]

Removes *entity* with unique identifier = *id*

**DELETE** domain:9000/api/[entity]/

Drops table *entity*


**PATCH**  domain:9000/api/[entity]/[id]

Updates *entity* with unique identifier = *id*