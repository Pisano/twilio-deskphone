import './call.scss';
import React, { Component } from 'react';
import moment from 'moment';

class Call extends Component {
  render() {
    const { call } = this.props;
    if (!call.to || !call.from) return null;
    if (call.to.includes('client') || call.from.includes('client')) return null;

    return (
      <div className="call">
        <small>{ moment( call.start_time ).format('lll') } • { call.direction }</small>
        <small>Fee: { call.price ? call.price_unit + call.price : 'None' }</small>
        <small>{call.from}</small>
        → {call.to}
      </div>
    );
  }
}

export default Call;
