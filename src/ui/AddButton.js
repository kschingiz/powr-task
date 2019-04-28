import React, { Component } from "react";
import PropTypes from "prop-types";

import CreateButtons from "./CreateButtons";

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.props.onAdd(item);
  }

  render() {
    return (
      <div className="item button add-button">
        <span>Add</span>
        <CreateButtons addItem={this.addItem} />
      </div>
    );
  }
}

AddButton.propTypes = {
  parent: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddButton;
