import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Message from "./Message";
import Navbar from "./Navbar";
import InputBar from "./InputBar";
import Footer from "./Footer";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const App = () => {
    const [addItem, setIaddtem] = useState(() => {
        const savedItem = localStorage.getItem("addItem");
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
    });
    const [a, seta] = useState(() => {
        if (addItem) {
            return true;
        }
        else {
            return false;
        }
    });

    useEffect(() => {
        localStorage.setItem('addItem', JSON.stringify(addItem));
    }, [addItem]);




    const addNote = (note) => {
        seta(true);
        setIaddtem((prev) => {
            return [...prev, note]
        });


    };

    const onDelete = (id) => {
        if (addItem.length === 1) {
            seta(false);
        }
        setIaddtem((prevdata) =>

            prevdata.filter((curr, inde) => {

                return inde !== id;
            }
            )
        );

    };

    const workdone = (newid) => {
        const newAddItem = addItem.filter((curr) => {
            if (newid === curr.xid) {
                if (curr.done === true) {
                    curr.done = false;
                }
                else {
                    curr.done = true;
                }
            }
            return curr;
        });
        setIaddtem(newAddItem);
    }

    const number = true;

    let confirmAaj = false;
    let prevDate = 0;
    return (<>
        <Navbar size={addItem.length} />
        <hr />
        <div className="container ">
            <InputBar passNote={addNote} />
            {a ? (
                <div className="container bottommargin">
                    <div className="whole container text-center p-md-2 mt-4 d-flex flex-wrap justify-content-center">

                        {addItem.map((value, index) => {
                            const aaj = value.createTime;
                            if (prevDate === 0 || prevDate !== aaj) {

                                confirmAaj = true;
                            }
                            else if (prevDate === aaj) {
                                confirmAaj = false;
                            }
                            prevDate = aaj;
                            return <>

                                {confirmAaj ? (
                                    <>
                                        <div style={{ width: "100%", textAlign: "start", margin: "21px", marginBottom: "0" }}>

                                            <h1 style={{
                                                fontSize: '32px', color: "rgb(0, 0, 0)", fontFamily: "Bungee Hairline"
                                            }}>{aaj}<hr /></h1>
                                        </div>
                                    </>
                                ) : null}


                                <Message

                                    key={index}
                                    id={index}
                                    xid={value.xid}
                                    title={value.title}
                                    content={value.content}
                                    deleteItem={onDelete}
                                    done={value.done}
                                    workDone={workdone}
                                />

                            </>
                        })
                        }
                    </div>
                </div>
            ) : <div className="keepNoteHere">
                <h1 className="d-flex justify-content-center text-center fs-1 text-muted">Keep Your Note Here <span><AppRegistrationIcon className="fs-1" /></span></h1>
            </div>}
        </div>

        <Footer />
    </>)
}
export default App;