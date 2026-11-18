# NotehubJs.CreateProductRequest

## Properties

| Name                        | Type         | Description                                                                                                                                                  | Notes      |
| --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| **autoProvisionFleets**     | **[String]** | FleetUIDs that devices are added to when first provisioned with this ProductUID.                                                                             | [optional] |
| **disableDevicesByDefault** | **Boolean**  | If &#x60;true&#x60;, devices provisioned with this ProductUID start out disabled.                                                                            | [optional] |
| **label**                   | **String**   | Product name shown in Notehub.                                                                                                                               |
| **productUid**              | **String**   | Suffix of the new ProductUID. Must start with a lowercase letter and contain only lowercase letters, digits, &#x60;.&#x60;, &#x60;\_&#x60; or &#x60;-&#x60;. |
