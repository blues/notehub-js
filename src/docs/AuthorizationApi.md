# NotehubJs.AuthorizationApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                     | HTTP request           | Description                                          |
| -------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------- |
| [**login**](AuthorizationApi.md#login)                                     | **POST** /auth/login   |
| [**oAuth2ClientCredentials**](AuthorizationApi.md#oAuth2ClientCredentials) | **POST** /oauth2/token | Issue an OAuth 2.0 access token (Client Credentials) |

## login

> Login200Response login(loginRequest)

Gets an API key from username and password

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";

let apiInstance = new NotehubJs.AuthorizationApi();
let loginRequest = { password: "test-password", username: "name@example.com" }; // LoginRequest |
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

## oAuth2ClientCredentials

> OAuth2TokenResponse oAuth2ClientCredentials(clientId, clientSecret, grantType, opts)

Issue an OAuth 2.0 access token (Client Credentials)

Exchanges client credentials for an access token. Parameters must be sent as application/x-www-form-urlencoded.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";

let apiInstance = new NotehubJs.AuthorizationApi();
let clientId = "clientId_example"; // String |
let clientSecret = "clientSecret_example"; // String |
let grantType = "grantType_example"; // String |
let opts = {
  scope: "scope_example", // String | Space-delimited scopes.
};
apiInstance
  .oAuth2ClientCredentials(clientId, clientSecret, grantType, opts)
  .then(
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

| Name             | Type       | Description             | Notes      |
| ---------------- | ---------- | ----------------------- | ---------- |
| **clientId**     | **String** |                         |
| **clientSecret** | **String** |                         |
| **grantType**    | **String** |                         |
| **scope**        | **String** | Space-delimited scopes. | [optional] |

### Return type

[**OAuth2TokenResponse**](OAuth2TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json
