import { User } from '../interfaces/reqResp.interface';
import useUsers from '../hooks/useUsers';

const Users = () => {

  const { users, nextPage, previusPage} = useUsers();
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
        onClick={previusPage}
      >
        Previus Page
      </button>
      &nbsp;
      <button 
        className='btn btn-primary'
        onClick={nextPage}
      >
        Next Page
      </button>
    </>
  );
};

export default Users;
