const express = require('express');
const MyModel = require('../models/Order');

const router = express.Router();

router.post('/orders/create', async (req, res) => {

    try {

        //In mongodb its always create unique id automatically when we create data, so dont need to check for Duplicates.  

        const { item_name,cost, order_date, delivery_date } = req.body;

        if(item_name != "" && cost != "" && order_date != "" && delivery_date != ""){

        const Postorder = new MyModel({
            item_name : item_name,
            cost : cost,
            order_date : order_date,
            delivery_date: delivery_date
        });

       const order = await Postorder.save();

       res.status(202).json({ message : "Order Created", data : order });
           
    }else{
        res.status(202).json({ message : "All fields are required!" });
    }
             
    } catch (error) {
        res.status(400).json(error.message);
    }
  

});

router.post('/orders/update', async (req, res) => {

    try {
    

        if(req.body.id != "" && req.body.delivery_date != ""){

        const updatedata = {
             delivery_date: req.body.delivery_date
        };

       const order = await MyModel.findByIdAndUpdate(req.body.id, updatedata);

       res.status(202).json({ message : "Order Updated" });

    }else{
        res.json({ message : "All fields are required!" });
    }
             
    } catch (error) {
        res.status(400).json(error.message);
    }
  

});

router.get('/orders/list', async (req, res) => {

    try {
    

       const order = await MyModel.find();

       res.status(202).json({ message : "Orders list", data : order });
           
             
    } catch (error) {
        res.status(400).json(error);
    }
  

});

router.post('/orders/search', async (req, res) => {

    try {
    
        if(req.body.id != ""){

       const order = await MyModel.findById(req.body.id);

       res.status(202).json(order);
    }else{
        res.json({ message : "Please Provide ID To Search Order!" });
    }
             
    } catch (error) {
        res.status(400).json(error.message);
    }
  

});

router.post('/orders/delete', async (req, res) => {

    try {
    
        if(req.body.id != ""){

       const order = await MyModel.findByIdAndDelete(req.body.id);

       if(order){

       res.status(202).json({ message : "Order Deleted!"});
           
       }

    }else{
        res.json({ message : "Please Provide ID To Delete Order!" });
    }
             
    } catch (error) {
        res.status(400).json(error.message);
    }
  

});



module.exports = router;