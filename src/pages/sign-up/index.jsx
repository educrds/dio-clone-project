import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Container,
  Title,
  TitleLogin,
  SubTitleLogin,
  Wrapper,
  LoginText,
  Column,
  Row,
  TermsText,
} from "./styles";

import { api } from "../../services/api";

const schema = yup
  .object({
    nome: yup
      .string()
      .required("Campo obrigatório!"),
    email: yup
      .string()
      .email("email não é válido!")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(3, "Mínimo 3 caracteres!")
      .required("Campo obrigatório!"),
  })
  .required();

const SignUp = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválido!");
      }
    } catch {
      alert("Houve um erro, tente novamente!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                errorMessage={errors.email?.message}
                name="nome"
                placeholder="Nome completo"
                leftIcon={<MdPerson />}
              />
              <Input
                control={control}
                errorMessage={errors.email?.message}
                name="email"
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                control={control}
                errorMessage={errors.password?.message}
                name="password"
                placeholder="Senha"
                leftIcon={<MdLock />}
                type="password"
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <TermsText>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da{" "}
                <strong>DIO.</strong>
              </TermsText>
            </Row>
            <Row>
              <span>
                Já tenho conta.{" "}
                <LoginText href="/login">Fazer login</LoginText>
              </span>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { SignUp };
