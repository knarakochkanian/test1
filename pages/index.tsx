import Head from 'next/head'
import List from '../components/list/list'


export default function Home() {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div>
                    <List/>
                </div>
            </main>
        </>
    )
}
