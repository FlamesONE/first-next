import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/User.module.scss";

export default function ({user}) {
    return (
        <MainContainer title={`Пользователь - ${user.name}`}>
            <div className={styles.user}>
                <h1>
                    Пользователь {user.name}
                </h1>
                <span>Человек с айди - {user.id}</span>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
  
    return {
        props: {
            user,
        },
    }
}