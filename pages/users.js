import UserList from "../components/user-list";

export default function Users({usersList}) {
    return(
        <>
            <h1>
                List of Users - {usersList.length}
            </h1>
            {
                usersList.map((user) => {
                    const{id} = user;
                    return (
                        <section key={id} style={{paddingLeft:'2px'}}>
                            <UserList data={user}/>
                        </section>
                    )
                })
            }
        </>
    )
}

// Making API call
export async function getStaticProps() {
    const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await fetchUsers.json();

    return {
        props: {
            usersList: data
        }
    }
}