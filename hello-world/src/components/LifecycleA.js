import React, { Component } from 'react'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "mukesh"
      }
      console.log('lifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log("lifecycle A getderivedstatefromprops")
        return null
    }
    componentDidMount(){
        console.log("component didmount")
    }
    
  render() {
    console.log("LifecycleA render")
    return (
        
      <div>
        LifecycleArenders
      </div>
    )
  }
}

export default LifecycleA
