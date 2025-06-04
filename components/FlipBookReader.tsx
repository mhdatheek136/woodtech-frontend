import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './FlipBookReader.css';

interface FlipBookReaderProps {
  pages: string[];           // Array of page image URLs
  onClose: () => void;       // Callback when close button clicked
}

export default function FlipBookReader({ pages = [], onClose }: FlipBookReaderProps) {
  // Properly type the ref using InstanceType<typeof HTMLFlipBook>
  const bookRef = useRef<InstanceType<typeof HTMLFlipBook> | null>(null);

  const [loaded, setLoaded] = useState<number>(0);
  const [dimensions, setDimensions] = useState<{ vw: number; vh: number }>({
    vw: window.innerWidth,
    vh: window.innerHeight,
  });
  const [fade, setFade] = useState<boolean>(true);
  const [closing, setClosing] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: number;

    const handleResize = () => {
      setFade(false);
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setDimensions({ vw: window.innerWidth, vh: window.innerHeight });
        setFade(true);
      }, 300);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    setLoaded(0);
  }, [pages]);

  const { vw, vh } = dimensions;
  const aspectRatio = 1 / 1.414; // A4 ratio

  const padding = 16;
  const availableWidth = vw - padding * 2;
  const availableHeight = vh - padding * 2;

  let pageHeight = availableHeight;
  let pageWidth = pageHeight * aspectRatio;

  let isSinglePage = false;

  if (pageWidth * 2 > availableWidth) {
    isSinglePage = true;
    if (pageWidth > availableWidth) {
      pageWidth = availableWidth;
      pageHeight = pageWidth / aspectRatio;
    }
  } else {
    pageWidth = Math.min(pageWidth, availableWidth / 2);
    pageHeight = pageWidth / aspectRatio;
  }

  const MIN_WIDTH = 200;
  const MIN_HEIGHT = 280;

  pageWidth = Math.max(pageWidth, MIN_WIDTH);
  pageHeight = Math.max(pageHeight, MIN_HEIGHT);

  const containerWidth = isSinglePage ? pageWidth : pageWidth * 2;
  const containerHeight = pageHeight;

  const totalPages = pages.length;
  const progress = totalPages ? Math.round((loaded / totalPages) * 100) : 100;
  const flipBookKey = `${isSinglePage ? 'single' : 'double'}-${Math.round(containerHeight)}`;

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // match fade-out duration
  };

  if (!totalPages) {
    return (
      <div className={`overlay ${closing ? 'closing' : ''}`}>
        <div className="empty-state">
          <p>No pages to show.</p>
          <button onClick={handleClose} className="btn-close">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`overlay ${closing ? 'closing' : ''}`}>
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
          width: containerWidth,
          height: containerHeight,
          margin: '0 auto',
          maxWidth: '100%',
          maxHeight: '100%',
          opacity: fade ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <header className="book-header">
          <button onClick={handleClose} className="btn-close">
            ✕
          </button>
        </header>

        <div className="book-content">
          <HTMLFlipBook
            key={flipBookKey}
            ref={bookRef}
            width={pageWidth}
            height={pageHeight}
            size="fixed"
            showCover
            drawShadow={false}
            maxShadowOpacity={0.5}
            mobileScrollSupport
            className="flipbook"
            autoSize={false}
            useMouseEvents
            usePortrait={isSinglePage}
          >
            {pages.map((url, i) => (
              <div key={i} className={`page ${i === 0 ? 'cover-page' : 'inner-page'}`}>
                <img
                  src={url}
                  alt={`Page ${i + 1}`}
                  onLoad={() => setLoaded((l) => l + 1)}
                  className="page-image"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}
