import { Paper, Stack, Text, Title, Group, Badge, Button, Avatar } from "@mantine/core";
import { IconMapPin, IconUsers, IconBriefcase } from "@tabler/icons-react";

const CompanyCard = ({ company }) => {
  return (
    <Paper shadow="sm" radius="lg" p="xl" withBorder h="100%">
      <Stack gap="lg" h="100%">
        <Group>
          <Avatar size={56} radius="md" color={company.logoColor}>
            {company.name.substring(0, 2)}
          </Avatar>
          <Stack gap={0}>
            <Title order={4}>{company.name}</Title>
            <Text size="sm" c="dimmed">{company.industry}</Text>
          </Stack>
        </Group>

        <Text c="dimmed" lineClamp={2}>
          {company.description}
        </Text>

        <Group gap="xs">
          <Badge leftSection={<IconMapPin size={14} />} variant="light">
            {company.location}
          </Badge>
          <Badge leftSection={<IconUsers size={14} />} variant="light">
            {company.employees}
          </Badge>
        </Group>

        <Group mt="auto" justify="space-between" align="center">
          <Group gap={5}>
            <IconBriefcase size={18} color="#4F46E5" />
            <Text fw={600} c="indigo">
              {company.openRoles} Open Roles
            </Text>
          </Group>

          <Button radius="xl">View Jobs</Button>
        </Group>
      </Stack>
    </Paper>
  );
};

export default CompanyCard;