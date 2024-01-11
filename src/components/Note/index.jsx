import { Container } from "./style";
import { Tag } from "../Tag";

export function Note({ data, ...rest }) {
  // data: seria a nota inteira, por ser várias propriedades (notas) que vou receber
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.name} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
