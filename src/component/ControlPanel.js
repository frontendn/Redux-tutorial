import React,{Component} from 'react'
import Counter from './counter'

class ControlPanel extends React.Component {


    render () {
        return (
            <div>
                <Counter caption="First" initValue={0}/>
                <Counter caption="Second" initValue={10}/>
                <Counter caption="Third" initValue={20}/>
            </div>
        )
    }
}

export default ControlPanel
