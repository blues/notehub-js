# NotehubJs.AlertApi

All URIs are relative to *https://api.notefile.net*

| Method                                 | HTTP request                                      | Description |
| -------------------------------------- | ------------------------------------------------- | ----------- |
| [**getAlerts**](AlertApi.md#getAlerts) | **GET** /v1/projects/{projectOrProductUID}/alerts |

## getAlerts

> GetAlerts200Response getAlerts(projectOrProductUID, opts)

Get list of defined Alerts

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.AlertApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'pageSize': 50, // Number |
  'pageNum': 1, // Number |
  'monitorUID': "monitorUID_example" // String |
};
apiInstance.getAlerts(projectOrProductUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes                      |
| ----------------------- | ---------- | ----------- | -------------------------- |
| **projectOrProductUID** | **String** |             |
| **pageSize**            | **Number** |             | [optional] [default to 50] |
| **pageNum**             | **Number** |             | [optional] [default to 1]  |
| **monitorUID**          | **String** |             | [optional]                 |

### Return type

[**GetAlerts200Response**](GetAlerts200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
