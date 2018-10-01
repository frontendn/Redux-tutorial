import React,{Component} from 'react'
import Counter from './counter'

class ControlPanel extends React.Component {
    constructor(props){
        super(props)
        this.onCounterUpdate = this.onCounterUpdate.bind(this)
        this.initValue = [0, 10, 20]
        const initSum = this.initValue.reduce((a,b) => a+b, 0)
        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate (newValue,previousValue) {
        const valueChange = newValue - previousValue
        this.setState({sum: this.state.sum + valueChange})
    }

    render () {
        console.log('enter ControlPanel render')
        return (
            <div>
                <Counter caption="First" onUpdate={this.onCounterUpdate}/>
                {/*<Counter caption="Second" initValue={10}/>*/}
                {/*<Counter caption="Third" initValue={20}/>*/}
                <Counter caption={"Second"} onUpdate={this.onCounterUpdate} initValue={this.initValue[1]}/>
                <Counter caption={"Third"} onUpdate={this.onCounterUpdate} initValue={this.initValue[2]}/>
                <div>Total Count:{this.state.sum}</div>
            </div>
        )
    }
}

export default ControlPanel
