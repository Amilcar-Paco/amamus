/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import Post from 'components/cards/post';

import news3 from 'assets/images/blog/c3.jpg';
import news4 from 'assets/images/blog/c4.jpg';
import news5 from 'assets/images/blog/c5.jpg';
import news6 from 'assets/images/blog/c6.jpg';
import news7 from 'assets/images/blog/c7.jpg';
import news8 from 'assets/images/blog/c8.jpg';
import news9 from 'assets/images/blog/c9.jpg';
import news10 from 'assets/images/blog/c10.jpg';
import news11 from 'assets/images/blog/c11.jpg';

const data = [
  {
    id: 11,
    image: news11,
    title: 'Produtos da terra',
    desc:
      'Alimentos com maior qualidade nutricional e sabor; Melhoria da qualidade vida no campo; Conservação da fertilidade do solo; Redução de poluição ambiental (solo, água e ar);',
    link: '#',
  },
  {
    id: 5,
    image: news5,
    title: 'Comida Saúdavel',
    desc:
      'A alimentação saudável traz benefícios para a saúde como melhor controle do peso, rendimento do trabalho, aumento da memória e da concentração e fortalecimento do sistema imunológico.',
    link: '#',
  }, {
    id: 6,
    image: news6,
    title: 'Alimentos produzidos nas machambas',
    desc:
      'Os nossos produtos possuem mais nutrientes, são mais saborosos, garantem uma fonte saudável de alimento e ainda colaboramos para um meio de vida mais sustentável.',
    link: '#',
  },
  {
    id: 7,
    image: news7,
    title:
      'Produtos orgânicos',
    desc: '',
    link: '#',
  },
  {
    id: 10,
    image: news10,
    title:
      'A melhor carne na brasa.',
    desc: '',
    link: '#',
  },
  {
    id: 3,
    image: news3,
    title: 'A melhor carne na brasa.',
    desc: '',
    link: '',
  },
  {
    id: 4,
    image: news4,
    title: 'Produtos orgânicos.',
    desc: '',
    link: '',
  },{
    id: 8,
    image: news8,
    title: 'Alimentos Construtivos',
    desc: '',
    link: '',
  },
  {
    id: 9,
    image: news9,
    title: 'Produtos orgânicos.',
    desc: '',
    link: '',
  },
];

const masonryOptions = {
  originTop: false,
};

const Blog = () => {
  return (
    <section id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 14] }}
          slogan="Galeria"
          title="Conheça o nosso processo"
        />
        <Masonry style={{ textAlign: 'justify' }} sx={styles.masonry} options={masonryOptions}>
          {data.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, null, 2, 10, 14],
    pb: [2, null, null, null, 6, 10, 14],
  },
  masonry: {
    maxWidth: 1250,
    mx: [-3, null, null, null, 'auto'],
  },
};
