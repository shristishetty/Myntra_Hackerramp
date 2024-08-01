import React, { useState } from 'react';
import readyPlayerMeService from '../../services/readyPlayerMeService';

const CreateUserComponent = () => {
    const [userToken, setUserToken] = useState(null);
    const [error, setError] = useState(null);

    const handleCreateUser = async () => {
        try {
            const userData = await readyPlayerMeService.createAnonymousUser();
            setUserToken(userData.token);
        } catch (error) {
            setError('Failed to create user');
        }
    };

    return (
        <div>
            <button onClick={handleCreateUser}>Create Anonymous User</button>
            {userToken && (
                <div>
                    <p>User Token:</p>
                    <pre>{userToken}</pre>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default CreateUserComponent;
