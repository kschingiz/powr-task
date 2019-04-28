import React from "react";
import PropTypes from "prop-types";

class CreateButtons extends React.Component {
  constructor(props) {
    super(props);

    this.addBox = this.addBox.bind(this);
    this.addContainer = this.addContainer.bind(this);
  }

  addBox() {
    const item = {
      type: "box"
    };

    this.props.addItem(item);
  }

  addContainer() {
    const item = {
      type: "container"
    };

    this.props.addItem(item);
  }

  render() {
    return (
      <div className="creator">
        <div className="item button add-button" onClick={this.addBox}>
          <span>Box</span>
        </div>
        <div className="item button add-button" onClick={this.addContainer}>
          <span>Container</span>
        </div>
      </div>
    );
  }
}

CreateButtons.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default CreateButtons;
