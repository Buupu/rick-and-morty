import Image from 'next/image';
import { Heading, Text, Box, SimpleGrid } from '@chakra-ui/react';
import { CharacterModel } from '../model/Character';

const Character = ({ characters }: { characters: CharacterModel[] }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing="40px">
      {characters.map((character) => {
        return (
          <Box key={character.id}>
            <Image
              src={character.image}
              alt={character.name}
              width={300}
              height={300}
            />
            <Heading as="h4" align="center" size="md">
              {character.name}
            </Heading>
            <Text align="center">Origin: {character.origin.name}</Text>
            <Text align="center">Location: {character.location.name}</Text>
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default Character;
