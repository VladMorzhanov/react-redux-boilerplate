import './Profile.styl'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'
import { profileActions, profileSelectors } from './ducks'
import { appActions } from '../App/ducks'

export class Profile extends React.Component {
  componentDidMount() {
    const { appAsyncAction } = this.props
    appAsyncAction()
  }

  render() {
    const { username, email, fetchUserData } = this.props
    return (
      <div className="profile-page">
        <Header title="Profile Page" />
        <Container title="Profile page content">
          <div>
            <span>Username: </span>
            {username}
          </div>
          <div>
            <span>Email: </span>
            {email}
          </div>
          <div>
            <button
              className="async-action-button"
              type="button"
              onClick={fetchUserData}
            >
              Change user data
            </button>
          </div>
        </Container>
      </div>
    )
  }
}

Profile.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  fetchUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  email: profileSelectors.getEmail(state),
  username: profileSelectors.getUsername(state)
})

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(profileActions.fetchUserData()),
  appAsyncAction: () => dispatch(appActions.startAsyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
