import { useState, useRef, useEffect } from 'react';
import { reqResApi } from '../api/reqRes';
import { User, ReqResList } from '../interfaces/reqResp.interface';


const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
  
    const refPage = useRef(1);
  
    useEffect(() => {
      cargarUsers();
    }, [])
  
    const cargarUsers = async () => {
      const resp = await reqResApi.get<ReqResList>('/users', {
        params: {
          page: refPage.current
        }
      })
  
      console.log(refPage.current);
      if (resp.data.data.length > 0) {
        setUsers(resp.data.data);
      } else {
        refPage.current --;
        alert("No hay más usuarios")
      }
        
    };

    const nextPage = () => {
        refPage.current ++;
        cargarUsers();
    }

    const previusPage = () => {
        if (refPage.current > 1) {
            refPage.current --;
            cargarUsers();
        }
    }
  return {
    users,
    nextPage,
    previusPage,
  }
}

export default useUsers
