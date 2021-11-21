import Head from "next/head";
import Accordion from "../components/accordion";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>home</title>
      </Head>
      <Accordion>
        <Accordion.Item itemKey="1">
          <Accordion.Header>FarCry 4</Accordion.Header>
          <Accordion.Content>
            Far Cry 4 is a 2014 first-person shooter game developed by Ubisoft
            Montreal and published by Ubisoft. It is the successor to the 2012
            video game Far Cry 3, and the fourth main installment in the Far Cry
            series. The game takes place in Kyrat, a fictional Himalayan country
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item itemKey="2">
          <Accordion.Header>GTA V</Accordion.Header>
          <Accordion.Content>
            Grand Theft Auto V is a 2013 action-adventure game developed by
            Rockstar North and published by Rockstar Games. It is the seventh
            main entry in the Grand Theft Auto series, following 2008's Grand
            Theft Auto IV, and the fifteenth instalment overall.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item itemKey="3">
          <Accordion.Header>Battlefield 1</Accordion.Header>
          <Accordion.Content>
            Battlefield 1 is a first-person shooter video game developed by DICE
            and published by Electronic Arts. Battlefield 1 is the fifteenth
            installment in the Battlefield series, and the first main entry in
            the series since Battlefield 4
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Layout>
  );
}
