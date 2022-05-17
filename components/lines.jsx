import React, { useEffect, useState } from 'react'

const Lines = () => {
  const [loading, setLoading] = useState({ loading: true })

  useEffect(() => {
    setLoading(false)
  }, [loading])

  return (
    <div className={`container-fluid lines ${!loading ? 'css-anim' : null}`} style={{ opacity: 0 }}>
      <div className="row">
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
        <div className="col d-none d-lg-block"></div>
      </div>
    </div>
  )
}

export default Lines
