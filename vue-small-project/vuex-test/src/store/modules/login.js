export const LOGIN_SUC = 'LOGIN_SUC';
export const SHOW_LOGIN = 'SHOW_LOGIN';
export const LOGIN_OUT = 'LOGIN_OUT';

export default{
	state:{
		mobile:'',
		password:'',
		isShowLogin:false
	},
	actions:{
		addMyInfo({commit},loginInfo){
			commit(LOGIN_SUC,loginInfo)
		},
		showLogin({commit},flag){
			commit(SHOW_LOGIN,flag)
		},
		relogin({commit}){
			commit(LOGIN_OUT)
		}
	},
	mutations:{
		[LOGIN_SUC] (state,loginInfo){
			state.mobile = loginInfo.mobile
			state.password = loginInfo.password
		},
		[SHOW_LOGIN] (state,flag){
			state.isShowLogin = flag
		},
		[LOGIN_OUT] (state){
			state.mobile = ''
			state.password = ''
		}
	},
	getters:{
		getMsg(state){
			let msg = {
				mobile:state.mobile,
				password:state.password
			}
			return msg;
		}
	}
}