var CartModule = (function(){
    var sum = 0;
    var goods = [];
    return{
        addProguct:function(product){
            sum+=Number(product.price);
            goods.push(product);
        },
        printProducts:function(){
            for(var i =0; i< goods.length; i++){
                console.log(goods[i].name, goods[i].price);
            }
            console.log('---total=',sum);
        }
    }
}());

var products = [
    {
        name:'Salt',
        price:'20'
    },
    {
        name:'Shgugar',
        price:'15'
    },
    {
        name:'Bread',
        price:'100'
    }
];

for(var i=0;i < products.length; i++){
    CartModule.addProguct(products[i]);
}
CartModule.printProducts();
