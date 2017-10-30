import React from 'react';
import { Link } from 'react-router';
import Code from '../../subcomponents/code';
import CopyableCommand from '../../react-components/CopyableCommand.js';

class UICopyableCommandReact extends React.Component {

  render() {
    return (
      <div className="wrap">
        <div className="row u-mb-3">
          <div className="columns small-12">
            <h1>Modals</h1>
          </div>
        </div>
        <div className="row u-mb-2">
          <div className="columns small-12">
            <ul className="tabs">
              <li className="tabs-tab tabs-tab-is-active">
                <Link to='/ui-design-system/components/view-modal' className="tabs-tab-link">CSS</Link>
              </li>
              <li className="tabs-tab">
                <Link to='/ui-design-system/components/view-modal/react-view-modal' className="tabs-tab-link">React</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UICopyableCommandReact;