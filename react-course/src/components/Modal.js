import { useState } from "react";
function Modal(props) {

function cancelHandler() {
    props.onCancel();
}
function confirmHandler() {
    props.onConfirm();
}



    return (
            <div className="modal">
                <p>are you sure</p> 
                    <button className="btn btn--all" onClick={cancelHandler}>Cancel</button> 
                    <button className="btn" onClick={confirmHandler}>Confirm</button>
              
            </div>

    );
}
export default Modal; 