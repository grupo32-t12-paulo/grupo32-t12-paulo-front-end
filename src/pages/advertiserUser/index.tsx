import AppBarComponent from "../../components/AppBar";
import ActionAreaCard from "../../components/CardAuction";
import CardInfoSeller from "../../components/CardInfoSeller";
import MediaCard from "../../components/CardComponent";
import BackToTop from "../../components/Footer";
import { ActionCard, CardInfor, Container } from "./style";

const AdvertiserUser = () => {
  return (
    <>
      <AppBarComponent />

      <Container>
        <CardInfor>
          <CardInfoSeller />
        </CardInfor>

        <h2 className="action">Leilão</h2>
        <ActionCard>
          <ActionAreaCard />
          <ActionAreaCard />
        </ActionCard>

        <h2>Carros</h2>
        <ul>
          <li>
            <MediaCard />
          </li>
          <li>
            <MediaCard />
          </li>

          <li>
            <MediaCard />
          </li>

          <li>
            <MediaCard />
          </li>
        </ul>

        <h2>Motos</h2>
        <ul>
          <li>
            <MediaCard />
          </li>
        </ul>
      </Container>
      <BackToTop />
    </>
  );
};

export default AdvertiserUser;
