import React, { useRef, useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'
import { X as CloseIcon, Download } from 'lucide-react'
import './FlipBookReader.css'

interface FlipBookReaderProps {
  pages: string[]            // Array of page image URLs
  downloadUrl?: string       // Optional URL to download the full PDF (or zip of images)
  onClose: () => void        // Callback when close button clicked
}

export default function FlipBookReader({
  pages = [],
  downloadUrl,
  onClose,
}: FlipBookReaderProps) {
  const bookRef = useRef<InstanceType<typeof HTMLFlipBook> | null>(null)
  const [loaded, setLoaded] = useState(0)
  const [dimensions, setDimensions] = useState({
    vw: window.innerWidth,
    vh: window.innerHeight,
  })
  const [fade, setFade] = useState(true)
  const [closing, setClosing] = useState(false)

  const totalPages = pages.length + 1 // include prompt page

  // Auto-count prompt page once all real pages loaded
  useEffect(() => {
    if (loaded === pages.length) {
      setLoaded((l) => l + 1)
    }
  }, [loaded, pages.length])

  // Handle resize with fade
  useEffect(() => {
    let tid: number
    const onResize = () => {
      setFade(false)
      clearTimeout(tid)
      tid = window.setTimeout(() => {
        setDimensions({ vw: window.innerWidth, vh: window.innerHeight })
        setFade(true)
      }, 300)
    }
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
      clearTimeout(tid)
    }
  }, [])

  // Reset loaded count when pages change
  useEffect(() => setLoaded(0), [pages])

  // Compute sizing (A4 ratio)
  const { vw, vh } = dimensions
  const aspectRatio = 1 / 1.414
  const padding = 16
  const availW = vw - padding * 2
  const availH = vh - padding * 2

  let pageH = availH
  let pageW = pageH * aspectRatio
  let single = false

  if (pageW * 2 > availW) {
    single = true
    if (pageW > availW) {
      pageW = availW
      pageH = pageW / aspectRatio
    }
  } else {
    pageW = Math.min(pageW, availW / 2)
    pageH = pageW / aspectRatio
  }

  const MIN_W = 200, MIN_H = 280
  pageW = Math.max(pageW, MIN_W)
  pageH = Math.max(pageH, MIN_H)

  const containerW = single ? pageW : pageW * 2
  const containerH = pageH

  const progress = totalPages ? Math.round((loaded / totalPages) * 100) : 100
  const key = `${single ? 'single' : 'double'}-${Math.round(containerH)}`

  const handleClose = () => {
    setClosing(true)
    setTimeout(onClose, 300)
  }

  if (!pages.length) {
    return (
      <div className={`overlay ${closing ? 'closing' : ''}`}>
        <div className="empty-state">
          <p>No pages to show.</p>
          <button onClick={handleClose} className="btn-close">
            Close
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`overlay ${closing ? 'closing' : ''}`}>
      {/* Loading overlay until all pages (including prompt) loaded */}
      {loaded < totalPages && (
        <div className="loading-overlay">
          <p className="loading-text">Loading {progress}%</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      <div
        className="book-container"
        style={{
          width: containerW,
          height: containerH,
          margin: '0 auto',
          maxWidth: '100%',
          maxHeight: '100%',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <header className="book-header">
          <div className="header-buttons">
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="btn-download"
                title="Download PDF"
              >
                <Download size={18} />
              </a>
            )}
            <button onClick={handleClose} className="btn-close" title="Close">
              <CloseIcon size={18} />
            </button>
          </div>
        </header>

        <div className="book-content">
          <HTMLFlipBook
            key={key}
            ref={bookRef}
            width={pageW}
            height={pageH}
            size="fixed"
            showCover
            drawShadow={false}
            mobileScrollSupport
            usePortrait={single}
            className="flipbook"
          >
            {pages.map((url, i) => (
              <div
                key={`page-${i}`}
                className={`page ${i === 0 ? 'cover-page' : 'inner-page'}`}
              >
                <img
                  src={url}
                  alt={`Page ${i + 1}`}
                  onLoad={() => setLoaded((l) => l + 1)}
                  className="page-image"
                />
              </div>
            ))}

            {/* Final prompt page */}
            <div className="page inner-page flex items-center justify-center p-6">
              <div className="text-center">
                <p className="font-primary text-lg mb-4">
                  To read the full issue, please download the PDF.
                </p>
                {downloadUrl && (
                  <a
                    href={downloadUrl}
                    download
                    className="inline-flex items-center px-4 py-2 rounded-2xl bg-accent text-white font-primary hover:bg-accent/90 transition-colors"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                )}
              </div>
            </div>
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  )
}
