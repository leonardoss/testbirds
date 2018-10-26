import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import MembersItem from './MembersItem';

import * as actions from '../../../actions';

class MembersList extends React.Component {
  
  constructor() {
    super();

    this.state = {
      showAll: false
    }
  }

  listMembers = () => {
    console.log('this.props.members', this.props.members);

    // members.slice(0, 4);
  }
  
  handleShowAll = () => {
    this.setState({
      showAll: true
    });
  }

  render() {
    const { members } = this.props
    const LIMIT_MEMBERS = 5;

    console.log('teste members', members);
    console.log('this.props.members', this.props.members);
    
    return (
      <div>
        {members.slice(0, LIMIT_MEMBERS).map((item, index) => 
          <MembersItem item={item} key={`item_${index + 1}`} />
        )}
        {members.length > LIMIT_MEMBERS &&
          <button className="btn-showall" onClick={this.handleShowAll}>Show All <i className="icon-arrow-down"></i></button>
        }
      </div>
    );
  }
}

MembersList.propTypes = {
  members: PropTypes.array
};

export default compose(connect(store => ({
  members: store.MembersReducer.members
}), {
  ...actions
}))(MembersList);


