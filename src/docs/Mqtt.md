# NotehubJs.Mqtt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fleets** | **[String]** | list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets | [optional] 
**filter** | [**HttpFilter**](HttpFilter.md) |  | [optional] 
**transform** | [**HttpTransform**](HttpTransform.md) |  | [optional] 
**throttleMs** | **Number** |  | [optional] 
**timeout** | **Number** | Timeout in seconds for each request | [optional] [default to 15]
**broker** | **String** |  | [optional] 
**port** | **Number** |  | [optional] 
**username** | **String** |  | [optional] 
**password** | **String** | This value is input-only and will be omitted from the response and replaced with a placeholder | [optional] 
**topic** | **String** |  | [optional] 
**certificate** | **String** | Certificate with \\n newlines.  This value is input-only and will be omitted from the response and replaced with a placeholder | [optional] 
**certificateName** | **String** | Name of certificate. | [optional] 
**key** | **String** | Key with \\n newlines.  This value is input-only and will be omitted from the response and replaced with a placeholder | [optional] 
**privateKeyName** | **String** | Name of key | [optional] 


