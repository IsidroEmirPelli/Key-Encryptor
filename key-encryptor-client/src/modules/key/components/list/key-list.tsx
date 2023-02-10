import { FC, useEffect, useState } from 'react';
import AOS from 'aos';
import KeyDataInterface from '../../interface/key-data-interface';
import Key from './key';
import KeyComponentInterface from '../../interface/key-component-interface';
import getKeylist from 'src/modules/user/services/get-keylist';

const KeyList: FC = () => {
    const [keyList, setKeyList] = useState<KeyDataInterface[]>([])
    const [updFlag, setUpdFlag] = useState<boolean>(false)

    useEffect(() => {
        AOS.init()
        setKeyList(getKeylist())
    }, [keyList, updFlag])

    const keyListView = keyList.map((key: KeyDataInterface, index: number) => {
        const keyComponentData: KeyComponentInterface = {
            row: index,
            ...key
        }
        return (<Key keyData={keyComponentData} updFlag={setUpdFlag} />)
    })

    return (
        <div className="w-100 m-auto container">
            <h1 className="h3 mb-3 fw-normal">KEY LIST</h1>
            <table className="table" data-aos="fade-up">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">User name</th>
                        <th scope="col">Password</th>
                        <th scope="col">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {keyListView}
                </tbody>
            </table>
        </div>
    )
}

export default KeyList