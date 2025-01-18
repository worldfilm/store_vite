import axios from "axios";
export  function get(url, params){    
	return new Promise((resolve, reject) =>{        
		axios.get(url, { 
            method:'GET',           
			params: params        
		}).then(res => {
			resolve(res.data);
		}).catch(err =>{
			reject(err.data)        
	})    
});}
export function post(url, params) {
	return new Promise((resolve, reject) => {
		 axios.post(url, QS.stringify(params))
		.then(res => {
			resolve(res.data);
		})
		.catch(err =>{
			reject(err.data)
		})
	});
}