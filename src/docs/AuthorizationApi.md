# NotehubJs.AuthorizationApi

All URIs are relative to *https://api.notefile.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**login**](AuthorizationApi.md#login) | **POST** /auth/login | 



## login

> Login200Response login(loginRequest)



Gets a session token from the API from a username and password.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';

let apiInstance = new NotehubJs.AuthorizationApi();
let loginRequest = {"username":"name@example.com","password":"test-password"}; // LoginRequest | 
apiInstance.login(loginRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginRequest** | [**LoginRequest**](LoginRequest.md)|  | 

### Return type

[**Login200Response**](Login200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

