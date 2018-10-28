import React from 'react';

import Layout from '../layouts';
import SimpleTeamView from '../components/SimpleTeamView';

class Dashboard extends React.Component {
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
