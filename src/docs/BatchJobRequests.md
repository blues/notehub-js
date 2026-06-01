# NotehubJs.BatchJobRequests

## Properties

| Name                             | Type                 | Description                                                          | Notes      |
| -------------------------------- | -------------------- | -------------------------------------------------------------------- | ---------- |
| **comment**                      | **String**           |                                                                      | [optional] |
| **connectivityAssuranceDisable** | **Boolean**          | Disable connectivity assurance for the device                        | [optional] |
| **connectivityAssuranceEnable**  | **Boolean**          | Enable connectivity assurance for the device                         | [optional] |
| **disable**                      | **Boolean**          | Disable the device                                                   | [optional] |
| **enable**                       | **Boolean**          | Enable the device                                                    | [optional] |
| **fleetsToDefault**              | **[String]**         | Fleet UIDs to assign to the device if it has no fleets               | [optional] |
| **fleetsToJoin**                 | **[String]**         | Fleet UIDs to add the device to                                      | [optional] |
| **fleetsToLeave**                | **[String]**         | Fleet UIDs to remove the device from                                 | [optional] |
| **provisionProduct**             | **String**           | Product UID to provision the device with if not already provisioned  | [optional] |
| **snToDefault**                  | **String**           | Set the device serial number only if not already set                 | [optional] |
| **snToSet**                      | **String**           | Set the device serial number (\&quot;-\&quot; to clear)              | [optional] |
| **varsToDefault**                | **{String: String}** | Environment variables to set only if not already set                 | [optional] |
| **varsToSet**                    | **{String: String}** | Environment variables to set (use \&quot;-\&quot; as value to clear) | [optional] |
