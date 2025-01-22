import axios from "axios";
const URL="http://192.168.1.7:3000/"
const http={
	 get:(url, params)=>{  
		return new Promise((resolve, reject) =>{        
			axios.get(URL+url, { 
				method:'GET',           
				params: params        
			}).then(res => {
				resolve(res.data);
			}).catch(err =>{
				reject(err.data)        
		})    
	})},
	 post:(url, params)=> {
		return new Promise((resolve, reject) => {
			 axios.post(URL+url, params)
			.then(res => {
				resolve(res.data);
			})
			.catch(err =>{
				reject(err.data)
			})
		});
	}
}
export default http