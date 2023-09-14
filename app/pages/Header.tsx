import React from 'react'

export default function Header() {
    return (
      <header className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/header-bg.jpg)' }}>
        <div className="text-center">
          <h1 className="text-6xl text-white font-bold mb-3 ">SOFTWARE ENGINEER</h1>
          <h1 className="text-6xl text-white mb-8">MOBILE & WEB</h1>
          <h4 className="text-2xl text-white tracking-widest"> Applications mobile, Sites web, Référencement </h4>
        </div>
      </header>
    )
  }
