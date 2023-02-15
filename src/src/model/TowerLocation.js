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
 * The TowerLocation model module.
 * @module model/TowerLocation
 * @version 1.0.8
 */
class TowerLocation {
    /**
     * Constructs a new <code>TowerLocation</code>.
     * @alias module:model/TowerLocation
     */
    constructor() { 
        
        TowerLocation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TowerLocation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TowerLocation} obj Optional instance to populate.
     * @return {module:model/TowerLocation} The populated <code>TowerLocation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TowerLocation();

            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('n')) {
                obj['n'] = ApiClient.convertToType(data['n'], 'String');
            }
            if (data.hasOwnProperty('c')) {
                obj['c'] = ApiClient.convertToType(data['c'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lon')) {
                obj['lon'] = ApiClient.convertToType(data['lon'], 'Number');
            }
            if (data.hasOwnProperty('zone')) {
                obj['zone'] = ApiClient.convertToType(data['zone'], 'String');
            }
            if (data.hasOwnProperty('mcc')) {
                obj['mcc'] = ApiClient.convertToType(data['mcc'], 'Number');
            }
            if (data.hasOwnProperty('mnc')) {
                obj['mnc'] = ApiClient.convertToType(data['mnc'], 'Number');
            }
            if (data.hasOwnProperty('lac')) {
                obj['lac'] = ApiClient.convertToType(data['lac'], 'Number');
            }
            if (data.hasOwnProperty('cid')) {
                obj['cid'] = ApiClient.convertToType(data['cid'], 'Number');
            }
            if (data.hasOwnProperty('l')) {
                obj['l'] = ApiClient.convertToType(data['l'], 'String');
            }
            if (data.hasOwnProperty('z')) {
                obj['z'] = ApiClient.convertToType(data['z'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('towers')) {
                obj['towers'] = ApiClient.convertToType(data['towers'], 'Number');
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TowerLocation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TowerLocation</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['n'] && !(typeof data['n'] === 'string' || data['n'] instanceof String)) {
            throw new Error("Expected the field `n` to be a primitive type in the JSON string but got " + data['n']);
        }
        // ensure the json data is a string
        if (data['c'] && !(typeof data['c'] === 'string' || data['c'] instanceof String)) {
            throw new Error("Expected the field `c` to be a primitive type in the JSON string but got " + data['c']);
        }
        // ensure the json data is a string
        if (data['zone'] && !(typeof data['zone'] === 'string' || data['zone'] instanceof String)) {
            throw new Error("Expected the field `zone` to be a primitive type in the JSON string but got " + data['zone']);
        }
        // ensure the json data is a string
        if (data['l'] && !(typeof data['l'] === 'string' || data['l'] instanceof String)) {
            throw new Error("Expected the field `l` to be a primitive type in the JSON string but got " + data['l']);
        }

        return true;
    }


}



/**
 * @member {Number} time
 */
TowerLocation.prototype['time'] = undefined;

/**
 * Name of the location
 * @member {String} n
 */
TowerLocation.prototype['n'] = undefined;

/**
 * Country code
 * @member {String} c
 */
TowerLocation.prototype['c'] = undefined;

/**
 * @member {Number} lat
 */
TowerLocation.prototype['lat'] = undefined;

/**
 * @member {Number} lon
 */
TowerLocation.prototype['lon'] = undefined;

/**
 * @member {String} zone
 */
TowerLocation.prototype['zone'] = undefined;

/**
 * @member {Number} mcc
 */
TowerLocation.prototype['mcc'] = undefined;

/**
 * @member {Number} mnc
 */
TowerLocation.prototype['mnc'] = undefined;

/**
 * @member {Number} lac
 */
TowerLocation.prototype['lac'] = undefined;

/**
 * @member {Number} cid
 */
TowerLocation.prototype['cid'] = undefined;

/**
 * Open location code
 * @member {String} l
 */
TowerLocation.prototype['l'] = undefined;

/**
 * Timezone ID
 * @member {Number} z
 */
TowerLocation.prototype['z'] = undefined;

/**
 * Number of times this location was recently used
 * @member {Number} count
 */
TowerLocation.prototype['count'] = undefined;

/**
 * Number of triangulation points
 * @member {Number} towers
 */
TowerLocation.prototype['towers'] = undefined;






export default TowerLocation;

