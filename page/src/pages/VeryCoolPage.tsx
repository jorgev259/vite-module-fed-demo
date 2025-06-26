import { tss } from 'tss-react'

const useStyles = tss.create({ container: { h1: { color: 'blue' } } })

export default function VeryCoolPage() {
  const { classes } = useStyles()
  return (
    <div className={classes.container}>
      <h1>This is my very cool page</h1>
    </div>
  )
}
