import { FC, useEffect } from 'react';
import AOS from 'aos';
import KeyComponentInterface from '../../interface/key-component-interface';

const Key: FC<{keyData: KeyComponentInterface}> = ({keyData}) => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <tr data-aos="fade-left">
            <th scope="row">{keyData.row}</th>
            <td>
                <button type="button" className="btn btn-outline-info">
                    <svg width="14" height="9" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                </button>
            </td>
            <td>{keyData.title}</td>
            <td>{keyData.username}</td>
            <td>{keyData.password}</td>
            <td>{keyData.notes}</td>
        </tr>
    )
};

export default Key;