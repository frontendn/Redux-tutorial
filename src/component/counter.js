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

    shouldComponentUpdate(nextProps,nextState) { //不需要重新渲染initValue
        return (nextProps.caption !== this.state.caption) || (nextState.count !== this.state.count)
    }

    onClickIncrementButton() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.updateCount(true)
    }

    onClickDecrementButton() {
        // this.setState({
        //     count: this.state.count - 1
        // })
        this.updateCount(false)
    }

    updateCount (isIncrement) {
        const previousValue = this.state.count
        const newValue = isIncrement?previousValue +1 : previousValue -1
        this.setState({count: newValue})
        this.props.onUpdate(newValue,previousValue)
    }
    render () {
        const {caption} = this.props
        const buttonStyle = {
            width: '20px',
            height: '20px'
        }
        console.log('enter render' + caption)
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
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
}

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f
}

export default Counter
