import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

import ReactTooltip from 'react-tooltip';

import * as actions from '../../../actions';

class MembersItem extends React.Component {
  handleRemove = (id) => {
    this.props.removeMember(id);
  };

  render() {
    const { item } = this.props;

    return (
      <div className="item item-member">
        <div className="box-image">
          <img src={ require(`../../../static/images/${item.picture}`) } alt={ item.username } />
        </div>
        <div className="box-remove">
          <button className="btn-remove" onClick={ () => this.handleRemove(item.id) } data-tip="Remove user">X</button>
          <ReactTooltip place="top" type="light" effect="solid" className="tooltip" />
        </div>
        <div className="box-content">
          <h5>
            {item.role}
            {' '}
            {item.role !== 'Admin' ? 'member' : ''}
            {item.role == 'External' ? <span className="asterisk">*</span> : ''}
          </h5>
          <h4>{item.username}</h4>
        </div>
      </div>
    );
  }
}

MembersItem.propTypes = {
  item: PropTypes.object,
  removeMember: PropTypes.func,
};

export default compose(connect(store => ({
  members: store.MembersReducer.members,
}), {
  ...actions,
}))(MembersItem);
