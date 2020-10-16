import { DND_List as Component } from "../components/App/Profile/DND_List/DND_List"
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { IAction, AddTechnicalSkill, SetTechnicalSkills } from '../actions/DND_ListActions';
import { IStoreState } from '../store';
interface DND_Item {
  id: string;
  content: string;
}
const mapStateToProps = (state: IStoreState) => {
  return {
    technicalSkills: state.profileDndList.technicalSkills,
    technicalSkillsId: state.profileDndList.technicalSkillsId,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
  return {
    addTechnicalSkill: (technicalSkill: DND_Item) => {
      dispatch(AddTechnicalSkill(technicalSkill));
    },
    setTechnicalSkills: (technicalSkillsList: DND_Item[]) => {
      dispatch(SetTechnicalSkills(technicalSkillsList));
    },

  };
};

export const DND_List = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Component);