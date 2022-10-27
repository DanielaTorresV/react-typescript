import { useEffect, useState, useRef } from 'react';
import { reqResApi } from '../api/reqRes';
import { ReqResList, User } from '../interfaces/reqResp.interface';

const Users = () => {

  const [users, setUsers] = useState<User[]>([]);
  
  const refPage = useRef(-1);

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
      refPage.current ++;
    } else {
      alert("No hay más usuarios")
    }
      
  };

  const renderItem = ({id, first_name, last_name, email, avatar}: User) => {
    return(
      <tr key={id}>
        <td>
          <img 
            src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100
            }}
          />
        </td>
        <td>{first_name} {last_name} </td>
        <td>{email}</td>
      </tr>
    )
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(renderItem)
          }
        </tbody>
      </table>
      <button 
        className='btn btn-primary'
        onClick={cargarUsers}
      >
        Siguientes:
      </button>
    </>
  );
};

export default Users;
