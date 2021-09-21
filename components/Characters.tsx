import { SimpleGrid } from '@chakra-ui/react';
import { CharacterModel } from '../model/Character';
import { CharacterCard } from './CharacterCard';
const Character = ({ characters }: { characters: CharacterModel[] }) => {
  return (
    <SimpleGrid w="full" columns={[1, 2, 3]} spacing="40px">
      {characters.map((character) => {
        return (
          <CharacterCard
            key={`character-card-${character.id}`}
            character={character}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default Character;
