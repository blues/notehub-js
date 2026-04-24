# NotehubJs.BillingAccountApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                      | HTTP request                                                     | Description |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| [**getBillingAccount**](BillingAccountApi.md#getBillingAccount)                             | **GET** /v1/billing-accounts/{billingAccountUID}                 |
| [**getBillingAccountBalanceHistory**](BillingAccountApi.md#getBillingAccountBalanceHistory) | **GET** /v1/billing-accounts/{billingAccountUID}/balance-history |
| [**getBillingAccounts**](BillingAccountApi.md#getBillingAccounts)                           | **GET** /v1/billing-accounts                                     |

## getBillingAccount

> GetBillingAccount200Response getBillingAccount(billingAccountUID)

Get Billing Account Information

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.BillingAccountApi();
let billingAccountUID = "00000000-0000-0000-000000000001"; // String |
apiInstance.getBillingAccount(billingAccountUID).then(
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

| Name                  | Type       | Description | Notes |
| --------------------- | ---------- | ----------- | ----- |
| **billingAccountUID** | **String** |             |

### Return type

[**GetBillingAccount200Response**](GetBillingAccount200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBillingAccountBalanceHistory

> GetBillingAccountBalanceHistory200Response getBillingAccountBalanceHistory(billingAccountUID, opts)

Get Billing Account Balance history

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.BillingAccountApi();
let billingAccountUID = "00000000-0000-0000-000000000001"; // String |
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
};
apiInstance.getBillingAccountBalanceHistory(billingAccountUID, opts).then(
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

| Name                  | Type       | Description                                                     | Notes      |
| --------------------- | ---------- | --------------------------------------------------------------- | ---------- |
| **billingAccountUID** | **String** |                                                                 |
| **startDate**         | **Number** | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**           | **Number** | End date for filtering results, specified as a Unix timestamp   | [optional] |

### Return type

[**GetBillingAccountBalanceHistory200Response**](GetBillingAccountBalanceHistory200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getBillingAccounts

> GetBillingAccounts200Response getBillingAccounts()

Get Billing Accounts accessible by the api_key

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

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

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
