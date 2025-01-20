import CatCard from '../components/CatCard';
import { Cat } from '../types/Cat';

export default function FavoriteCats() {
    const favoriteCats: Cat[] = JSON.parse(localStorage.getItem('favoriteCats') || '[]');

    return (
        <div className="cards-container">
            {favoriteCats.length === 0 ? (
                <h3>У вас пока нет любимых котиков</h3>
            ) : (
                favoriteCats.map(cat => (
                    <CatCard key={cat.id} id={cat.id} url={cat.url} ref={null} />
                ))
            )}
        </div>
    );
}