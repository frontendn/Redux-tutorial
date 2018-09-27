import React,{Component} from 'react'

class SampleButton extends React.Component {

    constructor(props){
        super(props)
        this.onButtonClick = this.onButtonClick.bind(this)
    }

    onButtonClick () {
        console.log('test')
    }

    render () {
        return (
            <div id={"sample"} border={2} onClick={this.onButtonClick} style={{color: "red"}}>
                Click me to re-render!
            </div>
        )
    }
}

export default SampleButton
