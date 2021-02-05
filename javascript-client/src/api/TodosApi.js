/*
 * pact-example
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Todos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Todos'));
  } else {
    // Browser globals (root is window)
    if (!root.PactExample) {
      root.PactExample = {};
    }
    root.PactExample.TodosApi = factory(root.PactExample.ApiClient, root.PactExample.Todos);
  }
}(this, function(ApiClient, Todos) {
  'use strict';

  /**
   * Todos service.
   * @module api/TodosApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TodosApi. 
   * @alias module:api/TodosApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the todosTodoIdGet operation.
     * @callback module:api/TodosApi~todosTodoIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todos} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} todoId 
     * @param {module:api/TodosApi~todosTodoIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Todos}
     */
    this.todosTodoIdGet = function(todoId, callback) {
      var postBody = null;

      // verify the required parameter 'todoId' is set
      if (todoId === undefined || todoId === null) {
        throw new Error("Missing the required parameter 'todoId' when calling todosTodoIdGet");
      }


      var pathParams = {
        'todoId': todoId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Todos;

      return this.apiClient.callApi(
        '/todos/{todoId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));