import React from "react";

class Dinner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "dinner"
        }
    }

    render() {
        const props = this.props;
        return (
            <div className={this.state.className} onClick={props.onClick}>DINNER</div>
        )
    }
}

export default Dinner;