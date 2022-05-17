import React, { useEffect, useState } from 'react'

const Lines = () => {
  const [loading, setLoading] = useState({ loading: true })

  useEffect(() => {
    setLoading(false)
  }, [loading])

  return (
    <div className={`container-fluid lines ${!loading ? 'css-anim' : null}`}>
      <div className="row">
        <div className="col" style={{ opacity: 0.1 }}></div>
        <div className="col" style={{ opacity: 0.1 }}></div>
        <div className="col" style={{ opacity: 0.1 }}></div>
        <div className="col" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
        <div className="col d-none d-lg-block" style={{ opacity: 0.1 }}></div>
      </div>
    </div>
  )
}

export default Lines
