import React,{Component} from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props); //initial Value from the father component

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

        this.state = {
            count: [this.props.initValue] || 0
        }
    }

    onClickIncrementButton() {
        this.setState({
            count: this.state.count + 1
        })
    }

    onClickDecrementButton() {
        this.setState({
            count: this.state.count - 1
        })
    }

    render () {
        const {caption} = this.props
        const buttonStyle = {
            width: '20px',
            height: '20px'
        }

        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        )
    }
}

export default Counter
