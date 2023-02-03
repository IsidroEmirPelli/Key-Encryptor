import { FC, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import KeyInterface from '../../interface/key-interface';
import Key from '../key/key'

const KeyCreator = <P extends object>(Component: FC<{
    keyData: KeyInterface;
    updateKey: (newKey: KeyInterface) => void
}>) => (props: P) => {

    const keyData: KeyInterface = {
        title: '',
        userName: '',
        password: '',
        notes: ''
    }

    const customOnSubmit = (keyData: KeyInterface) => {
        const _keyData: KeyInterface = {
            title: keyData.title,
            userName: keyData.userName,
            password: keyData.password,
            notes: keyData.notes,
        }
        console.log(_keyData)
        axios.post('/api/new_pass', _keyData).then(res => {
            Swal.fire(res.data)
        }).then(err => {
            if (err !== undefined) Swal.fire(`Error\n${err}`)
        })
    }

    return (
        <Component
            {...props}
            keyData={keyData}
            updateKey={customOnSubmit}
        ></Component>
    )
}

export default KeyCreator(Key)
