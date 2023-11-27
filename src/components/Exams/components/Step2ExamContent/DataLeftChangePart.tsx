import Text from "components/Typography/index";
import Stack from "@mui/material/Stack";

//

const ContentPart1 = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Text.Desc16 sx={{ fontWeight: "bold", textAlign: "center" }}>Goldilocks and the Three Bears</Text.Desc16>
      <Text.DescSmall>
        Once upon a time a girl named Goldilocks lived in a house at the edge of the woods. In those days curls of hair
        were called "locks." She was "Goldilocks" because golden hair ran down her head and shoulders.{" "}
      </Text.DescSmall>
      <Text.DescSmall>
        One morning Goldilocks was out for a walk when she came across a beautiful bird. She followed that bird right
        into the woods, where her mother had said many times she must never go. But Goldilocks didn’t think of that.{" "}
      </Text.DescSmall>
      <Text.DescSmall>
        Deeper and deeper into the woods she went. But where was the bird? It was nowhere to be seen. Goldilocks looked
        around. That's when she knew she was lost.
      </Text.DescSmall>
      <Text.DescSmall>
        But a house was not far away. “I wonder who lives there,” she thought, "so deep into the woods." She went up and
        knocked on the door. No answer. She knocked again. Still no answer. Goldilocks knocked a third time and the door
        opened. But no one was behind the door.
      </Text.DescSmall>
      <Text.DescSmall>
        Goldilocks smelled a wonderful smell, and soon knew why. On the table were three steaming bowls of oatmeal. All
        of a sudden she realized how very hungry she was.
      </Text.DescSmall>
      <Text.DescSmall>
        What Goldilocks did not know, however, is that three bears lived in this house. In fact, that very morning the
        three bears had sat down to their bowls of oatmeal but the cereal was too hot. So they had decided to take a
        short walk. They said to each other, "By the time we return home our oatmeal will be perfect."
      </Text.DescSmall>
    </Stack>
  );
};
//
const ContentPart2 = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Text.Desc16 sx={{ fontWeight: "bold", textAlign: "center" }}>Snow White and the Seven Dwarfs</Text.Desc16>
      <Text.DescSmall>
        This is the Fairytale story of Snow White and the Seven Dwarfs. This Classic Tale is reimagined with a modern
        twist on what it means to be "Fair."
      </Text.DescSmall>
      <Text.DescSmall>
        Once upon a time, a princess named Snow White lived in a castle with her father, the King, and her stepmother,
        the Queen. Her father had always said to his daughter that she must be fair to everyone at court. Said he:
        “People come here to the castle when they have a problem. They need the ruler to make a fair decision. Nothing
        is more important than to be fair.”
      </Text.DescSmall>
      <Text.DescSmall>
        The Queen, Snow White’s stepmother, knew how much this meant to her husband. At the first chance, she rushed to
        her magic mirror. “Mirror, mirror, on the wall,” said the Queen. “Who is the fairest of them all?”
      </Text.DescSmall>
      <Text.DescSmall>
        “Snow White is the fairest of them all!” said the Magic Mirror. “What?!” yelled the Queen. “No one is more fair
        than I! The Queen must have the best of everything - everyone knows that. What could be more fair?” “Snow White
        is the fairest of them all!” repeated the Magic Mirror.
      </Text.DescSmall>
      <Text.DescSmall>
        “What do you know – you’re a mirror!” roared the Queen. And she stormed off. Still, the Queen was bothered. So
        bothered was she that the Queen decided to be rid of the girl, once and for all. “I cannot wait another day!”
        she declared. The Queen called for her servant, a huntsman. “Find a reason to take Snow White deep into the
        woods,” she said, pointing her long finger at the servant. “Then kill her.”
      </Text.DescSmall>
      <Text.DescSmall>
        The huntsman was shocked! But she was the Queen and what could he do? The next day he took Snow White into the
        woods. As he drew his knife to slay her, Snow White turned around.
      </Text.DescSmall>
    </Stack>
  );
};
//
const ContentPart3 = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Text.Desc16 sx={{ fontWeight: "bold", textAlign: "center" }}>
        The Frog Prince: The Princess and the Frog
      </Text.Desc16>
      <Text.DescSmall>
        This is the tale of the Frog Prince, a Grimm's Fairy Tale. Disney's adaptation is titled, The Princess and the
        Frog. This version is brought to you by Stories to Grow By.
      </Text.DescSmall>
      <Text.DescSmall>
        Once upon a time there was a Princess. Many a suitor came to the palace to win her hand in marriage, but it
        seemed to the Princess that each one of them looked at her without really seeing her at all. One morning
        Goldilocks was out for a walk when she came across a beautiful bird. She followed that bird right into the
        woods, where her mother had said many times she must never go. But Goldilocks didn’t think of that.{" "}
      </Text.DescSmall>
      <Text.DescSmall>
        Deeper and deeper into the woods she went. But where was the bird? It was nowhere to be seen. Goldilocks looked
        around. That's when she knew she was lost.
      </Text.DescSmall>
      <Text.DescSmall>
        “They act like there’s nothing more to a princess than her fine crown and royal dresses,” she said to herself
        with a frown.One afternoon after one of these visits, the Princess thought, “Sometimes I wish I were little
        again.” She found her favorite ball from childhood, the one that sparkled when she threw it up high to the sun.
        She took the ball to the palace yard and threw it higher and higher.
      </Text.DescSmall>
      <Text.DescSmall>
        One time she threw it extra high and when she ran to catch the ball, she tripped on a tree stump. The ball fell
        and plopped right down into the royal well! She raced over to fetch her ball before it dropped too far, but by
        the time she got there she could no longer see it in the water.
      </Text.DescSmall>
      <Text.DescSmall>
        What Goldilocks did not know, however, is that three bears lived in this house. In fact, that very morning the
        three bears had sat down to their bowls of oatmeal but the cereal was too hot. So they had decided to take a
        short walk. They said to each other, "By the time we return home our oatmeal will be perfect."
      </Text.DescSmall>
    </Stack>
  );
};
//
export const dataLeft = {
  part1: {
    data: <ContentPart1 />,
  },
  part2: {
    data: <ContentPart2 />,
  },
  part3: {
    data: <ContentPart3 />,
  },
};
