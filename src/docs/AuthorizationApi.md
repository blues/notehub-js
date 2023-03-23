# NotehubJs.AuthorizationApi

All URIs are relative to *https://api.notefile.net*

| Method                                                         | HTTP request           | Description |
| -------------------------------------------------------------- | ---------------------- | ----------- |
| [**generateAuthToken**](AuthorizationApi.md#generateAuthToken) | **POST** /oauth2/token |
| [**login**](AuthorizationApi.md#login)                         | **POST** /auth/login   |

## generateAuthToken

> GenerateAuthToken200Response generateAuthToken(opts)

Gets an OAuth bearer token that lasts for 30 minutes from the API based on a Notehub user and Notehub project.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";

let apiInstance = new NotehubJs.AuthorizationApi();
let opts = {
  grantType: "grantType_example", // String |
  clientId: "clientId_example", // String |
  clientSecret: "clientSecret_example", // String |
};
apiInstance.generateAuthToken(opts).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type       | Description | Notes      |
| ---------------- | ---------- | ----------- | ---------- |
| **grantType**    | **String** |             | [optional] |
| **clientId**     | **String** |             | [optional] |
| **clientSecret** | **String** |             | [optional] |

### Return type

[**GenerateAuthToken200Response**](GenerateAuthToken200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

## login

> Login200Response login(loginRequest)

DEPRECATED. Gets a session token from the API from a username and password.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";

let apiInstance = new NotehubJs.AuthorizationApi();
let loginRequest = { username: "name@example.com", password: "test-password" }; // LoginRequest |
apiInstance.login(loginRequest).then(
  (data) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  },
  (error) => {
    console.error(error);
  }
);
```

### Parameters

| Name             | Type                                | Description | Notes |
| ---------------- | ----------------------------------- | ----------- | ----- |
| **loginRequest** | [**LoginRequest**](LoginRequest.md) |             |

### Return type

[**Login200Response**](Login200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
