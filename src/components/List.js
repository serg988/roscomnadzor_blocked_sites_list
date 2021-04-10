import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles((theme) => ({
  listItem: {
    width: '100%',
    // maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
  },
}))

function ListItemLink(props) {
  return <ListItem button component='a' {...props} />
}

export default function SimpleList(props) {
  const classes = useStyles()

  const handlePageChange = (url) => {
    // window.location.href = "http://" + url
    window.open('http://' + url, '_blank')
  }

  return (
    <div className={classes.listItem}>
      <List component='nav' aria-label='main mailbox folders'>
        {props.data &&
          props.data.map((line) => (
            <ListItemLink
              target='blank'
              key={line}
              onClick={() => handlePageChange(line)}
            >
              <ListItemText primary={line} />
            </ListItemLink>
          ))}
      </List>
    </div>
  )
}
