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
 * The CreateProductRequest model module.
 * @module model/CreateProductRequest
 * @version 1.0.9
 */
class CreateProductRequest {
    /**
     * Constructs a new <code>CreateProductRequest</code>.
     * @alias module:model/CreateProductRequest
     * @param productUid {String} The requested uid for the Product. Will be prefixed with the user's reversed email.
     * @param label {String} The label for the Product.
     */
    constructor(productUid, label) { 
        
        CreateProductRequest.initialize(this, productUid, label);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, productUid, label) { 
        obj['product_uid'] = productUid;
        obj['label'] = label;
    }

    /**
     * Constructs a <code>CreateProductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProductRequest} obj Optional instance to populate.
     * @return {module:model/CreateProductRequest} The populated <code>CreateProductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProductRequest();

            if (data.hasOwnProperty('product_uid')) {
                obj['product_uid'] = ApiClient.convertToType(data['product_uid'], 'String');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('auto_provision_fleets')) {
                obj['auto_provision_fleets'] = ApiClient.convertToType(data['auto_provision_fleets'], ['String']);
            }
            if (data.hasOwnProperty('disable_devices_by_default')) {
                obj['disable_devices_by_default'] = ApiClient.convertToType(data['disable_devices_by_default'], 'Boolean');
            }
        } else if (data === null) {
            return null;
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProductRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProductRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateProductRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['product_uid'] && !(typeof data['product_uid'] === 'string' || data['product_uid'] instanceof String)) {
            throw new Error("Expected the field `product_uid` to be a primitive type in the JSON string but got " + data['product_uid']);
        }
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['auto_provision_fleets'])) {
            throw new Error("Expected the field `auto_provision_fleets` to be an array in the JSON data but got " + data['auto_provision_fleets']);
        }

        return true;
    }


}

CreateProductRequest.RequiredProperties = ["product_uid", "label"];

/**
 * The requested uid for the Product. Will be prefixed with the user's reversed email.
 * @member {String} product_uid
 */
CreateProductRequest.prototype['product_uid'] = undefined;

/**
 * The label for the Product.
 * @member {String} label
 */
CreateProductRequest.prototype['label'] = undefined;

/**
 * @member {Array.<String>} auto_provision_fleets
 */
CreateProductRequest.prototype['auto_provision_fleets'] = undefined;

/**
 * If `true`, devices provisioned to this product will be automatically disabled by default.
 * @member {Boolean} disable_devices_by_default
 */
CreateProductRequest.prototype['disable_devices_by_default'] = undefined;






export default CreateProductRequest;

