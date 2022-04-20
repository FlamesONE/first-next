import Link from "next/link";
import MainContainer from "../components/MainContainer";

const users = ({users}) => {
    return (
        <MainContainer title={"Страница с пользователями"}>
            <h1>Страница с пользователями</h1>
            <ul>
                {users.map(user => 
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    return {
        props: {
            users,
        },
    }
}

export default users;