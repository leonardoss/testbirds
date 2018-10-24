import React from 'react';
import { connect } from 'react-redux';
import CustomAutosuggest from './CustomAutosuggest';

import './styles.scss';
import logo from "../../static/images/avatar-default.png";

class SimpleTeamView extends React.Component {
  constructor() {
    super();

    this.state = {
      openAutosuggest: false,
    }
  }

  toogleAutosuggest = () => {
    this.setState(prevState => ({
      openAutosuggest: !prevState.openAutosuggest
    }));
    console.log('toogleAutosuggest', this.state.openAutosuggest);
  };

  render() {
    return (
      <div>
        <p>:{ this.props.newValue }:</p>
        <div className="header">
          <h1>Your team for this test</h1>
          <i className="icon-people"></i>
        </div>
        <div className="body">
          <div className="list">
            
            <div className={'item ' + (this.state.openAutosuggest === true ? 'item-open' : '')}>
              <div 
                className={'button-add ' + (this.state.openAutosuggest === true ? 'hidden' : '')} 
                onClick={this.toogleAutosuggest}
              >
                <div className="box-image">
                  <span className="add">+</span>
                </div>
                <div className="box-content">
                  <h4>
                    Add team member <br/> to this test
                  </h4>
                </div>
              </div>
              <div
                className={'box-autosuggest ' + (this.state.openAutosuggest === true ? 'open' : '')}
              >
                <CustomAutosuggest 
                  openAutosuggest={this.state.openAutosuggest}
                  toogleAutosuggest={this.toogleAutosuggest}
                />
              </div>
            </div>

            {/* <div className="item">
              <div className="box-image">
                <img src={logo} alt="avatar default" />
              </div>
              <div className="box-content">
                <h5>External member <span className="asterisk">*</span></h5>
                <h4>
                  Client Germany
                </h4>
              </div>
            </div>
            <div className="item">
              <div className="box-image">
                <img src={logo} alt="avatar default" />
              </div>
              <div className="box-content">
                <h5>External member <span className="asterisk">*</span></h5>
                <h4>
                  Client Germany
                </h4>
              </div>
            </div> */}
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.MembersReducer.newValue
});

export default connect(mapStateToProps)(SimpleTeamView);
