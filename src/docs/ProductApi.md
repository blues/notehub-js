# NotehubJs.ProductApi

All URIs are relative to *https://api.notefile.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProduct**](ProductApi.md#createProduct) | **POST** /v1/projects/{projectUID}/products | 
[**getProjectByProduct**](ProductApi.md#getProjectByProduct) | **GET** /v1/products/{productUID}/project | 
[**getProjectProducts**](ProductApi.md#getProjectProducts) | **GET** /v1/projects/{projectUID}/products | 



## createProduct

> Product createProduct(projectUID, createProductRequest)



Create Product within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProductApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let createProductRequest = new NotehubJs.CreateProductRequest(); // CreateProductRequest | Product to be created
apiInstance.createProduct(projectUID, createProductRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **createProductRequest** | [**CreateProductRequest**](CreateProductRequest.md)| Product to be created | 

### Return type

[**Product**](Product.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProjectByProduct

> Project getProjectByProduct(productUID)



Get a Project by ProductUID

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProductApi();
let productUID = com.blues.airnote; // String | 
apiInstance.getProjectByProduct(productUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productUID** | **String**|  | 

### Return type

[**Project**](Project.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProjectProducts

> GetProjectProducts200Response getProjectProducts(projectUID)



Get Products within a Project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.ProductApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
apiInstance.getProjectProducts(projectUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 

### Return type

[**GetProjectProducts200Response**](GetProjectProducts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

