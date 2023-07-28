import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import CopyToClipboard from 'react-copy-to-clipboard';
const Message = (props) => {
    const [style, setstyle] = useState();

    const actions = [
        { icon: <CopyToClipboard text={props.title + " " + props.content} ><FileCopyIcon /></CopyToClipboard>, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon onClick={() => { window.print() }} />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    const clicked = () => {
        props.workDone(props.xid);
    }



    const okOrNot = props.done;


    const cardBodyStyle1 = [" linear-gradient(30deg, rgba(243, 255, 217, 0.22), rgba(87, 221, 171, 0.53))", " linear-gradient(30deg, #8b80e74a, #544d5400)"]
    let cardBodyStyle = cardBodyStyle1[1];
    if (okOrNot) { cardBodyStyle = cardBodyStyle1[0] }


    return (<>
        <div className="row row-cols-auto m-2">
            <div className="card p-4 border-0" style={{ width: "18rem" }}>
                <div className="card-body " style={{ backgroundImage: cardBodyStyle }}
                >
                    <h5 className="card-title text-capitalize ">{props.title}</h5><p>{props.content}</p>
                    <div className="speed">
                        <span className="delete_label"> <DeleteSweepIcon onClick={deleteNote} /></span>

                        {okOrNot ? (<Checkbox onClick={clicked} defaultChecked
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} color="success"
                        />) : <Checkbox onClick={clicked}
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                        />}

                        <Box sx={{ height: '70px', transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <SpeedDial
                                ariaLabel="SpeedDial controlled open example"
                                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                icon={<SpeedDialIcon />}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                open={open}
                                direction="up"
                            >
                                {actions.map((action) => (
                                    <SpeedDialAction
                                        key={action.name}
                                        icon={action.icon}
                                        tooltipTitle={action.name}
                                        onClick={handleClose}
                                    />
                                ))}
                            </SpeedDial>
                        </Box>


                    </div>
                </div>

            </div>
        </div>

    </>)
}
export default Message;