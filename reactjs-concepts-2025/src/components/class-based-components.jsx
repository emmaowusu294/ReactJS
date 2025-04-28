import { Component } from 'react';

class ClassBasedComponent extends Component {
  //state
  state = {
    showText: true,
    changeColor: true,
    count: 0,
    changeCountStyle: false,
  };

  handleClick = () => {
    // console.log('clicked');
    // this is not recommended
    // this.state.showText = !this.state.showText;

    const { showText, changeColor } = this.state;

    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };

  //componentDidMount--first thing to be done on page load
  //componentDidUpdate--Called immediately after updating occurs. Not called for the initial render.
  //componentWillUnmount

  componentDidMount() {
    console.log('this is the first time on page load');

    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }

  handleCount = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState, this.state);

    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        ...this.state,
        changeCountStyle: true,
      });
    }
  }

  render() {
    // console.log(this.state);

    const { showText, changeColor, count, changeCountStyle } = this.state;
    console.log(changeCountStyle);

    return (
      <div>
        {showText ? (
          <h3>Class Based Components</h3>
        ) : (
          <h3 style={{ color: changeColor ? "black" : "red" }}>
            Changed Text and Colour
          </h3>
        )}

        <button onClick={this.handleClick}>Toggle Text and Color</button>
        <button onClick={this.handleCount}>Increse Count Value</button>
        <h3
          style={{
            color: changeCountStyle ? "red" : "white",
            fontSize: changeCountStyle ? "30px" : "16px",
          }}
        >
          Count is {count}
        </h3>
      </div>
    );
    
  }
  
}

export default ClassBasedComponent;
