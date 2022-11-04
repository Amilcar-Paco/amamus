/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';

const Clients = () => {
  return (
    <section id="clients" sx={styles.section}>
      <Container>
        <SectionHeading
        
          sx={styles.heading}
          title="Um pouco da história da nossa fundadora"
          description="Aos doze (12) anos comecei a fazer obras de artesanato. Me formei em um mini curso  de dois (2) meses de duração.  Nessa altura a tecnologia  já era mais avançada, a Internet facilitava tanta coisa que fui aperfeiçoando e ganhando ainda mais curiosidade  e prática das coisas. Decidi  que poderia ser alguém na sociedade  e poderia provar que ser pessoa com deficiência  não nos torna incapazes. Comecei então a fazer bolachinhas e vendia porta-a-porta, isso me impulsionou e deu mais força de querer ser alguém maior. Segui com salgadinhos. 
          Em 2020   ganhei coragem para cozinhar e comecei a vender os 1os take aways de refeição.  Infelizmente  por conta do covid parei e só  retornei nos meados do ano passado   ainda com mais força .   
         Decidi então criar a empresa de catering . 
         "
        />
        
      </Container>
    </section>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    h3: {
      fontSize: [4, null, null, 6, 9],
      lineHeight: 1.5,
      mb: 3,
    },
  },
  illustration: {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'justify',
    marginTop: [3, null, null, 0],
  },
};
