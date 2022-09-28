import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
    // global object containing all info for that particular component
    state = { advise: '' };

    // react have lifecycle i.e every component will render then 
    // componentDidMount is called then componentUpdate and so on
    componentDidMount() {
        this.fetchAdvice()
    }

    //create custom function to fetch advice from the api 
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((response) => {
                // destructuring i.e take out main variable from the response using {} and mentioning variable inside {}
                // example advice from response.data.slip rather than response.data.slip.advice
                const { advice } = response.data.slip;

                //setState is a function which take object as input and set the state
                this.setState({ advice: advice });
                console.log(advice)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        // get the advice from the state object and return the dom
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>Give me advice</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App;
// return the component
