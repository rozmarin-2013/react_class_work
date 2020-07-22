const ReactElement = React.createElement(
    'button',
    null,
    'My button from class'
);

/*function ReactComponent() {
    return ReactElement;
}*/

/*
class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (ReactElement);
    }
}

ReactDOM.render(
    React.createElement(ReactComponent),
    document.getElementById('react_button')
);
*/

/*
ReactDOM.render(
    ReactElement,
    document.getElementById('react_button')
);*/


/*
    Создание элемента с помощью JSX
*/

/*
class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<button>JSX button</button>);
    }
}
*/
/*
    События
 */
/*
function ReactComponent({text}) {

    function clickHandler(name) {
        alert(`Hello ${name}`);
    }

    function changeHandler(event) {
        console.log(event.currentTarget.value);
    }

    return (
        <div>
            <button onClick={() => clickHandler('Mari')}>
                {props.text}
            </button>

            <input onChange= {changeHandler} type="text" />
        </div>);
}
*/

class ReactComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'default'};

        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }


    clickHandler(name) {
        alert(`Hello ${name}`);
    }

    changeHandler(event) {
        this.setState((state, props) => ({text: 'state text ' + state.text + ' props' + props.text}));
        console.log(event.currentTarget.value);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.clickHandler('Mari')}>
                    {this.props.text}
                </button>

                <input onChange= {this.changeHandler} type="text" />
                <br/>
                {this.state.text}
            </div>);
    }
}

ReactDOM.render(<ReactComponent text='text'/>, document.getElementById('react_button'));
