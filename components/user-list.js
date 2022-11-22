export default function UserList({data}) {
    const{name,email} = data;
    return (
        <>
            <p>
                Name - {name}
            </p>
            <p>
                Email-Id - {email}
            </p>
            <hr/>
        </>
    )
}