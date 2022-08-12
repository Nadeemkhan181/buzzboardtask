const mongoose = require('mongoose');

var Orderdata = mongoose.Schema({
    item_name: String,
    cost : Number,
    order_date : Date,
    delivery_date: Date
    });

    const MyModel = mongoose.model('Orders', Orderdata);

module.exports = MyModel;