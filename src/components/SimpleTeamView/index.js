import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import CustomAutosuggest from './CustomAutosuggest';
import MembersList from './Members/MembersList';

import { addMember } from '../../actions';

import './styles.scss';

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
        <div className="header">
          <h1>Your team for this test</h1>
          <a href="#" className="header-link">
            <span>Team page</span>
            <i className="icon-people"></i>
          </a>
        </div>
        <div className="body">
          <div className="list">
            <div className={'item ' + (this.state.openAutosuggest === true ? 'item-open' : '')}>
              <div 
                className={'button-add ' + (this.state.openAutosuggest === true ? 'hidden' : '')} 
                onClick={this.toogleAutosuggest}
              >
                <div className="box-image"><span className="add">+</span></div>
                <div className="box-content">
                  <h4>Add team member <br/> to this test</h4>
                </div>
              </div>
              <div className={'box-autosuggest ' + (this.state.openAutosuggest === true ? 'open' : '')} >
                <CustomAutosuggest 
                  openAutosuggest={this.state.openAutosuggest}
                  toogleAutosuggest={this.toogleAutosuggest}
                />
              </div>
            </div>
            <MembersList />
          </div>
        </div>
      </div>
    );
  }
}

export default compose(connect(store => ({
  members: store.MembersReducer.members
}), {
  ...addMember
}))(SimpleTeamView);
