import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useForm } from "react-hook-form";
import { Container, Title, Column, TitleLogin, SubtitleLogin, LoginText, Row, Wrapper } from './styles';

const Signup = () => {
    const navigate = useNavigate()
    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                alert('Este usuário já está cadastrado!')
                return
            }

            navigate('/feed')
        } catch (e) {
            alert('Erro ao efetuar o cadastro')
        }
    };

    console.log('errors', errors);

    return (<>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Faça seu cadastro</TitleLogin>
                    <SubtitleLogin>Faça seu cadastro e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input placeholder="Nome completo" name="nome" control={control} />
                        {errors.email && <span>Nome completo  é obrigatório</span>}
                        <Input placeholder="Seu melhor e-mail" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.email && <span>E-mail é obrigatório</span>}
                        <Input placeholder="Celular" leftIcon={<MdEmail />} name="email" control={control} />
                        {errors.celular && <span>Celular é obrigatório</span>}
                        <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                        {errors.senha && <span>Senha é obrigatório</span>}
                        <Button title="Cadastrar" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <LoginText>
                            Já tenho Conta
                            <a href="/login">Fazer login</a>
                        </LoginText>
                    </Row>
                </Wrapper>
            </Column>
        </Container >
    </>)
}

export { Signup }