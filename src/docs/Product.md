# NotehubJs.Product

## Properties

| Name                        | Type         | Description                                                                                                                   | Notes      |
| --------------------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **autoProvisionFleets**     | **[String]** | FleetUIDs that devices are added to when first provisioned with this ProductUID.                                              | [optional] |
| **disableDevicesByDefault** | **Boolean**  | If &#x60;true&#x60;, devices provisioned with this ProductUID start out disabled.                                             |
| **label**                   | **String**   | Product name shown in Notehub.                                                                                                |
| **uid**                     | **String**   | ProductUID, e.g. &#x60;com.blues.bridge:sensors&#x60;. &#x60;GetProducts&#x60; returns it with a &#x60;product:&#x60; prefix. |
