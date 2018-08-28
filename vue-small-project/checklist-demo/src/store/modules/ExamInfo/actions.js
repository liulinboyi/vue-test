import * as types from '../../mutation_type'
import * as utils from '../../../common/utils';
export default{
	seleCondition ({commit},obj){
		if(obj.kinds == 'selSub'){
			commit(types.SELECTED_SUB,obj.selectItem)
		}else if(obj.kinds == 'selHot'){
			commit(types.SELECTED_HOT,obj.selectItem)
		}
	},
	initAllExamlists({commit}){
		utils.MlTools.ajax({
		    type:'get',
		    url:'/examlists',
		    success: function(res){
		    	// console.log(res);
		    	commit(types.SELECTED_EXAMLISTS,res)
		    },
		    error: function(err){
		    	console.log(err);
		    }
		})
	}
}