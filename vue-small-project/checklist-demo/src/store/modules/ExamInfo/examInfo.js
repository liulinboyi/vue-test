import actions from './actions';
import mutations from './mutation';

export default{
	state:{
		selSubs:'全部科目',
		selHots:'全部',
		selectedExamLists:[],
		allExamLists:[]
	},
	actions:actions,
	mutations:mutations,
}