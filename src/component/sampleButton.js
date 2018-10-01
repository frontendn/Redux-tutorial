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
            <div id={"sample"} onClick={() => this.onButtonClick()} style={{color: "red",borderWidth: 2}}>
                Click me to re-render!
            </div>
        )
    }
}

export default SampleButton
