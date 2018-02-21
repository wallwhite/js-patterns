/*******************
 * 
 * singleton
 * 
 * 
 */

 var Singleton = (function(){

    var instance;
    var SERVER = 'localhost';
    function Singleton(){
        if(!instance){
            instance = this;
        } else {
            return instance;
        }
    };
    Singleton.prototype.connect = function(){
        console.log('Connected:' + SERVER);
    }
    return Singleton;
 }());

 var s1 = new Singleton();
 var s2 = new Singleton();

 s2.connect();
 console.log(s1===s2);