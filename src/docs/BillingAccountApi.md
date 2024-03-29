# NotehubJs.BillingAccountApi

All URIs are relative to *https://api.notefile.net*

| Method                                                            | HTTP request                 | Description |
| ----------------------------------------------------------------- | ---------------------------- | ----------- |
| [**getBillingAccounts**](BillingAccountApi.md#getBillingAccounts) | **GET** /v1/billing-accounts |

## getBillingAccounts

> GetBillingAccounts200Response getBillingAccounts()

Get Billing Accounts accessible by the api_key

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications["api_key"];
api_key.apiKey = "YOUR API KEY";

let apiInstance = new NotehubJs.BillingAccountApi();
apiInstance.getBillingAccounts().then(
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

This endpoint does not need any parameter.

### Return type

[**GetBillingAccounts200Response**](GetBillingAccounts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
