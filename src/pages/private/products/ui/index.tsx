import {ContainerModule} from "@shared/styles";
import {Card} from "@features/product/card";
import {CardPng} from "@shared/assets/img";
import {Grid} from "@shared/components/grid";
import {AddBtn} from "@shared/ui/add-btn";
import {PrivatePaths} from "@shared/navigation";

export const Products = () => {
  const cards = Array.from({length: 100}, (_, index) => {
    return(
      <Card
        key={index}
        title={`Name ${index + 1}`}
        description={"Desc"}
        price={2000}
        imageUrl={CardPng}
      />
    )
  })

  return (
    <section className={ContainerModule.container}>
      <Grid>
        <AddBtn to={PrivatePaths.ADD_PRODUCT}>
          Добавить<br/>+
        </AddBtn>
        {cards}
      </Grid>
    </section>
  );
};