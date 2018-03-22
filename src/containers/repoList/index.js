import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DataIcon from '../../components/dataicon';

export class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 5,
    };
  }

  renderResults() {
    // Use lodash map (rather than for loop) to return an item for each search result
    return _.map(this.props.data, repo => (
      <Link
        to={`/repo/${repo.full_name}`}
        key={repo.id} // We have to use key prop with a unique ID (equal to the repo ID from GH)
        className="search-item card mb-3"
      >
        <div className="card-body">
          <h5 className="card-title repo-name">{repo.full_name}</h5>
          <p className="card-text">{repo.description}</p>
          <span className="mr-3">
            <DataIcon
              icon="star"
              count={repo.stargazers_count}
              toK
            />
          </span>
          <span>
            <DataIcon
              icon="code-branch"
              count={repo.forks_count}
              toK
            />
          </span>
        </div>
      </Link>
    ));
  }

  render() {
    if (!this.props.data) {
      return <p className="search-help-text text-center lead">Enter a repo name to get started</p>;
    }

    return (
      <div className="row justify-content-center">
        <div className="col-8">
          {this.state.page}
          <div className="search-results">
            { this.renderResults() }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.github };
}

export default connect(mapStateToProps)(RepoList);
