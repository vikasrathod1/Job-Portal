import {
  Box,
  Card,
  Container,
  Grid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

import {
  IconCode,
  IconPalette,
  IconDeviceLaptop,
  IconBriefcase,
  IconChartBar,
  IconUsers,
  IconBuildingStore,
  IconShield,
} from "@tabler/icons-react";

const categoryData = [
  {
    icon: IconCode,
    title: "Software Development",
    jobs: "1,250 Jobs",
  },
  {
    icon: IconPalette,
    title: "UI / UX Design",
    jobs: "540 Jobs",
  },
  {
    icon: IconDeviceLaptop,
    title: "IT Support",
    jobs: "320 Jobs",
  },
  {
    icon: IconBriefcase,
    title: "Marketing",
    jobs: "430 Jobs",
  },
  {
    icon: IconChartBar,
    title: "Finance",
    jobs: "275 Jobs",
  },
  {
    icon: IconUsers,
    title: "Human Resources",
    jobs: "190 Jobs",
  },
  {
    icon: IconBuildingStore,
    title: "Sales",
    jobs: "610 Jobs",
  },
  {
    icon: IconShield,
    title: "Cyber Security",
    jobs: "150 Jobs",
  },
];

const Categories = () => {
  return (
    <Box py={80} bg="#fff">
      <Container size="xl">

        <Stack align="center" mb={50}>
          <Title order={2}>
            Browse Job Categories
          </Title>

          <Text c="dimmed">
            Find jobs based on your favourite category.
          </Text>
        </Stack>

        <Grid>

          {categoryData.map((item, index) => {

            const Icon = item.icon;

            return (
              <Grid.Col
                key={index}
                span={{ base: 12, sm: 6, md: 3 }}
              >
                <Card
                  shadow="md"
                  radius="lg"
                  p="xl"
                  withBorder
                  style={{
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                >
                  <Stack align="center">

                    <ThemeIcon
                      size={70}
                      radius="xl"
                      color="indigo"
                    >
                      <Icon size={35} />
                    </ThemeIcon>

                    <Text fw={700}>
                      {item.title}
                    </Text>

                    <Text c="dimmed">
                      {item.jobs}
                    </Text>

                  </Stack>
                </Card>
              </Grid.Col>
            );
          })}

        </Grid>

      </Container>
    </Box>
  );
};

export default Categories;