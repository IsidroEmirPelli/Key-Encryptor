import { FC, useEffect, useState } from 'react';
import uploadKey from '../../services/uploadkey';

const KeyCreator: FC = () => {
    const [title, setTitle] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [notes, setNotes] = useState('')

    useEffect(() => {
    }, [title, username, password, notes])

    return (
        <div className="main">
            <div className="w-100 m-auto container">
                <svg width="144" height="96" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                    <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                    <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
                <h1 className="h3 mb-3 fw-normal">Create Key</h1>

                <div className="col-12 text-start">

                    {/* Title */}
                    <div className="row g-3 mt-1">
                        <div className="input-group">
                            <div className="col-2 text-start">
                                <label htmlFor="title" className="form-label">Title</label>
                            </div>
                            <div className="col-10 text-start">
                                <input type="text" className="form-control" id="title" placeholder="MyTitle" onChange={(e) => { setTitle(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>

                    {/* User Name */}
                    <div className="row g-3 mt-1">
                        <div className="input-group">
                            <div className="col-2 text-start">
                                <label htmlFor="user-name" className="form-label">User Name</label>
                            </div>
                            <div className="col-10 text-start">
                                <input type="text" className="form-control" id="user-name" placeholder="MyUserName" onChange={(e) => { setUsername(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>

                    {/* Password */}
                    <div className="row g-3 mt-1">
                        <div className="input-group">
                            <div className="col-2 text-start">
                                <label htmlFor="password" className="form-label">Password</label>
                            </div>
                            <div className="col-10 text-start">
                                <input type="email" className="form-control" id="password" placeholder="PasswordExample" onChange={(e) => { setPassword(e.target.value) }}></input>
                            </div>
                        </div>
                    </div>

                    {/* Notes */}
                    <div className="row g-3 mt-1">
                        <div className="input-group">
                            <div className="col-2 text-start">
                                <label htmlFor="notes" className="form-label">Notes</label>
                            </div>
                            <div className="col-10 text-start">
                                <textarea className="form-control" id="notes" placeholder="MyKey" onChange={(e) => { setNotes(e.target.value) }}></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Submit Btt */}
                <div className="w-25 mx-auto">
                    <button className="w-100 btn btn-lg btn-primary mt-3" type="submit" onClick={
                        () => { uploadKey({ title: title, username: username, password: password, notes: notes, }) }
                    }>Create Key</button>
                </div>
            </div>
        </div>
    )
};

export default KeyCreator