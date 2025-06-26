import { tss } from 'tss-react'

const useStyles = tss.create({ container: { h1: { color: 'orange' } } })

export default function NotSoCoolPage() {
  const { classes } = useStyles()
  return (
    <div className={classes.container}>
      <h1>This is my not so cool page</h1>
    </div>
  )
}
