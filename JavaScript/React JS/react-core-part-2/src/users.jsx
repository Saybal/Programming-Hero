import { use } from 'react';

export default function Users({ fetch })
{
    const usersContainer = use(fetch);
    console.log(usersContainer);
    return (
        <div className="card">
            <h3>Users: {usersContainer.length}</h3>
        </div>
    )
}