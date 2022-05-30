import React from "react"

import Input from "../Input/Input"
import Button from "../Button/Button"

import axios from "axios"


class Form extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  async handleSubmit(event) {
    event.preventDefault()
    try {
      const SERVER_URL = 'https://api.genderize.io'
      const name = this.state.value
      const url = `${SERVER_URL}?name=${name}`
      const request = await axios.get(url)
      const response = request.data.gender
      alert(name + ' your gender is ' + response)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const value = this.state.value
    return (
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="">
          <Input
              onChange= {this.handleChange}
              value={value}
          />
        </label>
          <Button
              onClick={this.handleSubmit}
          />
        </form>
    )
  }
}

export default Form