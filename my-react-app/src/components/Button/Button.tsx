import React from "react";
import style from './button.module.css'

class Button extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
        <button
            onClick={this.props.handleSubmit}
            className={style.send}
            type="submit"
        >
          Отправить данные
        </button>
    )
  }
}

export default Button