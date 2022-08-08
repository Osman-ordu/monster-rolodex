import { Component } from 'react'

class CardList extends Component {
  render() {
    const { monsters } = this.props

    return (
      <div className='card-container'>
        {monsters.map((monster) => {
          const { name,username,email,id,website } = monster
          return(
                 
          <div className='card' key={id}>
          <img src={`https://robohash.org/${id}?set=set2&size=240x240`} alt={`monster ${monster.name}`}/>
          <h2>{name} {username}</h2>
          <div className='card-content'>
             <div>City:{monster.address.city}</div>
             <div>Email:{email}</div>
             <div>Website:{website}</div> 
          </div>             
        </div>
            
          )        
        })}
      </div>
    )
  }
}

export default CardList
