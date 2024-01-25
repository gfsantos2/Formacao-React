import { useNavigate } from "react-router-dom";
import bannerImage from '../../assets/banner.png'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Signup } from "../../components/signup";
import { Container, Title, TitleHighlight, TextContent } from './styles';

const Home = () => {
    const navigate = useNavigate();
    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <img src={bannerImage} alt="Imagem principal do site." />
                <Signup />
            </div>
        </Container>
    </>)
}

export { Home }