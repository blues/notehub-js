# NotehubJs.OrganizationApi

All URIs are relative to *https://api.notefile.net*

| Method                                                                                | HTTP request                                                | Description                             |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------------- | --------------------------------------- |
| [**getOrganization**](OrganizationApi.md#getOrganization)                             | **GET** /v1/organizations/{organizationUID}                 | Get an organization                     |
| [**getOrganizationBalanceHistory**](OrganizationApi.md#getOrganizationBalanceHistory) | **GET** /v1/organizations/{organizationUID}/balance-history | Get an organization&#39;s daily balance |
| [**getOrganizations**](OrganizationApi.md#getOrganizations)                           | **GET** /v1/organizations                                   | List your organizations                 |

## getOrganization

> GetOrganization200Response getOrganization(organizationUID)

Get an organization

Get an organization&#39;s name, owner, contact email and current plan. The plan has its type, event capacity, billing period and remaining balance. For the daily history, use &#x60;GetOrganizationBalanceHistory&#x60;. Requires the &#x60;org_admin&#x60;, &#x60;billing_manager&#x60; or &#x60;org_support&#x60; role in the organization. Returns 403 if your membership is deactivated.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.OrganizationApi();
let organizationUID = "00000000-0000-0000-000000000001"; // String | Organization UID. List with `GetOrganizations`.
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

| Name                | Type       | Description                                               | Notes |
| ------------------- | ---------- | --------------------------------------------------------- | ----- |
| **organizationUID** | **String** | Organization UID. List with &#x60;GetOrganizations&#x60;. |

### Return type

[**GetOrganization200Response**](GetOrganization200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrganizationBalanceHistory

> GetOrganizationBalanceHistory200Response getOrganizationBalanceHistory(organizationUID, opts)

Get an organization&#39;s daily balance

Get an organization&#39;s events used and remaining event capacity for each day. The range is &#x60;startDate&#x60; to &#x60;endDate&#x60;, which default to the start of the billing period and today. Requires the &#x60;org_admin&#x60;, &#x60;billing_manager&#x60; or &#x60;org_support&#x60; role in the organization. Returns 400 if &#x60;startDate&#x60; is after &#x60;endDate&#x60;.

### Example

```javascript
import * as NotehubJs from "@blues-inc/notehub-js";
let defaultClient = NotehubJs.ApiClient.instance;
let personalAccessToken = defaultClient.authentications["personalAccessToken"];
personalAccessToken.accessToken = "YOUR ACCESS TOKEN";

let apiInstance = new NotehubJs.OrganizationApi();
let organizationUID = "00000000-0000-0000-000000000001"; // String | Organization UID. List with `GetOrganizations`.
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
| **organizationUID** | **String** | Organization UID. List with &#x60;GetOrganizations&#x60;.       |
| **startDate**       | **Number** | Start date for filtering results, specified as a Unix timestamp | [optional] |
| **endDate**         | **Number** | End date for filtering results, specified as a Unix timestamp   | [optional] |

### Return type

[**GetOrganizationBalanceHistory200Response**](GetOrganizationBalanceHistory200Response.md)

### Authorization

[personalAccessToken](../README.md#personalAccessToken)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getOrganizations

> GetOrganizations200Response getOrganizations()

List your organizations

List the organizations you belong to, with your role in each. A scoped token gets an empty list. Returns 401 if your email address isn&#39;t verified.

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
