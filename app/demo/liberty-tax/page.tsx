'use client'

import { useState, useRef, useEffect } from 'react'

export default function LibertyTaxDemo() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onLoaded = () => setDuration(audio.duration)
    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime)
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0)
    }
    const onEnded = () => setIsPlaying(false)

    audio.addEventListener('loadedmetadata', onLoaded)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoaded)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    const rect = e.currentTarget.getBoundingClientRect()
    const pct = (e.clientX - rect.left) / rect.width
    audio.currentTime = pct * duration
  }

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  return (
    <div className="demo-page">
      <div className="demo-bg">
        <div className="demo-orb demo-orb-1" />
        <div className="demo-orb demo-orb-2" />
        <div className="demo-grid" />
      </div>

      <div className="demo-content">
        <div className="demo-badge">JINGLE DEMO</div>

        <h1 className="demo-title">Liberty Tax</h1>
        <p className="demo-subtitle">60 Full Sing &amp; Spot Demo</p>

        <div className="demo-player">
          <audio ref={audioRef} src="/audio/LibertyTaxDemo.mp3" preload="metadata" />

          <button className="demo-play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <div className="demo-track-area">
            <div className="demo-track" onClick={seek}>
              <div className="demo-track-fill" style={{ width: `${progress}%` }} />
              <div className="demo-track-thumb" style={{ left: `${progress}%` }} />
            </div>
            <div className="demo-time">
              <span>{formatTime(currentTime)}</span>
              <span>{duration ? formatTime(duration) : '0:00'}</span>
            </div>
          </div>
        </div>

        <p className="demo-cta-text">
          Interested in licensing this jingle for your market?
        </p>
        <a href="mailto:scotty.campbell@yoursonghere.com?subject=Liberty%20Tax%20Jingle%20Interest" className="demo-cta-btn">
          Get in Touch
        </a>

        <div className="demo-footer">
          <p>&copy; {new Date().getFullYear()} YourSongHere &middot; Jeff Arthur Studios</p>
        </div>
      </div>
    </div>
  )
}
