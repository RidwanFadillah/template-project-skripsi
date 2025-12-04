import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // 1. Siapkan variabel buat nampung data
  const [dataBackend, setDataBackend] = useState(null)
  const [loading, setLoading] = useState(true)

  // 2. Fungsi buat ambil data (Fetch) saat halaman dibuka
  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(result => {
        console.log("Data diterima:", result) // Cek di Console browser
        setDataBackend(result)
        setLoading(false)
      })
      .catch(error => {
        console.error("Gagal ambil data:", error)
        setLoading(false)
      })
  }, [])

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Integrasi Frontend & Backend</h1>
      
      <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '10px' }}>
        {loading ? (
          <p>Sedang menghubungkan ke Golang...</p>
        ) : dataBackend ? (
          <>
            <h2 style={{ color: 'green' }}>{dataBackend.status}</h2>
            <p style={{ fontSize: '18px' }}>{dataBackend.message}</p>
          </>
        ) : (
          <p style={{ color: 'red' }}>Gagal koneksi ke Backend :(</p>
        )}
      </div>
    </div>
  )
}

export default App