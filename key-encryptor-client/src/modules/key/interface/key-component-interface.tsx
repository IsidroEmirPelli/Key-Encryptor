import KeyDataInterface from "./key-data-interface";

/**
 * @prop {number} row - Number of row where the key is placed in the table
 */
export default interface KeyComponentInterface extends KeyDataInterface {
    row: number
}