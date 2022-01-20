const models = require('../../models');

exports.get_products = ( _ , res) => {
    models.Products.findAll({
        
    }).then( (products) => {
        res.render('admin/products.html', { products : products })
    });
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    models.Products.create(req.body).then( () =>{
        res.redirect('/admin/products');
    } );
}