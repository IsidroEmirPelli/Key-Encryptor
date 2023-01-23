import { FC, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
// import KeyInterface from '../../key-interface/key-interface';

const KeyCreator: FC = () => {
    const [title, setTitle] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [url, setUrl] = useState('')
    const [notes, setNotes] = useState('')

    const addKey = () => {
        axios.post('<api-path>', {}).then(res => {
            Swal.fire(res.data)
        }).then(err => {
            Swal.fire(`Error\n${err}`)
            console.log('LLEGA PRMIERO')
        })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <h2 className="mt-4">CREATE KEY</h2>
            </div>
            <div className="row">
                <div className="col border border">
                    <div className="mt-1">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="title" className="form-label">Title</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="userName" className="form-label">User name</label>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={userName} onChange={(e) => { setUserName(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="password" className="form-label">Password</label>
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="url" className="form-label">Url</label>
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" value={url} onChange={(e) => { setUrl(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                    <div className="mt-1">
                        <div className="row">
                            <div className="col">
                                <label htmlFor="notes" className="form-label">Notes</label>
                            </div>
                            <div className="col">
                                <input type="password" className="form-control" value={notes} onChange={(e) => { setNotes(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>
                    <button onClick={addKey} className="mt-3 mb-3 btn btn-success">Save</button>
                </div>
            </div>
        </div>
    )
}

export default KeyCreator