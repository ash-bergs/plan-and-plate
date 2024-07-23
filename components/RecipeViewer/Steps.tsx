import { Flex, Text, Title } from '@mantine/core';
import { Step } from '@/types/recipes';

type StepsProps = {
  steps: Step[];
};

const Steps = ({ steps }: StepsProps) => {
  if (!steps.length) {
    return (
      <Flex direction="column" gap="16">
        <Title size="h2">Steps</Title>
        <Text>
          There are no steps for this recipe! If this is your recipe you can edit, or you can
          request the author complete it!
        </Text>
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="16">
      <Title size="h2">Steps</Title>
      <Flex direction="column" px="2" gap="16px">
        {steps.map((step, index) => (
          <Text key={index}>
            {step.number}. {step.content}
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};
export default Steps;
