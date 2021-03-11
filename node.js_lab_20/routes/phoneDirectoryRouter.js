const { Router } = require('express');
const path = require('path');
const directoryService = require('../services/directoryService');
const router = Router();
const PATH = path.join(__dirname,'../database/items.json')
const uuid = require('uuid');
let items = JSON.parse(directoryService.read(PATH));
let currItem = {};

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Index',
        items: items,
        isIndex: true
    });
})

router.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add',
        items: items,
        isAdd: true
    });
})

router.post('/add', (req, res) => {
    items[items.length] = {"id": uuid.v4(), "name": req.body.name, "telephone": req.body.telephone};
    directoryService.save(PATH, items);
    res.redirect('/');
})

router.get('/update?:id', (req, res) => {
    currItem = items.find(e => e.id == req.query.id);
    res.cookie('itemId', currItem.id).render('update', {
        title: 'Update',
        item: currItem,
        isUpdate: true,
        items: items
    })
})

router.post('/update', (req, res) => {
    const currItemId = items.find(e => e.id == req.cookies.itemId).id;
    const currItemIndex = items.map(e => { return e.id}).indexOf(currItemId);
    items[currItemIndex] = {"id": currItemId, "name": req.body.name, "telephone": req.body.telephone};
    directoryService.save(PATH, items);
    res.clearCookie('itemId').redirect('/');
})

router.post('/delete', (req, res) => {
    items = items.filter(e => e.id != req.cookies.itemId);
    directoryService.save(PATH, items);
    res.clearCookie('itemId').redirect('/');
})

module.exports = router;
