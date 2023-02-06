# NotehubJs.NotesApi

All URIs are relative to *https://api.notefile.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**handleNoteAdd**](NotesApi.md#handleNoteAdd) | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID} | 
[**handleNoteChanges**](NotesApi.md#handleNoteChanges) | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/changes | 
[**handleNoteCreateAdd**](NotesApi.md#handleNoteCreateAdd) | **POST** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID} | 
[**handleNoteDelete**](NotesApi.md#handleNoteDelete) | **DELETE** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID} | 
[**handleNoteGet**](NotesApi.md#handleNoteGet) | **GET** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID} | 
[**handleNoteUpdate**](NotesApi.md#handleNoteUpdate) | **PUT** /v1/projects/{projectUID}/devices/{deviceUID}/notes/{notefileID}/{noteID} | 



## handleNoteAdd

> handleNoteAdd(projectUID, deviceUID, notefileID, note)



Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.NotesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let notefileID = "notefileID_example"; // String | 
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteAdd(projectUID, deviceUID, notefileID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **notefileID** | **String**|  | 
 **note** | [**Note**](Note.md)| Body or payload of note to be added to the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## handleNoteChanges

> HandleNoteChanges200Response handleNoteChanges(projectUID, deviceUID, notefileID, opts)



Incrementally retrieve changes within a specific Notefile.

### Example

```javascript
import NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.NotesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let notefileID = "notefileID_example"; // String | 
let opts = {
  'tracker': "tracker_example", // String | The change tracker ID.
  'max': 56, // Number | The maximum number of Notes to return in the request.
  'start': true, // Boolean | true to reset the tracker to the beginning.
  'stop': true, // Boolean | true to delete the tracker.
  'deleted': true, // Boolean | true to return deleted notes.
  '_delete': true // Boolean | true to delete the notes returned by the request.
};
apiInstance.handleNoteChanges(projectUID, deviceUID, notefileID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **notefileID** | **String**|  | 
 **tracker** | **String**| The change tracker ID. | [optional] 
 **max** | **Number**| The maximum number of Notes to return in the request. | [optional] 
 **start** | **Boolean**| true to reset the tracker to the beginning. | [optional] 
 **stop** | **Boolean**| true to delete the tracker. | [optional] 
 **deleted** | **Boolean**| true to return deleted notes. | [optional] 
 **_delete** | **Boolean**| true to delete the notes returned by the request. | [optional] 

### Return type

[**HandleNoteChanges200Response**](HandleNoteChanges200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## handleNoteCreateAdd

> handleNoteCreateAdd(projectUID, deviceUID, notefileID, noteID, note)



Adds a Note to a Notefile, creating the Notefile if it doesn&#39;t yet exist.

### Example

```javascript
import NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.NotesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let notefileID = "notefileID_example"; // String | 
let noteID = "noteID_example"; // String | 
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteCreateAdd(projectUID, deviceUID, notefileID, noteID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **notefileID** | **String**|  | 
 **noteID** | **String**|  | 
 **note** | [**Note**](Note.md)| Body or payload of note to be added to the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## handleNoteDelete

> handleNoteDelete(projectUID, deviceUID, notefileID, noteID)



Delete a note from a DB notefile

### Example

```javascript
import NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.NotesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let notefileID = "notefileID_example"; // String | 
let noteID = "noteID_example"; // String | 
apiInstance.handleNoteDelete(projectUID, deviceUID, notefileID, noteID).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **notefileID** | **String**|  | 
 **noteID** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## handleNoteGet

> HandleNoteGet200Response handleNoteGet(projectUID, deviceUID, notefileID, noteID, opts)



Get a note from a DB notefile

### Example

```javascript
import NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.NotesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let notefileID = "notefileID_example"; // String | 
let noteID = "noteID_example"; // String | 
let opts = {
  '_delete': true, // Boolean | Whether to delete the note from the DB notefile
  'deleted': true // Boolean | Whether to return deleted notes
};
apiInstance.handleNoteGet(projectUID, deviceUID, notefileID, noteID, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **notefileID** | **String**|  | 
 **noteID** | **String**|  | 
 **_delete** | **Boolean**| Whether to delete the note from the DB notefile | [optional] 
 **deleted** | **Boolean**| Whether to return deleted notes | [optional] 

### Return type

[**HandleNoteGet200Response**](HandleNoteGet200Response.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## handleNoteUpdate

> handleNoteUpdate(projectUID, deviceUID, notefileID, noteID, note)



Update a note in a DB notefile

### Example

```javascript
import NotehubJs from '@blues-inc/notehub-js';
let defaultClient = NotehubJs.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';

let apiInstance = new NotehubJs.NotesApi();
let projectUID = app:2606f411-dea6-44a0-9743-1130f57d77d8; // String | 
let deviceUID = "deviceUID_example"; // String | 
let notefileID = "notefileID_example"; // String | 
let noteID = "noteID_example"; // String | 
let note = new NotehubJs.Note(); // Note | Body or payload of note to be added to the device
apiInstance.handleNoteUpdate(projectUID, deviceUID, notefileID, noteID, note).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectUID** | **String**|  | 
 **deviceUID** | **String**|  | 
 **notefileID** | **String**|  | 
 **noteID** | **String**|  | 
 **note** | [**Note**](Note.md)| Body or payload of note to be added to the device | 

### Return type

null (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

