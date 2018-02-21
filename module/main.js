/*******************
 * 
 * «Модуль» — это популярная реализация паттерна,
 *  инкапсулирующего приватную информацию,
 *  состояние и структуру, используя замыкания.
 *  Это позволяет оборачивать публичные и приватные методы
 *  и переменные в модули, и предотвращать их попадание в 
 * глобальный контекст, где они могут конфликтовать с интерфейсами 
 * других разработчиков. Паттерн «модуль» возвращает только публичную часть 
 * API, оставляя всё остальное доступным только внутри замыканий.
 * 
 *******************/


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
