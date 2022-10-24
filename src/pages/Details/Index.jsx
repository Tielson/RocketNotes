import { Container, Links, Content } from './styles'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'




export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir a nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, harum.
            Provident rerum doloremque voluptatum corrupti eius fugiat,
            ut soluta dolorum, repellendus expedita est et laudantium nostrum omnis odio ducimus?
            Officia?
          </p>

          <Section title="Links úteis">
            <Links>
              <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
              <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )
}