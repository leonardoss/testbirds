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
      showAll: false,
    }
  }

  toogleAutosuggest = () => {
    this.setState(prevState => ({
      openAutosuggest: !prevState.openAutosuggest
    }));
  };

  toogleShowAll = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll
    }));
  }

  render() {
    const LIMIT_MEMBERS = 2;
    
    return (
      <div>
        <div className="header">
          <h1>Your team for this test</h1>
          <a href="#" className="header-link">
            <span>Team page</span>
            <i className="icon-people"></i>
          </a>
        </div>
        <div className={'body ' + ((this.props.members.length > LIMIT_MEMBERS && !this.state.showAll) ? 'body-showall' : '')}>
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
            <MembersList 
              limitMembers={LIMIT_MEMBERS}
              showAll={this.state.showAll}
              toogleShowAll={this.toogleShowAll} />
          </div>
          {(this.props.members.length > LIMIT_MEMBERS && !this.state.showAll) &&
            <button className="btn-showall" onClick={this.toogleShowAll}>Show All <i className="icon-arrow-down"></i></button>
          }
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
