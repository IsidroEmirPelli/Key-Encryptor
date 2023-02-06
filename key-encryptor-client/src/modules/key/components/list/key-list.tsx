import { FC, useEffect } from 'react';
import AOS from 'aos';
import KeyDataInterface from '../../interface/key-data-interface';
import Key from '../key/key';
import KeyComponentInterface from '../../interface/key-component-interface';

const KeyList: FC<{keyListData: KeyDataInterface[]}> = ({keyListData}) => {
    useEffect(() => {
        AOS.init()
    }, [])

    const keyListView = keyListData.map((key: KeyDataInterface, index: number) => {
        const keyComponentData: KeyComponentInterface = {
            row: index,
            ...key
        }
        return (
            <Key keyData={keyComponentData} />
        )
    })

    return (
        <div className="w-100 m-auto container">
            <h1 className="h3 mb-3 fw-normal">KEY LIST</h1>

            {/* Tabla donde se muestra la lista de claves */}
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