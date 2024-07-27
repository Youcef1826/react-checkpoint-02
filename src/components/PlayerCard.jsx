
export default function PlayerCard({ player }) {
    return (
        <article className="p-4 bg-white rounded-lg shadow-md">
            <img src={player.imageUrl} width={300} alt={player.name} className=" w-full h-autorounded-md" />
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">{player.name}</h2>
                <p>Team: {player.team}</p>
                <p>Nationality: {player.nationality}</p>
                <p>Jersey Number: {player.jerseyNumber}</p>
                <p>Age: {player.age}</p>
            </div>
        </article>
    );
};