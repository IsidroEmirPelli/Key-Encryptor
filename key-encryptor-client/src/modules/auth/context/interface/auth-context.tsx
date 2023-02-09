import { Dispatch, SetStateAction } from 'react';
import UserInterface from 'src/modules/user/interface/user';

export default interface AuthContextInterface {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;
    user: UserInterface;
    setUser: Dispatch<SetStateAction<UserInterface>>;
} 