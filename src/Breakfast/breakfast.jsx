import React from "react";

class Breakfast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "breakfast"
        }
    }

    render() {
        const props = this.props;
        return (
            <div className={this.state.className} onClick={props.onClick}>BREAKFAST</div>
        )
    }
}

export default Breakfast;