import React from "react";

function MyContent() {
    return (
        <div className="custom-control custom-checkbox">
            <p><input type="checkbox" value="Item1" className="custom-control-input" id="check1"></input>
                <label className=" custom-control-label" for="check1">Default unchecked</label></p>
            <p><input type="checkbox" value="Item2" className="custom-control-input" id="check2"></input>
                <label className=" custom-control-label" for="check2">Default unchecked</label></p >
            <p><input type="checkbox" value="Item3" className="custom-control-input" id="check3"></input>
                <label className=" custom-control-label" for="check3">Default unchecked</label></p >
            <p><input type="checkbox" value="Item4" className="custom-control-input" id="check4"></input>
                <label className=" custom-control-label" for="check4">Default unchecked</label></p >
        </div >);
}

export default MyContent()