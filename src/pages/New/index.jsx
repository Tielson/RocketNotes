import { NoteItem } from "../../components/NoteItem"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Container, Form } from "./styles";
import { Link } from 'react-router-dom';

export function New() {

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Titulo" />

          <Textarea placeholder="Observações"/>

          <Section title="Links uteis">
            <NoteItem value="https://www.rocketseat.com.br/"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>
          <Section title="Marcadoress">
          <div className="tags">
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Novo marcador"/>
          </div>
          </Section>

          <Button title="Salvar" />

        </Form>
      </main>
    </Container>
  )
}