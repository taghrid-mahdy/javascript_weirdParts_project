const jQuery = require('jquery');

(function ($){
    function Greeter (firstName, lastName, language){
        this.firstName = firstName || 'default';
        this.lastName = lastName || 'default';
        this.language = language || 'en';

        console.log("firstName is " + this.firstName + " lastname is " + this.lastName);
    };

    this.getGreeter = function (firstName, lastName, language){
        return new Greeter(firstName, lastName, language);
    };

    var supportedLang = ['en', 'es'];

    var informalGreetings = {
        en : "hello",
        es : "hola"
    }

    var formalGreetings = {
        en : "greetings",
        es : "formal greeting in spanish"
    }

    var logMessages = {
        en : "logged in !!",
        es : "logged in spanish !!"
    }

    getGreeter.prototype = {
        
        getFullName : function(){
            return this.firstName + ' ' + this.lastName
        },
        getinformalGreeting : function(){
            return informalGreetings[this.language] + ' ' + this.getFullName();
        },
        getFormalGreeting : function(){
            return formalGreetings[this.language] + ' ' + this.getFullName()
        },
        greet : function(formal){
            var msg;
            if(formal){
                console.log("this inside the if is: ", this);
                msg = this.getFormalGreeting();
            }
            else {
                msg = this.getinformalGreeting();
            }
            console.log(msg);
            return this;
        },
        logM : function(){
            console.log(logMessages[this.language] + ' : ' + this.getFullName);
            return this; 
        },

        // we will test this function to see if the "if" create a new execution context with 
        // a new this
        changeLang : function(lang){
            this.language = lang;
            return this;
        }
    };



    Greeter.prototype = getGreeter.prototype;


}(jQuery));

var greetObject = getGreeter("john", "do");
greetObject.greet(true);