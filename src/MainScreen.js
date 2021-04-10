import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'

import List from './components/List'
import Header from './components/Header'

const useStyles = makeStyles((theme) => ({
  list: {
    width: '95%',
    paddingLeft: '3%',
    overflow: 'hidden',
    paddingTop: 70,
  },
  header: {
    position: 'absolute',
    zIndex: 1,
  },
}))

const MainScreen = () => {
  const classes = useStyles()
  const [rowList, setRowList] = useState([])
  const [sitesList, setSitesList] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://reestr.rublacklist.net/api/v2/domains/json/'
      )
      setRowList(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = () => {
      const filteredList = rowList.filter((site) =>
        site.toLowerCase().includes(search)
      )
      setSitesList(filteredList)
      // localStorage.setItem('blockedSitesList', JSON.stringify(filteredList))
    }
    fetchData()
  }, [search])

  const searchHandler = (searchInput) => {
    setSearch(searchInput)
  }

  const clearAllHandler = () => {
    setSearch('')
  }

  return (
    <>
      <div className={classes.header}>
        <Header search={searchHandler} clearAll={clearAllHandler} />
      </div>
      {sitesList && sitesList.length < 7000 ? (
        <div className={classes.list}>
          <List data={sitesList} />
        </div>
      ) : (
        <div>Пожалуйста, измените условия поиска. </div>
      )}
    </>
  )
}

export default MainScreen
