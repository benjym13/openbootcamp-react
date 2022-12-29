import React, { useEffect, useState } from 'react'
import { getAllUsers, getAPegeUsers, getUsersDetail } from '../../services/fetchService'

const FetchExample = () => {
    const [users, setUsers] = useState([]);
    const [usersDetail, setUsersDetail] = useState(null)
    const [page, setPpage] = useState(0)

    const usersPaint = () => {
        getAllUsers()
           /*  .then(response => response.json()) */
            .then( body=> {
                setUsers(body.data)
            })
            .finally(
                console.table(users)
            )
    }
    const userDetail = (id) => {
        getUsersDetail(id)
            .then( info=> {
                setUsersDetail(info.data)
            })
    }

    const obteinPage = (page) => {
        getAPegeUsers(page)
            .then(pages => {
                setUsers(pages.data)
                console.log(pages.data)
            })
            .finally(
                console.log(page.data)
            )
    }
    useEffect(() => {
        usersPaint();
    }, [])

    return (
        <div>
            <h2>Users:</h2>
            <ul>
            {
                users.map((user, index) => {
                    return (
                        <li 
                            key={index}
                            onClick={() => {userDetail(user.id)}}
                        >
                            {user['first_name']} {user['last_name']}
                        </li>
                        )
                    })
                }
                    <button onClick={()=> {obteinPage(1)}}>1</button>
                    <button onClick={()=> {obteinPage(2)}}>2</button>
                </ul>
                { usersDetail != null ?
                    (
                    <div>
                        <h2>Data User</h2>
                        <p>{usersDetail.first_name}</p>
                        <p>{usersDetail.last_name}</p>
                        <p>{usersDetail.email}</p>
                        <img src={usersDetail.avatar} style={{height:'150px',width:'150px'}}/>
                    </div>
                    ) :
                    (
                        <p>No users selected</p>
                    )
                }
        </div>
    )
}

export default FetchExample
