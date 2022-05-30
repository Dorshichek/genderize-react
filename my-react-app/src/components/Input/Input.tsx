import style from './input.module.css'
import React from "react";

class Input extends React.Component<any, any> {

  render() {
    return (
        <><h1 className={style.show}>{this.props.handleChange}</h1>
          <input
              onChange={this.props.onChange}
              className={style.text}
              value={this.props.value}
              type="text"
              name="text"
              id="text"
          />
          {this.props.value.length > 0 && this.props.value.length < 3 && <span>Слишком короткое имя</span>}
        </>
    )
  }
}

export default Input