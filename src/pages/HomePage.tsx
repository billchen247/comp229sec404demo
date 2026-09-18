import { useState } from 'react'
import heroImg from '../assets/hero.png'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import ProfileCard from '../components/ProfileCard/ProfileCard'

type UserProfile = {
  name: string
  age: string
}

function HomePage() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Alex',
    age: '20',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleClick = function () {
    setCount((prevCount) => prevCount + 1)
  }

  const toggleStatus = function () {
    setIsActive((prevState) => !prevState)
  }

  const handleProfileChange = function (
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
    const { name, value } = event.target

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }))

    if (name === 'name' && value.trim().length < 2) {
      setErrorMessage('Name must be at least 2 characters long.')
      return
    }

    if (name === 'age' && (Number(value) < 1 || Number(value) > 120)) {
      setErrorMessage('Age must be between 1 and 120.')
      return
    }

    setErrorMessage('')
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button type="button" className="counter" onClick={handleClick}>
          Count is {count}
        </button>

        <button type="button" className="counter" onClick={toggleStatus}>
          {isActive ? 'On' : 'Off'}
        </button>

        <div className="counter" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
            />
          </label>

          <label>
            Age:
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleProfileChange}
            />
          </label>

          <p>
            {profile.name} is {profile.age} years old
          </p>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>

        <ProfileCard profile={profile} isActive={isActive} />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default HomePage
