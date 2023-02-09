import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import KeyComponentInterface from '../../interface/key-component-interface';
import delKey from '../../services/delkey';

const Key: FC<{ keyData: KeyComponentInterface, updFlag: Dispatch<SetStateAction<boolean>> }> = (
    { keyData, updFlag }
) => {
    const nav = useNavigate()

    useEffect(() => {
        AOS.init()
    }, [])

    const delBtt = () => {
        return (<button type="button" className="btn btn-danger" onClick={
            () => { delKey(keyData.title, () => { updFlag(true) }) }
        }>Delete</button>)
    }

    const editBtt = () => {
        return (<button type="button" className="btn btn-warning" onClick={
            () => { nav(`/keyeditor${keyData.title}`, { state: keyData.title}) }
        }>Edit</button>) }

    const renderOptions = () => { return (<div>{delBtt()}{editBtt()}</div>) }

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
            {/* Las clases "d-none d-inline-block" son las que definen que se oculte elemento pero se muestre cuando el mouse se encuentra sobre el contenedor principal */}
            <td><button type="button" className="btn btn-secondary d-none d-inline-block" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content={renderOptions()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear-fill" viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                </svg>
            </button></td>
        </tr>
    )
};

export default Key;