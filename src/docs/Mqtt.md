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
**password** | **String** |  | [optional] 
**topic** | **String** |  | [optional] 
**certificate** | **String** | Certificate with \\n newlines.  Field is input only, will not show contents on GET operations. | [optional] 
**certificateName** | **String** | Name of certificate.  If omitted, defaults to \&quot;present\&quot; | [optional] [default to &#39;present&#39;]
**key** | **String** | Key with \\n newlines.  Field is input only, will not show contents on GET operations. | [optional] 
**privateKeyName** | **String** | Name of key.  If omitted, defaults to \&quot;present\&quot; | [optional] [default to &#39;present&#39;]


