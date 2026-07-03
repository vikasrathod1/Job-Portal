// import { Box, Container, Grid } from "@mantine/core";

// import JobsHero from "../../Components/Jobs/JobsHero";
// import Filters from "../../Components/Jobs/Filters";

// const Jobs = () => {
//   return (
//     <Box bg="#F8FAFC">

//       <JobsHero />

//       <Container size="xl" py={40}>

//         <Grid>

//           {/* Left Sidebar */}

//           <Grid.Col span={{ base: 12, md: 3 }}>
//             <Filters/>
//           </Grid.Col>

//           {/* Right Side */}

//           <Grid.Col span={{ base: 12, md: 9 }}>
//             {/* Job Cards will come here */}
//           </Grid.Col>

//         </Grid>

//       </Container>

//     </Box>
//   );
// };

// export default Jobs;



// import { Box, Container, Grid, Group, Select, Text, Title, Stack } from "@mantine/core";
// import { useState } from "react";

// import JobsHero from "../../Components/Jobs/JobsHero";
// import Filters from "../../Components/Jobs/Filters";
// import Cards from "../../Components/Jobs/Cards";
// const sampleJobs = [
//   {
//     id: 1,
//     title: "Frontend Developer (React)",
//     company: "TechNova Solutions",
//     location: "Bangalore",
//     experience: "2-4 Years",
//     salary: "12 - 18 LPA",
//     type: "Full Time",
//     posted: "2 days ago",
//     tags: ["React", "TypeScript", "Tailwind"],
//   },
//   {
//     id: 2,
//     title: "Backend Engineer (Node.js)",
//     company: "Groww",
//     location: "Mumbai",
//     experience: "3-5 Years",
//     salary: "15 - 22 LPA",
//     type: "Full Time",
//     posted: "1 day ago",
//     tags: ["Node.js", "Express", "MongoDB"],
//   },
//   {
//     id: 3,
//     title: "Full Stack Developer",
//     company: "Zerodha",
//     location: "Pune (Hybrid)",
//     experience: "1-3 Years",
//     salary: "10 - 16 LPA",
//     type: "Full Time",
//     posted: "3 days ago",
//     tags: ["React", "Next.js", "Python"],
//   },
//   // Aur jobs add kar sakte ho
// ];

// const Jobs = () => {
//   const [sortBy, setSortBy] = useState("relevance");

//   return (
//     <Box bg="#F8FAFC" pb={50}>
//       <JobsHero />

//       <Container size="xl" py={40}>
//         <Grid gutter={30}>
//           {/* Left Sidebar - Filters */}
//           <Grid.Col span={{ base: 12, md: 3 }}>
//             <Filters />
//           </Grid.Col>

//           {/* Right Side - Job Listings */}
//           <Grid.Col span={{ base: 12, md: 9 }}>
//             <Stack gap="xl">
//               {/* Header with Results & Sort */}
//               <Group justify="space-between" align="center">
//                 <Title order={3}>
//                   248 <span style={{ fontWeight: 400, color: "#666" }}>Jobs Found</span>
//                 </Title>

//                 <Select
//                   value={sortBy}
//                   onChange={setSortBy}
//                   data={[
//                     { value: "relevance", label: "Relevance" },
//                     { value: "newest", label: "Newest First" },
//                     { value: "salary", label: "Salary: High to Low" },
//                   ]}
//                   w={200}
//                 />
//               </Group>

//               {/* Job Cards */}
//               <Stack gap="md">
//                 {sampleJobs.map((job) => (
//                   // <JobCard key={job.id} job={job} />
//                   <Cards key={job.id} job={job} />
//                 ))}
//               </Stack>

//               {/* Load More Button */}
//               <Group justify="center" mt={30}>
//                 <button
//                   style={{
//                     padding: "12px 32px",
//                     background: "#4F46E5",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "9999px",
//                     fontSize: "16px",
//                     cursor: "pointer",
//                   }}
//                 >
//                   Load More Jobs
//                 </button>
//               </Group>
//             </Stack>
//           </Grid.Col>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Jobs;


import { useState } from "react";
import { Box, Container, Grid, Group, Select, Text, Title, Stack, Chip, Button } from "@mantine/core";

import JobsHero from "../../Components/Jobs/JobsHero";
import Filters from "../../Components/Jobs/Filters";
import Cards from "../../Components/Jobs/Cards";

const sampleJobs = [
  {
    id: 1,
    title: "Frontend Developer (React)",
    company: "TechNova Solutions",
    location: "Bangalore",
    experience: "2-4 Years",
    salary: "12 - 18 LPA",
    type: "Full Time",
    posted: "2 days ago",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Backend Engineer (Node.js)",
    company: "Groww",
    location: "Mumbai",
    experience: "3-5 Years",
    salary: "15 - 22 LPA",
    type: "Full Time",
    posted: "1 day ago",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "Zerodha",
    location: "Pune (Hybrid)",
    experience: "1-3 Years",
    salary: "10 - 16 LPA",
    type: "Full Time",
    posted: "3 days ago",
    tags: ["React", "Next.js", "Python"],
  },
  // Aur jobs add kar sakte ho
];

const Jobs = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [activeFilters, setActiveFilters] = useState(["Full Time", "Bangalore"]);

  return (
    <Box bg="#F8FAFC" pb={60}>
      <JobsHero />

      <Container size="xl" py={40}>
        <Grid gutter={30}>
          {/* Filters Sidebar */}
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Filters />
          </Grid.Col>

          {/* Main Content */}
          <Grid.Col span={{ base: 12, md: 9 }}>
            <Stack gap="xl">

              {/* Breadcrumb + Results */}
              <Group justify="space-between">
                <Stack gap={5}>
                  <Title order={3}>All Jobs</Title>
                  <Text c="dimmed">Showing 1-10 of 248 jobs</Text>
                </Stack>

                <Select
                  value={sortBy}
                  onChange={setSortBy}
                  data={[
                    { value: "relevance", label: "Relevance" },
                    { value: "newest", label: "Newest First" },
                    { value: "salary-high", label: "Salary: High to Low" },
                    { value: "salary-low", label: "Salary: Low to High" },
                  ]}
                  w={220}
                />
              </Group>

              {/* Active Filters Chips */}
              {activeFilters.length > 0 && (
                <Group gap="xs">
                  {activeFilters.map((filter, i) => (
                    <Chip key={i} checked onChange={() => {}} variant="outline">
                      {filter} ✕
                    </Chip>
                  ))}
                  <Button variant="subtle" color="red" size="xs">
                    Clear All
                  </Button>
                </Group>
              )}

              {/* Job Listings */}
              <Stack gap="md">
                {sampleJobs.map((job) => (
                  <Cards key={job.id} job={job} />
                ))}
              </Stack>

              {/* Pagination / Load More */}
              <Group justify="center" mt={40}>
                <Button size="md" radius="xl" variant="outline">
                  Previous
                </Button>
                <Button size="md" radius="xl">
                  Load More Jobs
                </Button>
                <Button size="md" radius="xl" variant="outline">
                  Next
                </Button>
              </Group>

            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Jobs;