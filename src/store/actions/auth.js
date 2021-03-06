import { setUserToken, resetUser } from "./user";
import { reqLogin,reqLogout } from '@/api/login'
import {setToken, removeToken} from "@/utils/auth";

export const login = (username, password) => (dispatch) => {
	return new Promise((resolve,reject) =>{
		reqLogin({username,password})
			.then(response =>{
				const {data} = response
				console.log('res',data)
				if(data.status === 0){
					const token = data.token
					dispatch(setUserToken(token))
					setToken(token)
					resolve(data)
				}else {
					const msg = data.message
					reject(msg)
				}
			}).catch((error)=>{
				reject(error)
		})
	})
}
export const logout = (token) => (dispatch) => {
	console.log('111')
	return new Promise((resolve, reject) => {
		console.log('222')
		reqLogout(token)
			.then((response) => {
				const { data } = response;
				if (data.status === 0) {
					dispatch(resetUser());
					removeToken();
					resolve(data);
				} else {
					const msg = data.message;
					reject(msg);
				}
			})
			.catch((error) => {
				reject(error);
			});
	});
};
