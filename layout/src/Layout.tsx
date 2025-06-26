import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router'
import { tss } from 'tss-react'

const useStyles = tss.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  header: {
    padding: '1rem',
    background: '#282c34',
    color: '#fff'
  },
  nav: {
    display: 'flex',
    alignItems: 'center'
  },
  link: {
    marginRight: '1rem',
    color: '#fff',
    textDecoration: 'none',
    '&:last-child': {
      marginRight: 0
    }
  },
  main: {
    flex: 1,
    padding: '2rem'
  },
  footer: {
    padding: '1rem',
    background: '#f1f1f1',
    textAlign: 'center' as const
  }
})

export default function App() {
  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <a href='/' className={classes.link}>
            Home
          </a>
          <a href='/about' className={classes.link}>
            About
          </a>
          <a href='/contact' className={classes.link}>
            Contact
          </a>
        </nav>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary
            fallback={<div>Something went wrong loading the page.</div>}
          >
            <Outlet />
          </ErrorBoundary>
        </Suspense>
      </main>
      <footer className={classes.footer}>
        &copy; {new Date().getFullYear()} My Multi Page Site
      </footer>
    </div>
  )
}
