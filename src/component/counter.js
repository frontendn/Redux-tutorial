import React,{Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {

    componentWillMount () {
        console.log('enter componentWillMount' + this.props.caption)
    }

    constructor(props) {
        console.log('enter constructor' + props.caption)
        super(props); //initial Value from the father component

        this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

        this.state = {
            count: this.props.initValue
        }
    }

    componentDidMount () {
        console.log('enter componentDidlMount' + this.props.caption)
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

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
}

Counter.defaultProps = {
    initValue: 0
}

export default Counter
