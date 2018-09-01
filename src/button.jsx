import React from "react";

class MainButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainIcons: "mainIcons",
            breakfast: "breakfast",
            dinner: "dinner",
            supper: "supper",
            recipeDiv: "invisible",
            photo: "",
            title: "",
            recipe: "",
            randomBreakfastButton: "invisible",
            randomDinnerButton: "invisible",
            randomSupperButton: "invisible",
            containerForBreakfast: "",
            containerForDinner: "",
            containerForSupper: ""
        }
    }

    buttonClickBreakfast = () => {
        if (this.state.breakfast === "breakfast") {
            fetch(`https://randomfoodapp-7751c.firebaseio.com/breakfasts.json`)
                .then(r => r.json())
                .then(id => {
                    let randomBreakfast = id[Math.floor((Math.random() * id.length))];
                    this.setState({
                        title: randomBreakfast.title,
                        recipe: randomBreakfast.recipe,
                        photo: randomBreakfast.photo
                    })
                });
            this.setState({
                mainIcons: "mainIconsAfterClick",
                breakfast: "afterClickBreakfast",
                dinner: "invisible",
                supper: "invisible",
                randomBreakfastButton: "randomFoodButton",
                recipeDiv: "recipeDiv",
                containerForBreakfast: "containerForFood",
                containerForDinner: "invisible",
                containerForSupper: "invisible"
            });
        } else {
            this.setState({
                mainIcons: "mainIcons",
                breakfast: "breakfast",
                dinner: "dinner",
                supper: "supper",
                randomBreakfastButton: "invisible",
                recipeDiv: "invisible",
                title: "",
                recipe: "",
                photo: "",
                containerForBreakfast: "",
                containerForDinner: "",
                containerForSupper: ""
            });
        }
    };

    randomBreakfastButton = () => {
        fetch('https://randomfoodapp-7751c.firebaseio.com/breakfasts.json')
            .then(r => r.json())
            .then(id => {
                let randomBreakfast = id[Math.floor((Math.random() * id.length))];
                this.setState({
                    title: randomBreakfast.title,
                    recipe: randomBreakfast.recipe,
                    photo: randomBreakfast.photo
                })
            });
    };

    buttonClickDinner = () => {
        if (this.state.dinner === "dinner") {
            fetch('https://randomfoodapp-7751c.firebaseio.com/dinners.json')
                .then(r => r.json())
                .then(id => {
                    let randomDinner = id[Math.floor((Math.random() * id.length))];
                    this.setState({
                        title: randomDinner.title,
                        recipe: randomDinner.recipe,
                        photo: randomDinner.photo
                    })
                });
            this.setState({
                mainIcons: "mainIconsAfterClick",
                breakfast: "invisible",
                dinner: "afterClickDinner",
                supper: "invisible",
                randomDinnerButton: "randomFoodButton",
                recipeDiv: "recipeDiv",
                containerForBreakfast: "invisible",
                containerForDinner: "containerForFood",
                containerForSupper: "invisible"
            });
        } else {
            this.setState({
                mainIcons: "mainIcons",
                breakfast: "breakfast",
                dinner: "dinner",
                supper: "supper",
                randomDinnerButton: "invisible",
                recipeDiv: "invisible",
                title: "",
                recipe: "",
                photo: "",
                containerForBreakfast: "",
                containerForDinner: "",
                containerForSupper: ""
            });
        }
    };

    randomDinnerButton = () => {
        fetch('https://randomfoodapp-7751c.firebaseio.com/dinners.json')
            .then(r => r.json())
            .then(id => {
                let randomDinner = id[Math.floor((Math.random() * id.length))];
                this.setState({
                    title: randomDinner.title,
                    recipe: randomDinner.recipe,
                    photo: randomDinner.photo
                })
            });
    };

    buttonClickSupper = () => {
        if (this.state.supper === "supper") {
            fetch('https://randomfoodapp-7751c.firebaseio.com/suppers.json')
                .then(r => r.json())
                .then(id => {
                    let randomSupper = id[Math.floor((Math.random() * id.length))];
                    this.setState({
                        title: randomSupper.title,
                        recipe: randomSupper.recipe,
                        photo: randomSupper.photo
                    })
                });
            this.setState({
                mainIcons: "mainIconsAfterClick",
                breakfast: "invisible",
                dinner: "invisible",
                supper: "afterClickSupper",
                randomSupperButton: "randomFoodButton",
                recipeDiv: "recipeDiv",
                containerForBreakfast: "invisible",
                containerForDinner: "invisible",
                containerForSupper: "containerForFood"
            });
        } else {
            this.setState({
                mainIcons: "mainIcons",
                breakfast: "breakfast",
                dinner: "dinner",
                supper: "supper",
                randomSupperButton: "invisible",
                recipeDiv: "invisible",
                title: "",
                recipe: "",
                photo: "",
                containerForBreakfast: "",
                containerForDinner: "",
                containerForSupper: ""
            });
        }
    };

    randomSupperButton = () => {
        fetch('https://randomfoodapp-7751c.firebaseio.com/suppers.json')
            .then(r => r.json())
            .then(id => {
                let randomSupper = id[Math.floor((Math.random() * id.length))];
                this.setState({
                    title: randomSupper.title,
                    recipe: randomSupper.recipe,
                    photo: randomSupper.photo
                })
            });
    };

    render() {
        return (
            <div className={this.state.mainIcons}>
                <div className={this.state.containerForBreakfast}>
                    <div className={this.state.breakfast} onClick={this.buttonClickBreakfast}>BREAKFAST</div>
                    <button className={this.state.randomBreakfastButton} onClick={this.randomBreakfastButton}/>
                </div>
                <div className={this.state.containerForDinner}>
                    <div className={this.state.dinner} onClick={this.buttonClickDinner}>DINNER</div>
                    <button className={this.state.randomDinnerButton} onClick={this.randomDinnerButton}/>
                </div>
                <div className={this.state.containerForSupper}>
                    <div className={this.state.supper} onClick={this.buttonClickSupper}>SUPPER</div>
                    <button className={this.state.randomSupperButton} onClick={this.randomSupperButton}/>
                </div>
                <div className={this.state.recipeDiv}>
                    <div className={"dishPicture"} style={{backgroundImage: this.state.photo}}/>
                    <h1 className={"title"}>{this.state.title}</h1>
                    <div className={"recipe"}>{this.state.recipe}</div>
                </div>
            </div>
        )
    }
}

export default MainButton;