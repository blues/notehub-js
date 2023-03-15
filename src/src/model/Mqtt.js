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
import HttpFilter from './HttpFilter';
import HttpTransform from './HttpTransform';

/**
 * The Mqtt model module.
 * @module model/Mqtt
 * @version 1.0.9
 */
class Mqtt {
    /**
     * Constructs a new <code>Mqtt</code>.
     * Route settings specific to MQTT routes.  Only used for MQTT route types
     * @alias module:model/Mqtt
     */
    constructor() { 
        
        Mqtt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Mqtt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mqtt} obj Optional instance to populate.
     * @return {module:model/Mqtt} The populated <code>Mqtt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Mqtt();

            if (data.hasOwnProperty('fleets')) {
                obj['fleets'] = ApiClient.convertToType(data['fleets'], ['String']);
            }
            if (data.hasOwnProperty('filter')) {
                obj['filter'] = HttpFilter.constructFromObject(data['filter']);
            }
            if (data.hasOwnProperty('transform')) {
                obj['transform'] = HttpTransform.constructFromObject(data['transform']);
            }
            if (data.hasOwnProperty('throttle_ms')) {
                obj['throttle_ms'] = ApiClient.convertToType(data['throttle_ms'], 'Number');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('broker')) {
                obj['broker'] = ApiClient.convertToType(data['broker'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'Number');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('topic')) {
                obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('certificate_name')) {
                obj['certificate_name'] = ApiClient.convertToType(data['certificate_name'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('private_key_name')) {
                obj['private_key_name'] = ApiClient.convertToType(data['private_key_name'], 'String');
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Mqtt</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Mqtt</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['fleets'])) {
            throw new Error("Expected the field `fleets` to be an array in the JSON data but got " + data['fleets']);
        }
        // validate the optional field `filter`
        if (data['filter']) { // data not null
          HttpFilter.validateJSON(data['filter']);
        }
        // validate the optional field `transform`
        if (data['transform']) { // data not null
          HttpTransform.validateJSON(data['transform']);
        }
        // ensure the json data is a string
        if (data['broker'] && !(typeof data['broker'] === 'string' || data['broker'] instanceof String)) {
            throw new Error("Expected the field `broker` to be a primitive type in the JSON string but got " + data['broker']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['topic'] && !(typeof data['topic'] === 'string' || data['topic'] instanceof String)) {
            throw new Error("Expected the field `topic` to be a primitive type in the JSON string but got " + data['topic']);
        }
        // ensure the json data is a string
        if (data['certificate'] && !(typeof data['certificate'] === 'string' || data['certificate'] instanceof String)) {
            throw new Error("Expected the field `certificate` to be a primitive type in the JSON string but got " + data['certificate']);
        }
        // ensure the json data is a string
        if (data['certificate_name'] && !(typeof data['certificate_name'] === 'string' || data['certificate_name'] instanceof String)) {
            throw new Error("Expected the field `certificate_name` to be a primitive type in the JSON string but got " + data['certificate_name']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['private_key_name'] && !(typeof data['private_key_name'] === 'string' || data['private_key_name'] instanceof String)) {
            throw new Error("Expected the field `private_key_name` to be a primitive type in the JSON string but got " + data['private_key_name']);
        }

        return true;
    }


}



/**
 * list of Fleet UIDs to apply route to, if any.  If empty, applies to all Fleets
 * @member {Array.<String>} fleets
 */
Mqtt.prototype['fleets'] = undefined;

/**
 * @member {module:model/HttpFilter} filter
 */
Mqtt.prototype['filter'] = undefined;

/**
 * @member {module:model/HttpTransform} transform
 */
Mqtt.prototype['transform'] = undefined;

/**
 * @member {Number} throttle_ms
 */
Mqtt.prototype['throttle_ms'] = undefined;

/**
 * Timeout in seconds for each request
 * @member {Number} timeout
 * @default 15
 */
Mqtt.prototype['timeout'] = 15;

/**
 * @member {String} broker
 */
Mqtt.prototype['broker'] = undefined;

/**
 * @member {Number} port
 */
Mqtt.prototype['port'] = undefined;

/**
 * @member {String} username
 */
Mqtt.prototype['username'] = undefined;

/**
 * This value is input-only and will be omitted from the response and replaced with a placeholder
 * @member {String} password
 */
Mqtt.prototype['password'] = undefined;

/**
 * @member {String} topic
 */
Mqtt.prototype['topic'] = undefined;

/**
 * Certificate with \\n newlines.  This value is input-only and will be omitted from the response and replaced with a placeholder
 * @member {String} certificate
 */
Mqtt.prototype['certificate'] = undefined;

/**
 * Name of certificate.
 * @member {String} certificate_name
 */
Mqtt.prototype['certificate_name'] = undefined;

/**
 * Key with \\n newlines.  This value is input-only and will be omitted from the response and replaced with a placeholder
 * @member {String} key
 */
Mqtt.prototype['key'] = undefined;

/**
 * Name of key
 * @member {String} private_key_name
 */
Mqtt.prototype['private_key_name'] = undefined;






export default Mqtt;

