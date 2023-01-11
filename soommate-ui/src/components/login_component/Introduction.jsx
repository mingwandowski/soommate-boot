import React from "react";

function Introduction() {

    const style = {
        borderTopLeftRadius: ".25rem",
        borderBottomLeftRadius: ".25rem"
    }

    return (
        <div>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="" className="img-fluid"
                style={style}
            />
        </div>
    );
}

export default Introduction;