/*
*  Customer schema 
*  The schema required the book schema as sub document
*/

/*{
    "_id": {
        "$oid": "5b03e7f2fb6fc054638310b6"
    },
    "customer_id": 123,
    "customer_name": "yosso",
    "categories": [
        "action",
        "drama"
    ],
    "books": [
        {
            "book_id": "12d",
            "book_autor": "danny jon",
            "book_cat": "action",
            "book_name": "edge"
        },
        {
            "book_id": "1dd",
            "book_autor": "sandra yel",
            "book_cat": "drame",
            "book_name": "drama book"
        }
    ]
}*/

var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;
    books       = require('./book'); 

var customer = new mongoose.Schema({

    customer_id: {
        type: Number,
        index: 1,
        required: true,
    },
    custoner_name: {
        type: String , 
        required: true
    },
    categories : [String],
    books : [books]
},{collection : 'customers'})

/*
* Exporting the model of the scema 
*/
var Customer = mongoose.model('Customer' , customer);
module.exports = Customer;