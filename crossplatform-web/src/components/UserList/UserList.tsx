import React from 'react'
import { useGetUsersQuery } from '../../store/api/usersApi'

export const UserList = () => {
    const { data, isLoading, refetch } = useGetUsersQuery({}) // Provide an object with query parameters, e.g., an empty object for no specific parameters

    const handleRefresh = () => {
        refetch()
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h2>User List</h2>
            <button onClick={handleRefresh}>Refresh Data</button>
            <ul>
                {data.map((user) => (
                    <li key={user.id}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    )
}
