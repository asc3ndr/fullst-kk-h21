import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import { useState } from 'react'


export default function Home() {

    const [credential, setCredential] = useState(false)

    const storeCredentials = async event => {
        event.preventDefault()
    
        const res = await fetch('/api/credentials', {
            body: JSON.stringify({
                name: event?.target?.store_name?.value,
                password: event?.target?.password?.value
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
    }

    const recoverCredentials = async event => {
        event.preventDefault()

        const name = event?.target?.retrieve_name?.value
    
        const res = await fetch(`/api/credentials/${name}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })

        const result = await res.json()
        setCredential(result)
    }

    return (
    <div className={styles.container}>
        <Head>
            <title>Next.js Oblig</title>
            <meta name="description" content="Webapp Oblig" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Next.js Obligatorisk Innlevering
                </h1>

            <p className={styles.description}>
                Very Safe Password Storage
                <br/>
                <code className={styles.code}>Store or recover credentials using name in the below forms</code>
            </p>

            <div className={styles.grid}>

                <div className={styles.card}> 
                    <h2>Store</h2>
                    <form onSubmit={storeCredentials}>
                        <label htmlFor="store_name">Name</label>
                        <input id="store_name" name="store_name" type="text" autoComplete="name" required />
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="password" autoComplete="password" required />
                        <button type="submit">Store</button>
                    </form>
                </div>

                <div className={styles.card}> 
                    <h2>Recover</h2>
                    <form onSubmit={recoverCredentials}>
                        <label htmlFor="retrieve_name">Name</label>
                        <input id="retrieve_name" name="retrieve_name" type="text" autoComplete="name" required />
                        <button type="submit">Recover</button>
                    </form>
                </div>

            </div>

            <div className={!credential ? styles.hidden : undefined}>
                <p>
                    Name: {credential?.name}<br/>
                    Password: {credential?.password}
                </p>
            </div>

            <div className={styles.card}>
                <Link href="/credentials">
                    <a>&gt; View All Credentials</a>
                </Link>
            </div>

        </main>

        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    </div>
  )
}
