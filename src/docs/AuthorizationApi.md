# NotehubJs.AuthorizationApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                     | HTTP request           | Description                                       |
| -------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------- |
| [**oAuth2ClientCredentials**](AuthorizationApi.md#oAuth2ClientCredentials) | **POST** /oauth2/token | Get an access token with OAuth client credentials |

## oAuth2ClientCredentials

> OAuth2TokenResponse oAuth2ClientCredentials(clientId, clientSecret, grantType, opts)

Get an access token with OAuth client credentials

Exchange an OAuth client&#39;s ID and secret for a bearer access token, using the OAuth 2.0 client credentials grant. Send the parameters form-encoded, not as JSON. Returns 401 for a bad client ID or secret, and 403 for a scope the client can&#39;t have.

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
