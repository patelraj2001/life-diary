
import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import AddCardIcon from '@mui/icons-material/AddCard';
const InputBar = (props) => {

    const [ex, setex] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: '',
        done: false,
        xid: new Date().getTime().toString(),
        createTime: new Date().toString().substring(0, 15)
    });

    const event1 = (p) => {
        setex(true);
    }

    const event2 = (p) => {
        setex(false);
        props.passNote(note);
        setNote({
            title: '',
            content: '',
            done: false,
            xid: new Date().getTime().toString(),
            createTime: new Date().toString().substring(0, 15)
        })
    }

    const inputevent = (event) => {

        const { value, name } = event.target;
        setNote((prevdata) => {
            return {
                ...prevdata,
                [name]: value,
            }
        })
    }
    return (<>
        <div style={{ height: "220px" }}>
            <div className="container upperwala">
                <div className=" upperwala2 mw-100">
                    {ex ? (
                        <div id="dis_1none" className="mb-2 ">
                            <input name="title" onChange={inputevent} value={note.title} style={{ border: "none" }} type="text" className="form-control forDisplay w-100" placeholder="Title" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        </div>) : null}

                    <div className="mb-3">
                        <input name="content" onChange={inputevent} value={note.content} style={{ border: "none" }} onClick={event1} className="form-control" id="exampleFormControlInput1" placeholder="Take a Note" />
                    </div>
                    {ex ? (<div id="dis_2none" className="mb-3 ">
                        <label className="form-label d-flex mt-2 "><AddCardIcon className="green_hover" onClick={event2} /></label>
                    </div>) : null}
                </div>
            </div>
        </div>

    </>)
}
export default InputBar;