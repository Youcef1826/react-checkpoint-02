
import { useEffect, useState } from "react";
import { players } from "../../data/players";
import PlayerCard from "./PlayerCard";

export default function PlayersList() {
    const [playersList, setPlayersList] = useState([]);

    useEffect(() => {
        setPlayersList(players);
    }, []);

    return (
        <section className="p-4">
            <div className="grid grid-cols-4 gap-6">
                {playersList.map((player) => (
                    <PlayerCard key={player.id} player={player} />
                ))}
            </div>
        </section>
    );
};