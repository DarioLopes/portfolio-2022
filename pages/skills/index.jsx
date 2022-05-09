import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import Head from '../../components/head'
import Main from '../../components/main'
import Letters from '../../components/letters'
import { useState } from 'react'

export default function Skills() {
  const [title] = useState('Skills')
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
          <p>skills page!</p>
        </div>
      </div>
    </Main>
  )
}

// export async function getServerSideProps(ctx: GetServerSidePropsContext) {
//   return {
//     props: {},
//   };
// }
