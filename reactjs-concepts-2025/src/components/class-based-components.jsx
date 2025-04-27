import { Component } from "react";


class ClassBasedComponent extends Component {

    //state
    state = {
        showText : false,
        changeColor : false
    }

    handleClick = () => {
        console.log('clicked');
        // this is not recommended
        // this.state.showText = !this.state.showText;

        const {showText, changeColor} = this.state;

        this.setState({
            showText : !showText,
            changeColor : !changeColor
        })
    }

    render () {

        console.log(this.state);

        const {showText, changeColor} = this.state;
        return  (
            <div>
                {
                    showText ?
                    <h3>Class Based Components</h3>
                     : <h3 style={{color : changeColor ? 'black' : 'red'}}>Changed Text and Colour</h3>
                }
                
                <button onClick={this.handleClick}>Toggle Text and Color</button>
            </div>
        );
    }

}

export default ClassBasedComponent;