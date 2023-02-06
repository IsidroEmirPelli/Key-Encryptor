import KeyDataInterface from "src/modules/key/interface/key-data-interface";

export default interface UserInterface {
    username: string;
    password: string;
    keyList: KeyDataInterface[]
}