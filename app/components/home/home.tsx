import styles from "./home.module.scss";
import { json, useLoaderData } from "@remix-run/react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const loader = async () => {
    try {
        const data = await prisma.user_details.findMany();
        return json(data);
    } catch (error) {
        console.log('error: ', error);
    }

};

const Home = () => {
    const data = useLoaderData<typeof loader>();
    return <>
        <div className={styles.container}>
            <div>
                <h1>Your Table Data</h1>
                <ul>
                    {data.map((item) => (
                        <div key={item.id} className={styles.box}>
                            <li>{item.name}</li>
                            <li>{item.email}</li></div>
                    ))}
                </ul>
            </div>
        </div>
    </>
}

export default Home;