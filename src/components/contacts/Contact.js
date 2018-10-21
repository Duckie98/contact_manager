import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";

// class component variables
class Contact extends Component {
  // State of Contact
  state = {
    showContactInfo: false
  };

  // // Toggle function
  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  // Delete function
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  // render to browser
  render() {
    const { name, email, phone, id } = this.props.contact; // property
    const { showContactInfo } = this.state; // state
    return (
      <Consumer>
        {value => {
          const { dispatch } = value; // get dispatch from Consumer
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i // arrow button
                  onClick={this.onShowClick}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i // delete button
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem"
                    }}
                  />
                </Link>
              </h4>

              {showContactInfo ? ( // Show info when click arrow
                <ul className="list-group">
                  <li className="list-group-item">{email}</li>
                  <li className="list-group-item">{phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// define the type of variables
Contact.protoTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

// export Contact
export default Contact;
