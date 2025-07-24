# NotehubJs.WebhookApi

All URIs are relative to *https://api.notefile.net*

| Method                                           | HTTP request                                                        | Description |
| ------------------------------------------------ | ------------------------------------------------------------------- | ----------- |
| [**createWebhook**](WebhookApi.md#createWebhook) | **POST** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}   |
| [**deleteWebhook**](WebhookApi.md#deleteWebhook) | **DELETE** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID} |
| [**getWebhook**](WebhookApi.md#getWebhook)       | **GET** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}    |
| [**getWebhooks**](WebhookApi.md#getWebhooks)     | **GET** /v1/projects/{projectOrProductUID}/webhooks                 |
| [**updateWebhook**](WebhookApi.md#updateWebhook) | **PUT** /v1/projects/{projectOrProductUID}/webhooks/{webhookUID}    |

## createWebhook

> createWebhook(projectOrProductUID, webhookUID, webhookSettings)

Creates a webhook for the specified product with the given name. The name | must be unique within the project.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let webhookSettings = {"settings":{"disabled":false,"id":"Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8","transform":"{\"device\":body.end_device_ids.dev_eui,\"sn\":body.end_device_ids.device_id,\"body\":body.uplink_message.decoded_payload,\"details\":body}"}}; // WebhookSettings |
apiInstance.createWebhook(projectOrProductUID, webhookUID, webhookSettings).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                      | Description | Notes |
| ----------------------- | ----------------------------------------- | ----------- | ----- |
| **projectOrProductUID** | **String**                                |             |
| **webhookUID**          | **String**                                | Webhook UID |
| **webhookSettings**     | [**WebhookSettings**](WebhookSettings.md) |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

## deleteWebhook

> deleteWebhook(projectOrProductUID, webhookUID)

Deletes the specified webhook

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
apiInstance.deleteWebhook(projectOrProductUID, webhookUID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **webhookUID**          | **String** | Webhook UID |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhook

> WebhookSettings getWebhook(projectOrProductUID, webhookUID)

Retrieves the configuration settings for the specified webhook

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
apiInstance.getWebhook(projectOrProductUID, webhookUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |
| **webhookUID**          | **String** | Webhook UID |

### Return type

[**WebhookSettings**](WebhookSettings.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## getWebhooks

> GetWebhooks200Response getWebhooks(projectOrProductUID)

Retrieves all webhooks for the specified project

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
apiInstance.getWebhooks(projectOrProductUID).then((data) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type       | Description | Notes |
| ----------------------- | ---------- | ----------- | ----- |
| **projectOrProductUID** | **String** |             |

### Return type

[**GetWebhooks200Response**](GetWebhooks200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

## updateWebhook

> updateWebhook(projectOrProductUID, webhookUID, webhookSettings)

Updates the configuration settings for the specified webhook. | Webhook will be created if it does not exist. Update body will completely replace the existing settings.

### Example

```javascript
import * as NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.WebhookApi();
let projectOrProductUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String |
let webhookUID = Abc_123-2646f411-dc56-44a0-9743-4130f47a74h8; // String | Webhook UID
let webhookSettings = {"disabled":false,"transform":"{\"device\":body.end_device_ids.dev_eui,\"sn\":body.end_device_ids.device_id,\"body\":body.uplink_message.decoded_payload,\"details\":body}"}; // WebhookSettings |
apiInstance.updateWebhook(projectOrProductUID, webhookUID, webhookSettings).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

| Name                    | Type                                      | Description | Notes |
| ----------------------- | ----------------------------------------- | ----------- | ----- |
| **projectOrProductUID** | **String**                                |             |
| **webhookUID**          | **String**                                | Webhook UID |
| **webhookSettings**     | [**WebhookSettings**](WebhookSettings.md) |             |

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json
