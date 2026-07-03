import {
    Badge,
    Box,
    Button,
    Card,
    Container,
    Divider,
    Flex,
    Grid,
    Group,
    Image,
    Stack,
    Text,
    Title,
} from "@mantine/core";

import {
    IconBriefcase,
    IconBuildingSkyscraper,
    IconMapPin,
    IconArrowRight,
    IconBookmark,
    IconCurrencyRupee,
} from "@tabler/icons-react";

const jobs = [
    {
        id: 1,
        company: "Google",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        title: "Frontend React Developer",
        location: "Bangalore",
        salary: "18 - 24 LPA",
        experience: "2 - 4 Years",
        type: "Full Time",
        category: "Remote",
    },
    {
        id: 2,
        company: "Microsoft",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        title: "Software Engineer",
        location: "Hyderabad",
        salary: "20 - 28 LPA",
        experience: "3 - 5 Years",
        type: "Full Time",
        category: "Hybrid",
    },
    {
        id: 3,
        company: "Amazon",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        title: "Backend Developer",
        location: "Pune",
        salary: "16 - 22 LPA",
        experience: "1 - 3 Years",
        type: "Full Time",
        category: "Work From Office",
    },
    {
        id: 4,
        company: "Adobe",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
        title: "UI / UX Designer",
        location: "Noida",
        salary: "14 - 20 LPA",
        experience: "2 Years",
        type: "Full Time",
        category: "Remote",
    },
    {
        id: 5,
        company: "Infosys",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
        title: "Java Developer",
        location: "Mumbai",
        salary: "8 - 12 LPA",
        experience: "1 - 2 Years",
        type: "Permanent",
        category: "Hybrid",
    },
    {
        id: 6,
        company: "TCS",
        logo: "data:image/png;base64,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",
        title: "Full Stack Developer",
        location: "Pune",
        salary: "10 - 16 LPA",
        experience: "2 - 5 Years",
        type: "Full Time",
        category: "Work From Office",
    },
];

const FeaturedJobs = () => {
    return (
        <Box py={80} bg="#F8FAFC">
            <Container size="xl">
                {/* Heading */}

                <Stack align="center" mb={50}>
                    <Badge
                        size="lg"
                        radius="xl"
                        color="indigo"
                        variant="light"
                    >
                        Featured Jobs
                    </Badge>

                    <Title order={2} ta="center">
                        Find Your Perfect Opportunity
                    </Title>

                    <Text c="dimmed" ta="center" maw={650}>
                        Explore the latest verified jobs from India's top companies.
                        Apply today and build your dream career.
                    </Text>
                </Stack>

                {/* Job Cards */}

                <Grid>
                    {jobs.map((job) => (
                        <Grid.Col
                            key={job.id}
                            span={{ base: 12, md: 6, lg: 4 }}
                        >
                            <Card
                                shadow="lg"
                                radius="lg"
                                p="xl"
                                withBorder
                                style={{
                                    transition: ".3s",
                                    cursor: "pointer",
                                    height: "100%",
                                }}
                            >
                                {/* Company */}

                                <Flex justify="space-between" align="center">
                                    <Group>
                                        <Image
                                            src={job.logo}
                                            w={55}
                                            h={55}
                                            fit="contain"
                                        />

                                        <div>
                                            <Text fw={700}>{job.company}</Text>

                                            <Text size="sm" c="dimmed">
                                                Verified Company
                                            </Text>
                                        </div>
                                    </Group>

                                    <IconBookmark
                                        size={22}
                                        color="#4F46E5"
                                    />
                                </Flex>

                                <Divider my="lg" />

                                {/* Job Title */}

                                <Title order={4}>
                                    {job.title}
                                </Title>

                                <Stack gap={10} mt="md">

                                    <Group gap={8}>
                                        <IconMapPin size={18} />
                                        <Text size="sm">
                                            {job.location}
                                        </Text>
                                    </Group>

                                    <Group gap={8}>
                                        <IconCurrencyRupee size={18} />
                                        <Text size="sm">
                                            {job.salary}
                                        </Text>
                                    </Group>

                                    <Group gap={8}>
                                        <IconBriefcase size={18} />
                                        <Text size="sm">
                                            {job.experience}
                                        </Text>
                                    </Group>

                                    <Group gap={8}>
                                        <IconBuildingSkyscraper size={18} />
                                        <Text size="sm">
                                            {job.type}
                                        </Text>
                                    </Group>

                                </Stack>

                                <Group mt="lg">
                                    <Badge color="green">
                                        {job.category}
                                    </Badge>

                                    <Badge color="blue">
                                        Hiring
                                    </Badge>
                                </Group>

                                <Group grow mt={30}>
                                    <Button
                                        variant="light"
                                        color="indigo"
                                        radius="xl"
                                    >
                                        View Details
                                    </Button>

                                    <Button
                                        radius="xl"
                                        rightSection={<IconArrowRight size={16} />}
                                    >
                                        Apply Now
                                    </Button>
                                </Group>
                            </Card>
                        </Grid.Col>
                    ))}
                </Grid>

                {/* Bottom Button */}

                <Flex justify="center" mt={60}>
                    <Button
                        size="lg"
                        radius="xl"
                        variant="outline"
                        rightSection={<IconArrowRight size={18} />}
                    >
                        View All Jobs
                    </Button>
                </Flex>
            </Container>
        </Box>
    );
};

export default FeaturedJobs;