import { ProfilePictureMemo as Component } from '../components/App/Profile/ProfilePicture/ProfilePicture'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Dispatch } from 'react'
import { IAction, EditImage } from '../actions/ProfilePictureActions'
import { IStoreState } from '../store'

const mapStateToProps = (state: IStoreState) => {
  return {
    profilePicture: state.profilePicture.imgUrl,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    editImage: (imgUrl: string) => {
      dispatch(EditImage(imgUrl))
    },
  }
}

export const ProfilePicture = compose(connect(mapStateToProps, mapDispatchToProps))(Component)
