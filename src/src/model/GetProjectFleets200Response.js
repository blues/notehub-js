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
import Fleet from './Fleet';

/**
 * The GetProjectFleets200Response model module.
 * @module model/GetProjectFleets200Response
 * @version 1.0.10
 */
class GetProjectFleets200Response {
    /**
     * Constructs a new <code>GetProjectFleets200Response</code>.
     * @alias module:model/GetProjectFleets200Response
     * @param fleets {Array.<module:model/Fleet>} 
     */
    constructor(fleets) { 
        
        GetProjectFleets200Response.initialize(this, fleets);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fleets) { 
        obj['fleets'] = fleets;
    }

    /**
     * Constructs a <code>GetProjectFleets200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProjectFleets200Response} obj Optional instance to populate.
     * @return {module:model/GetProjectFleets200Response} The populated <code>GetProjectFleets200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProjectFleets200Response();

            if (data.hasOwnProperty('fleets')) {
                obj['fleets'] = ApiClient.convertToType(data['fleets'], [Fleet]);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProjectFleets200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProjectFleets200Response</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetProjectFleets200Response.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['fleets']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['fleets'])) {
                throw new Error("Expected the field `fleets` to be an array in the JSON data but got " + data['fleets']);
            }
            // validate the optional field `fleets` (array)
            for (const item of data['fleets']) {
                Fleet.validateJsonObject(item);
            };
        }

        return true;
    }


}

GetProjectFleets200Response.RequiredProperties = ["fleets"];

/**
 * @member {Array.<module:model/Fleet>} fleets
 */
GetProjectFleets200Response.prototype['fleets'] = undefined;






export default GetProjectFleets200Response;

