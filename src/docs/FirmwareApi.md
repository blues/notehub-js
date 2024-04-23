# NotehubJs.FirmwareApi

All URIs are relative to *https://api.notefile.net*

| Method                                                | HTTP request                               | Description |
| ----------------------------------------------------- | ------------------------------------------ | ----------- |
| [**getFirmwareInfo**](FirmwareApi.md#getFirmwareInfo) | **GET** /v1/projects/{projectUID}/firmware |

## getFirmwareInfo

> [FirmwareInfo] getFirmwareInfo(projectUID, opts)

Get Available Firmware Information

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.FirmwareApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let opts = {
  'productUID': "productUID_example", // String |
  'firmwareType': "firmwareType_example", // String |
  'version': "version_example", // String |
  'target': "target_example", // String |
  'filename': notecard-7.2.2.16518$20240410043100.bin, // String |
  'md5': "md5_example", // String |
  'unpublished': true // Boolean |
};
apiInstance.getFirmwareInfo(projectUID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name             | Type        | Description | Notes      |
| ---------------- | ----------- | ----------- | ---------- |
| **projectUID**   | **String**  |             |
| **productUID**   | **String**  |             | [optional] |
| **firmwareType** | **String**  |             | [optional] |
| **version**      | **String**  |             | [optional] |
| **target**       | **String**  |             | [optional] |
| **filename**     | **String**  |             | [optional] |
| **md5**          | **String**  |             | [optional] |
| **unpublished**  | **Boolean** |             | [optional] |

### Return type

[**[FirmwareInfo]**](FirmwareInfo.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
