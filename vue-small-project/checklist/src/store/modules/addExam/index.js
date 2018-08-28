export const CHECKED_ADD = 'CHECKED_ADD';

export default{
	state:{
		addExam:[]
	},
	actions:{
		confirmExam({commit},loginInfo){
			commit(CHECKED_ADD,loginInfo)
		}
	},
	mutations:{
		[CHECKED_ADD] (state,addExam){
			state.addExam.push([...addExam])
		}
	}
}