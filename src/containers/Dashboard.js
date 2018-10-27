import React from 'react';

import Layout from '../layouts';
import SimpleTeamView from '../components/SimpleTeamView';

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  handleTest = param => {
    let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

    console.log('test');
  }

  render() {
    return (
      <Layout>
        <section className="section-main">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12">
                <SimpleTeamView />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
export default Dashboard;
