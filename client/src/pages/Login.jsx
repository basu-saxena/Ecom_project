import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("/Media/pexels-bohlemedia-1884584.jpg") center;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 2S%;
  background-color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  user-select: none;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  border: none;
  width: 40%;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  user-select: none;
  margin-bottom: 10px;
`;

const Link = styled.a`
  user-select: none;
  margin: 5px 0px;
  text-decoration: underline;
  font-size: 12px;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login </Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW PASSWORD</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
