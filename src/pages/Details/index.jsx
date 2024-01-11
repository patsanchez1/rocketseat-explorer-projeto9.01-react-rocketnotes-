import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução do React</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, iure
            minus voluptates adipisci aperiam accusamus excepturi molestias
            cumque repellat? Architecto perferendis minima et quod quia vel
            aperiam quis tempora sed? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint, dolore recusandae! Nihil adipisci tempora
            labore dicta sunt officia aut in, reprehenderit iusto placeat,
            cumque aperiam ipsum sed vitae accusamus illum!
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
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
  );
}
