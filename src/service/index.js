import axios from "axios";
import FormDatax from 'form-data';

class ClientService {

    async Login(email,password){

        const resp = await axios.post("http://192.168.2.108:443/login",{email,password});
        return resp.data;

    }

    async getUser(){
        
        const resp = await axios.get("http://192.168.2.108:443/users",{
            headers:{
                "Authorization":localStorage.getItem("itoken"),
            }
        });
        return resp.data;
    }

    async updateUser(username,email,password,userbio,pic){{

        const formData = new FormData();
        formData.append('userPic',pic);
        
        const resp = await axios.put("http://192.168.2.108:443/users",formData,{
            headers:{
                "Authorization":localStorage.getItem("itoken"),
            }
        });

        return resp.data;

    }}

    async getUserByName(name){

        const resp = await axios.get(`http://192.168.2.108:443/users/${name}`,{
            headers:{
                "Authorization":localStorage.getItem("itoken"),
            }
        });
        return resp.data;

    }

    async register(name,email,password){
        
        const resp = await axios.post("http://192.168.2.108:443/users",{name,email,password});
        return resp.data;

    }

}

export default new ClientService();