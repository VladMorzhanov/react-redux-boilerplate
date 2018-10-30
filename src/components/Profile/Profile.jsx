import React from 'react'
import PropTypes from 'prop-types'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import Header from '../shared/Header/Header'
import Container from '../shared/Container/Container'
import { profileActions, profileSelectors } from './ducs'

export class Profile extends React.Component {
  componentDidMount() {
    const { fetchUserData } = this.props
    fetchUserData()
  }

  render() {
    const { username, email } = this.props
    return (
      <>
        <Header title="Profile Page" />
        <Container content="Profile page content">
          <div>
            <span>Username: </span>
            {username}
          </div>
          <div>
            <span>Email: </span>
            {email}
          </div>
        </Container>
      </>
    )
  }
}

Profile.propTypes = {
  email: PropTypes.number.isRequired,
  username: PropTypes.number.isRequired,
  fetchUserData: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  email: createSelector(profileSelectors.getEmail(state)),
  username: createSelector(profileSelectors.getUsername(state))
})

const mapDispatchToProps = dispatch => ({
  fetchUserData: () => dispatch(profileActions.fetchUserData())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
