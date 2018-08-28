import * as types from '../../mutation_type';

export default{
	state:{
		addExam:[]
	},
	actions:{
		confirmExam({commit},loginInfo){
			commit(types.CHECKED_ADD,loginInfo)
		}
	},
	mutations:{
		[types.CHECKED_ADD] (state,addExam){
			state.addExam.length = 0;
			state.addExam.push(...addExam);
			
		}
	}
}