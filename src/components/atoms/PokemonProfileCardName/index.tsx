import { Flex, Heading } from '@chakra-ui/react';

import { IPokemonCardProps } from '@/types';

function PokemonProfileCardName({ children }: IPokemonCardProps) {
  return (
    <Flex h="15%" px="1rem" justify="flex-start" align="center">
      <Heading as="h4" size="lg">
        {children}
      </Heading>
    </Flex>
  );
}

export default PokemonProfileCardName;
