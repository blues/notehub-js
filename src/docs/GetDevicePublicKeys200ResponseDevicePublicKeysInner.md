# NotehubJs.GetDevicePublicKeys200ResponseDevicePublicKeysInner

## Properties

| Name        | Type        | Description                                                                                | Notes      |
| ----------- | ----------- | ------------------------------------------------------------------------------------------ | ---------- |
| **deleted** | **Boolean** | True if this device has been deleted. Only present when reading with a &#x60;cursor&#x60;. | [optional] |
| **key**     | **String**  | The Notecard&#39;s public key in PEM format. Empty if it hasn&#39;t reported one.          | [optional] |
| **uid**     | **String**  | DeviceUID, e.g. &#x60;dev:864475040509284&#x60;.                                           | [optional] |
