import { useEffect, useState } from "react";
import Card from "./Card";

const CardList= (props)=> {

    
        const { Monsters, searchTerm } = props
        const [filteredMonsters,setFilteredMonsters]=useState(Monsters);
        useEffect(()=>{
            console.log("ese effect firing")
            const newFilteredMonsters = Monsters.filter((monster) => {
                return monster.name.toLowerCase().includes(searchTerm.toLowerCase())
            })
            setFilteredMonsters(newFilteredMonsters);
        },[Monsters,searchTerm])
       
        return (
            <div className="card-list">
                {
                    filteredMonsters.map((monster, index) => {
                        return (
                            <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email} />
                        )
                    })
                }
            </div>
        )
    
}

export default CardList