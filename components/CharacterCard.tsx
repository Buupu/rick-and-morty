import { Box, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { CharacterModel } from '../model/Character';

export const CharacterCard = ({ character }: { character: CharacterModel }) => {
  return (
    <Box width="full">
      <Image
        src={character.image}
        alt={character.name}
        width={300}
        height={300}
      />
      <Heading as="h4" textAlign="center" size="md">
        {character.name}
      </Heading>
      <Text textAlign="center">Origin: {character.origin.name}</Text>
      <Text textAlign="center">Location: {character.location.name}</Text>
    </Box>
  );
};
