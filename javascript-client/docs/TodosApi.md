# PactExample.TodosApi

All URIs are relative to *https://jsonplaceholder.typicode.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**todosTodoIdGet**](TodosApi.md#todosTodoIdGet) | **GET** /todos/{todoId} | 


<a name="todosTodoIdGet"></a>
# **todosTodoIdGet**
> Todos todosTodoIdGet(todoId)



### Example
```javascript
var PactExample = require('pact_example');

var apiInstance = new PactExample.TodosApi();

var todoId = 789; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.todosTodoIdGet(todoId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **todoId** | **Number**|  | 

### Return type

[**Todos**](Todos.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

