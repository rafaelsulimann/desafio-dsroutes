import Welcome from "../../../components/Welcome";
import './styles.scss';

export default function HomeIndex() {
    return (
        <main className="home-index">
            <section className="home-index-welcome-title">
                <Welcome />
            </section>
        </main>
    );
}