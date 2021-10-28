import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useEffect, useState } from 'react'
import styles from '../../styles/Credentials.module.css'
import axios from 'axios'


export default function Credentials() {

    const [credentials, setCredentials] = useState()

    useEffect(() => {
        const fetchCredentials = async () => {
            const res = await axios('/api/credentials')
            setCredentials(res.data)
        }
        fetchCredentials()
    }, [])

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
                <code className={styles.code}>Store or recover credentials using name and age in the below forms</code>
            </p>

            <div className={styles.grid}> 

                {credentials?.map(entry => {
                    return (
                        <div className={styles.card} key={entry.name}>
                            <sub>
                                <code>
                                    Name: {entry.name}<br/>
                                    Pass: {entry.password}
                                </code>
                            </sub>
                        </div>
                    )}
                )}
                
            </div>

            <div className={styles.card}>
                <Link href="/">
                    <a>&gt; Go Back</a>
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