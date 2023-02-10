/**
 * Notehub API
 * The OpenAPI definition for the Notehub.io API. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: engineering@blues.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PutDeviceFleetsRequest model module.
 * @module model/PutDeviceFleetsRequest
 * @version 1.0.7
 */
class PutDeviceFleetsRequest {
    /**
     * Constructs a new <code>PutDeviceFleetsRequest</code>.
     * @alias module:model/PutDeviceFleetsRequest
     * @param fleetUids {Array.<String>} The fleetUIDs to add to the device.
     */
    constructor(fleetUids) { 
        
        PutDeviceFleetsRequest.initialize(this, fleetUids);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fleetUids) { 
        obj['fleet_uids'] = fleetUids;
    }

    /**
     * Constructs a <code>PutDeviceFleetsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutDeviceFleetsRequest} obj Optional instance to populate.
     * @return {module:model/PutDeviceFleetsRequest} The populated <code>PutDeviceFleetsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutDeviceFleetsRequest();

            if (data.hasOwnProperty('fleet_uids')) {
                obj['fleet_uids'] = ApiClient.convertToType(data['fleet_uids'], ['String']);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PutDeviceFleetsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PutDeviceFleetsRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PutDeviceFleetsRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['fleet_uids'])) {
            throw new Error("Expected the field `fleet_uids` to be an array in the JSON data but got " + data['fleet_uids']);
        }

        return true;
    }


}

PutDeviceFleetsRequest.RequiredProperties = ["fleet_uids"];

/**
 * The fleetUIDs to add to the device.
 * @member {Array.<String>} fleet_uids
 */
PutDeviceFleetsRequest.prototype['fleet_uids'] = undefined;






export default PutDeviceFleetsRequest;

