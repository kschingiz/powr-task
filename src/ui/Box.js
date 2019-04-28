import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { observer } from "mobx-react";

class Box extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { current, store } = this.props;

    store.changeColor(current);
  }

  render() {
    const { item } = this.props;

    const classes = classnames(
      "item",
      "button",
      "box-button",
      `color-${item.color || "orange"}`
    );
    return (
      <div className={classes} onClick={this.onClick}>
        <span>Box</span>
      </div>
    );
  }
}

Box.propTypes = {
  tree: PropTypes.object
};

export default observer(Box);
