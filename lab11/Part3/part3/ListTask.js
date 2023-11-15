import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export const ListTask = ({ todolist, donelist, moveToDoneFn, moveBackFn }) => {
    //  const navigate = useNavigate();
    //   const handleAddBook = () => {
    //     navigate('/tasks');
    //   }

    const moveToDoneList = (e) => {
        console.log(donelist);
        moveToDoneFn(e.target.value);
    }
    const moveBackTodoList = (e) => {
        console.log(donelist);
        moveBackFn(e.target.value);
    }


    return (


        <div>
            <h1>LIST OF TASKS</h1>
            <table className='borderme'>
                <tbody>
                    <tr> <td>
                        <div className='fontcolor'>TODO Tasks</div>
                        <table>
                            <thead><tr><th>Task Id</th><th>Task Name</th><th></th></tr></thead>
                            <tbody>
                                {todolist.map(i => (
                                    <tr key={i.id}>
                                        <td>{i.id}</td>
                                        <td>{i.item}</td>

                                        <td><button onClick={moveToDoneList} value={i.id}> =&gt; </button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </td>


                    <td>
                        <div className='fontcolor'>DONE Tasks</div>
                        <table>
                            <thead><tr><th></th><th>Task Id</th><th>Task Name</th></tr></thead>
                            <tbody>
                                {donelist.map(i => (
                                    <tr key={i.id}>
                                        <td><button onClick={moveBackTodoList} value={i.id}> &lt;= </button></td>
                                        <td>{i.id}</td>
                                        <td>{i.item}</td>

                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </td>


                        
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

