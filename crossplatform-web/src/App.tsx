import React, { useState } from 'react'
import './App.css'
import { CreateUser } from './components/CreateUser'
import { UserList } from './components/UserList'
import styled from 'styled-components'
import { useGetUsersQuery } from './store/api/usersApi'

function App() {
    const [userPlatform, setUserPlatform] = useState(false)
    const { refetch } = useGetUsersQuery({}) // Get the refetch function from the query

    const handleRefresh = () => {
        refetch() // Call the refetch function to refresh the user data
    }

    // Styling
    const divStyles = {
        backgroundColor: '#f0f0f0',
        padding: '20px',
        border: '1px solid #ccc'
    }

    return (
        <div className="App" style={divStyles}>
            <header className="App-header">
                <button onClick={() => setUserPlatform(!userPlatform)}>
                    Show User Platform
                </button>
                <UserListContainer>
                    {userPlatform ? <UserList /> : <CreateUser />}
                </UserListContainer>
                {/* <button onClick={handleRefresh}>Refresh Data</button>{' '} */}
                {/* Add the button for data refresh */}
            </header>
        </div>
    )
}

export default App

const UserListContainer = styled.div`
    margin: 3px;
    padding: 2px;
    width: 400px;
    align-items: center;
    margin-left: 400px;
`
