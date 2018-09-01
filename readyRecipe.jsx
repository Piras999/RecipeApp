import React from "React";

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: "",
            header: "",
            body: ""
        }
    }

    componentDidMount(){
        this.setState((state=> {

        }
        ))
    }


    render() {
        return (
            <div>
                <div className={"dishPicture"}>Tutaj zdjęcie potrawy!!!</div>
                <h1>{this.state.header}Tutaj Nazwa potrawy!!!!</h1>
                <div>{this.state.body}Tutaj całość przepisu!!!</div>
            </div>
        )
    }
}