import React from "react";

class Supper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "supper"
        }
    }

    render() {
        const props = this.props;
        return (
            <div className={this.state.className} onClick={props.onClick}>SUPPER</div>
        )
    }
}

export default Supper;