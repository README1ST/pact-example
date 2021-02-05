var PactExample = require('pact_example');

var api = new PactExample.TodosApi()

var todoId = 1; // {Number}


var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
};
api.todosTodoIdGet(todoId, callback);
