import Head from '../../components/head'
import Main from '../../components/main'
import Letters from '../../components/letters'
import { useState } from 'react'

export default function About() {
    const [title] = useState('About')

    return (
        <Main>
            <Head title={title} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 main-title">
                        <h1 className="title">
                            <Letters text={title} anim={'letters'} delay={40} />
                        </h1>
                    </div>
                </div>

                <div className="row">
                    <p>about page!</p>
                </div>
            </div>
        </Main>
    )
}

// export async function getServerSideProps() {
//     return {
//         props: {},
//     }
// }
