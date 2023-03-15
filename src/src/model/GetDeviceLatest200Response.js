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
import Event from './Event';

/**
 * The GetDeviceLatest200Response model module.
 * @module model/GetDeviceLatest200Response
 * @version 1.0.10
 */
class GetDeviceLatest200Response {
    /**
     * Constructs a new <code>GetDeviceLatest200Response</code>.
     * @alias module:model/GetDeviceLatest200Response
     */
    constructor() { 
        
        GetDeviceLatest200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetDeviceLatest200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetDeviceLatest200Response} obj Optional instance to populate.
     * @return {module:model/GetDeviceLatest200Response} The populated <code>GetDeviceLatest200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDeviceLatest200Response();

            if (data.hasOwnProperty('latest_events')) {
                obj['latest_events'] = ApiClient.convertToType(data['latest_events'], [Event]);
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetDeviceLatest200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetDeviceLatest200Response</code>.
     */
    static validateJSON(data) {
        if (data['latest_events']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['latest_events'])) {
                throw new Error("Expected the field `latest_events` to be an array in the JSON data but got " + data['latest_events']);
            }
            // validate the optional field `latest_events` (array)
            for (const item of data['latest_events']) {
                Event.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * The set of latest events.  Will always include the current \"session.begin\" event.
 * @member {Array.<module:model/Event>} latest_events
 */
GetDeviceLatest200Response.prototype['latest_events'] = undefined;






export default GetDeviceLatest200Response;

