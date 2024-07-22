import {
  Container,
  Text,
  TextInput,
  Button,
  NumberInput,
  Select,
  Flex,
  Stack,
} from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

const AddRecipe = () => (
  <Container size="sm">
    <Flex direction="column" gap="16">
      {/* Header Section */}
      <Flex justify="space-between" align="center" p="4">
        <Flex gap="16">
          <Flex
            direction="column"
            align="center"
            justify="center"
            bg="#ABEDC6"
            p="md"
            w="100px"
            style={{ borderRadius: '5px', boxShadow: '2px 4px 5px 0px rgba(0, 0, 0, 0.14)' }}
          >
            <Text size="sm">Ingredients</Text>
            <Text size="xl">2</Text>
          </Flex>
          <Flex
            direction="column"
            align="center"
            justify="center"
            bg="#ABEDC6"
            p="md"
            w="100px"
            style={{ borderRadius: '5px', boxShadow: '2px 4px 5px 0px rgba(0, 0, 0, 0.14)' }}
          >
            <Text size="sm">Steps</Text>
            <Text size="xl">1</Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap="8">
          <Button size="lg" variant="outline" color="pink">
            Publish
          </Button>
          <Button size="lg" variant="outline" color="pink">
            Save
          </Button>
        </Flex>
      </Flex>

      {/* Recipe Name Input */}
      <TextInput placeholder="Recipe Name" size="lg" label="Recipe Name" />

      {/* Ingredients Section */}
      <Text size="xl" fw="500">
        Ingredients
      </Text>
      <Stack>
        <Flex align="center">
          <NumberInput size="lg" placeholder="16" hideControls style={{ width: 60 }} />
          <Select
            size="lg"
            placeholder="ounces"
            data={['ounces', 'grams', 'cups']}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
          <TextInput size="lg" placeholder="Ingredient" style={{ flexGrow: 1 }} />
        </Flex>
        <Flex align="center">
          <NumberInput size="lg" placeholder="16" hideControls style={{ width: 60 }} />
          <Select
            size="lg"
            placeholder="ounces"
            data={['ounces', 'grams', 'cups']}
            style={{ marginLeft: 10, marginRight: 10 }}
          />
          <TextInput size="lg" placeholder="Ingredient" style={{ flexGrow: 1 }} />
        </Flex>
      </Stack>
      <Button
        variant="outline"
        size="lg"
        color="pink"
        w="100%"
        leftSection={<IconPlus size={16} />}
      >
        Add Ingredient
      </Button>

      {/* Time and Servings Section */}
      <Flex>
        <TextInput
          size="lg"
          placeholder="Preparation time"
          label="Preparation time"
          style={{ flex: 1, marginRight: 10 }}
        />
        <TextInput
          size="lg"
          placeholder="Cooking time"
          label="Cooking time"
          style={{ flex: 1, marginRight: 10 }}
        />
        <TextInput size="lg" placeholder="Servings" label="Servings" style={{ flex: 1 }} />
      </Flex>

      {/* Steps Section */}
      <Text size="xl" fw="500">
        Steps
      </Text>
      <Flex
        align="center"
        bg="#F0F0F0"
        p="md"
        style={{ borderRadius: '5px', boxShadow: '2px 4px 5px 0px rgba(0, 0, 0, 0.14)' }}
      >
        <Text>01</Text>
        <TextInput
          size="lg"
          placeholder="Step description"
          style={{ flexGrow: 1, marginLeft: 10 }}
        />
      </Flex>
      <Button
        w="100%"
        size="lg"
        variant="outline"
        color="pink"
        leftSection={<IconPlus size={16} />}
      >
        Add Step
      </Button>
    </Flex>
  </Container>
);

export default AddRecipe;
