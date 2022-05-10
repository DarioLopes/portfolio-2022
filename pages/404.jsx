import Letters from '../components/letters'

export default function errorPage() {
  return (
    <div className="page-404">
      <h1 className="title">
        <Letters text="404 | Nothing here..." anim={'letters'} delay={40} />
      </h1>
    </div>
  )
}
