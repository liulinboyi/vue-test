import * as types from '../../mutation_type';

export default{
	[types.SELECTED_SUB](state,seleItem){
		state.selSubs = seleItem;
		state.selectedExamLists = state.allExamLists.filter((value) => {
			let sub = value.title.match(seleItem),
				hot = value.hotDeg == state.selHots;
			if(seleItem=='全部科目'){
				sub = 1;
			}
			if(state.selHots=='全部'){
				hot = 1;
			}
			return sub && hot;
		})
	},
	[types.SELECTED_HOT](state,seleItem){
		state.selHots = seleItem;
		state.selectedExamLists = state.allExamLists.filter((value) => {
			let hot = value.hotDeg == seleItem ,
				sub = value.title.match(state.selSubs);
			if(!Number(seleItem)){
				hot = 1;
			}
			if(state.selSubs.match('全部')){
				sub = 1;
			}
			return sub && hot;
		})
		
	},
	[types.SELECTED_EXAMLISTS](state,res) {
		state.allExamLists = res.bodyData.slice(0);
		state.selectedExamLists = state.allExamLists.filter((value) => {
			let hot = value.hotDeg == state.selHots ,
				sub = value.title.match(state.selSubs);
			if(state.selSubs=='全部科目'){
				sub = 1;
			}
			if(state.selHots=='全部'){
				hot = 1;
			}
			return sub && hot;
		})
	}
}