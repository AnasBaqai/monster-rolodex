import { Component } from "react";
import Card from "./Card";

class CardList extends Component {



    render() {
        const { Monsters, searchTerm } = this.props
        const filteredMonsters = Monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchTerm.toLowerCase())
        })


        return (


            <div className="card-list">
                {
                    filteredMonsters.map((monster, index) => {
                        return (
                          <Card key={monster.id} id={monster.id}   name={monster.name} email={monster.email} />

                        )
                    })
                }
            </div>

        )
    }
}

export default CardList