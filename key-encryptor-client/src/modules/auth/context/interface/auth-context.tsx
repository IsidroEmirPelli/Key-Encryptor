import { Dispatch, SetStateAction } from 'react';

export default interface AuthContextInterface {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
} 