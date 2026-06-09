# NotehubJs.OrganizationApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                | HTTP request                                                | Description |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| [**getOrganization**](OrganizationApi.md#getOrganization)                             | **GET** /v1/organizations/{organizationUID}                 |
| [**getOrganizationBalanceHistory**](OrganizationApi.md#getOrganizationBalanceHistory) | **GET** /v1/organizations/{organizationUID}/balance-history |
| [**getOrganizations**](OrganizationApi.md#getOrganizations)                           | **GET** /v1/organizations                                   |

## getOrganization

> GetBillingAccount200Response getOrganization(organizationUID)

Get Organization Information

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.OrganizationApi();
let organizationUID = "00000000-0000-0000-000000000001"; // String |
apiInstance.getOrganization(organizationUID).then(
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

| Name                | Type       | Description | Notes |
| ------------------- | ---------- | ----------- | ----- |
| **organizationUID** | **String** |             |

### Return type

[**GetBillingAccount200Response**](GetBillingAccount200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrganizationBalanceHistory

> GetBillingAccountBalanceHistory200Response getOrganizationBalanceHistory(organizationUID, opts)

Get Organization Balance history

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.OrganizationApi();
let organizationUID = "00000000-0000-0000-000000000001"; // String |
let opts = {
  startDate: 1628631763, // Number | Start date for filtering results, specified as a Unix timestamp
  endDate: 1657894210, // Number | End date for filtering results, specified as a Unix timestamp
};
apiInstance.getOrganizationBalanceHistory(organizationUID, opts).then(
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

| Name                | Type       | Description                                                     | Notes      |
| ------------------- | ---------- | --------------------------------------------------------------- | ---------- |
| **organizationUID** | **String** |                                                                 |
| **startDate**       | **Number** | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**         | **Number** | End date for filtering results, specified as a Unix timestamp   | [optional] |

### Return type

[**GetBillingAccountBalanceHistory200Response**](GetBillingAccountBalanceHistory200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrganizations

> GetOrganizations200Response getOrganizations()

Get Organizations accessible by the api_key

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.OrganizationApi();
apiInstance.getOrganizations().then(
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

[**GetOrganizations200Response**](GetOrganizations200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
