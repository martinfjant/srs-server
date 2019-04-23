import { Seed, Factory, times } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Card } from 'src/card/card.entity';
import { User } from 'src/user/user.entity';

export class CreateCards implements Seed {
  public async seed(factory: Factory, connection: Connection): Promise<any> {
    const em = connection.createEntityManager();
    await times(10, async n => {
      const card = await factory(Card)().seed();
      const user = await factory(User)().make();
      user.cards = [card];
      return await em.save(user);
    });
  }
}
