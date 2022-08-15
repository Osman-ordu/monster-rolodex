// import { useState } from 'react'
import { Component } from 'react'
import CardList from './components/card-list/card-list.component'
import React from 'react'

// start-------------------- Class------------------ component
class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchArea: '',
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          }
        )
      )
  }
  searchChange = (e) => {
    const searchArea = e.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchArea }
    })
  }
  render() {
    const { monsters, searchArea } = this.state
    const { searchChange } = this
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchArea)
    })
    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <input
          className='search-box'
          type='search'
          placeholder='search monster...'
          onChange={searchChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}
// end-------------------- Class------------------ component

export default App



// start-------------------- function------------------ component

// const App = () => {

//   const [searchArea,setSearchArea] = useState('a') // değer , fonksiyon
//   const [monsters,setMonsters] = useState([])

//        fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) =>setMonsters(users))

//   const searchChange = (e) => {
//     const searchAreaArr = e.target.value.toLocaleLowerCase()
//     setSearchArea(searchAreaArr)
     
//       }
//       const filterMonsters = monsters.filter((monster) => {
//               return monster.name.toLocaleLowerCase().includes(searchArea)
//             })
//   return (
//     <div className='App'>
//     <h1 className='app-title'>Monsters Rolodex</h1>
//     <input
//       onChange={searchChange}
//       type='search'
//       placeholder='search monster...'
//       className='search-box'
//     />
//     <CardList monsters={filterMonsters} />
//   </div>
//   )
// }

// end-------------------- function------------------ component
