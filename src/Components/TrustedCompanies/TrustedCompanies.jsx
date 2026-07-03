import {
  Container,
  Stack,
  Text,
  Title,
  Card,
  SimpleGrid,
  Image,
} from "@mantine/core";

const companies = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  },
  {
    name: "Adobe",
    logo: "data:image/png;base64,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",
  },
  {
    name: "TCS",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIsA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcBBAUCAwj/xABFEAABBAIAAwMJBAUICwAAAAABAAIDBAURBhIhEzFBBxQiUWFxgZGhFTKx0SMzUlNiFiRCgpKywfAXJTVFVWRyc3ST4f/EABoBAQACAwEAAAAAAAAAAAAAAAACAwEEBQb/xAAwEQACAQMBBAgGAwEAAAAAAAAAAQIDBBEhBRITMSJBUXGRobHwFDJhgcHRBkLhI//aAAwDAQACEQMRAD8AvFERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQGsbtcSdmZmB+9a34rY2FAHWhvm5up6nZ8VOKji6rE495YD9FyNm7RqXcpqccY5G3c2vASeeZsIvPMF6XXNQIsbCb6eKAyixzLKAIibQBFjmHh1TYQGUREARY2mwgMosbCbQGUWOYJtAZREQBERAEREAREQBERAUlkOIYqjzFG10sg+8AdNb711oPKuYoI4xhQ4MaG8xt9+h/0KvZAS5z/AF7J+KtGj5MMVZpV7D7t0Olja8gOZobG/wBlcS1t5088I99f0dm28IfFRbzy5/hnvC+U6DIZGCnaxrqome1jZGzc+nE6GxyjorD3pQzEeTjEYu/FdEtqw+Jwcxkrm8ocO46AGyFt8S5UMZJXZKI44/1r96+G1t1bl2tFzrc+r6nlrulaV66jZJpdefeTeyPEdOmeRofPIOhEfcPj+S4kvGtkO9ClEB6i8k/guDi3zZ60+viIe0jjOpbEm2xs/wASSpXFwTVMerFqZzz3mPTR8iCufCrtK46UVur7fk2JW9ladGvq/Py5HOj4+cw/zmg0t8THL1+R/NSPDcR47MczakpErRt0TxpwCj+Q4C5mE0Lp5/VOOh+I7vkvlwpwlkMdmm3rrmMZE1wa1j9l5I16u5bdvO9jNRqrK99hGvT2bUoynSluyXVrr9mTza59/K1qQ05xfJ+y3qV44gy0WFw1nITDmbEzbWk/fd3NHxOgqx4Wzb77rjbsgdcklMxPdzDpsfDXyV2069W3t+JTWr9v8GpZWMriMqn9Y4z9ybTcVTN2W1I9fxPJXmvxpCHBtyq6ME65o3c2vgt2Hhqo6ECyXvkI24h2htaN3gpsjw6rcLB4iVnMQPetOlHaSSlJ5+mhdGWz5dGSx9dSVV7EViFk0LueN7Q5rh4gr2Tpa2Motx9GCpG7mbE3l5j4+sraI2u1HOFk5U8bz3eRAf8ASdU/4ZP/AG2rp0+NadrCXMqa0kcdVzW8jnDbydaA+aiflYDGZioNgDzXu8D6RW35TL/aeYYeq0GRwbK9jfE9zR+J+S6it6U1T3Y/N9ew47ua0HU3pZ3fpzySHB8a1Mv55y1pYn1YTNyucCZGjv19PmuYPKdUP+7LH9tvVcGzWHBnF1Bwd/NnRs7Qk9HNcOV/1Bd8l745DTxzVGwWHsO7u+8pRt6Dny0aytSMrq4UNX0k8PTtJazjen/J5+XdXlDRP2DYS4cznaB/DfyW5wtxRX4i84EML4ZINczXkEkHfX6KIeUOz9qcQUcJVIBa4BwH7x/Tr7m6+a+NLl4R4/FUO5Kk7hG3mP8AQf3H4O/BV/D05Usr5nqu4s+Kqxq4esU0n3lrIiLnHVCIiAIiIAiIgCIiA/N74/RI9YX6Cw4/1RRH/Ls/uhUM5ivrEf7Kpf8Ajs/uhU0obuT1n8klvQp97/B9bk4r1pZidBjC7Z9ioTiLM2Mzd5YnOMHNpjP3h33n2lXNxo57eE8oYz6Xm7uo+qpHCsaMvQ7TozzqIHfiOcLSvKXEqxb6jP8AG6UFSqXDWWuXhkvPhrCw4TD16MDW7a3cjx/Tee8/58NLrhY3pel0kklhHlalSVSbnJ5bC86Ol6Xnm9hWSBVvlryREePxcbtc5NiUDv0OjfqXH4Ku6skkTo54y5jx6TXfTp6xsEfBdfj2+ctxRenj29jHCCEd+2t6dPedn4q0f5E0rnC2PxdtnJYrQANsMHpNefve8E94W/tO2g7GlD+2r8ef4PTbPvI7OjFVFpLn+/M1eD+Oq1+OOnliK9zo1sh6Mk+PgfepxzhUTnOHMhw/PyXGc0JP6OdnVj/yPsP1Xf4S4xnxnJWvPfPR8C47fEPf4ger5epcqlJpbshf7Ip1I8ezeU+r9fotlF84pmSxtkiPMx421w7iF6KuPMvQ4eYzPD9OyIsrYqiYdzXt53NHyOlm7lcFVjgvXJ6rWzND4ZC0Fzx00W9NnwXI8nUcMmLs25WtdkpbD/O3OHp82+gPqHsWcZHHLx9lTZa0yQV421WkbDYyOuvDvP1K2XTgpOOvR96aGkqs5RjLC6Xl3nc+0MNfoyX+1r2K0LSXyFodyADrsa2Fh1zETUPtVzq76zRvtywHWjr39CojlWxxZniiOjpsLsS59gM+72xHTp6yN/X48u4X4bAS03EmhlqTJ6+z9ybTS9vx7/8AJVkbZSxhvXHg+f3K5XTi3lLr8eosDI5PCYyRk2QmrQyyDma5wBe729Bv4r6Ou4izLTc91eWS20ms5zdl4aN9Ont2uHkMZkat2LO4ltay/wAzbHLXn6baOu2uWpJkYclmOD78EZhhkFkBng08oGvmFBUk0mn2+j0wWOs02pLs9VrkmT8jTjueZvnaLPZGbs/Hk9a+Ds7i2Y1uSdcjFNx5WzHuJ3r8VHruneUBxHXlwzuYer0z+a2vJ60O4Nx7XDYPadHa/eOUJU4xgpd3nknGtKU3Dv8ALB0K3FODtWI69fIwvlkdysaN+kfUFuV8tRtXJqdeyySxD+sjHe3rpRfhexDQq8SW5W+jXyE7idddADSj2Au+Y5TDXpa9qKS0+RlyeaEsjlMruZvK7x/JW/DRe9u509eZT8XJKLljX05FkxZajNkJqEdhrrcIBki8QNA/4j5r3FkakxsCKZrvNnFk3hyEd4Kr7IV7LOJM/l6Gzaxk0EgZv9ZGY9Pb8gPktW5dbbwWasV5H+aWcswzOA6iJzQfyCK1Txh9nizLvGs5Xb4LPtk7h4rwc9nzaDIRyS9ejATvQ2dHWj0C2vtrG/Zn2n53H5l39tv0e/X49F7qV6kVeFtSKNsLG/ouQDQGtdPgoWMOf5VuwHaD7LLvtMw9fXy8nu5uulVCFObfNYLZ1KsEs4edP0S/7dx3793/AKX/AJIt/lRVZj2e/Au/6dq8P9KFczofYrvxDh9lU/8AsM+PohVNxBj3Y3L2a8jeVnPzxnwcw92vwXX4d43OJqMpXYJJ4Y/1UkZHMB6uvTp71JQz8p67alKd3QhOlr1+JYOXrNvYy3TdoCeF0fX+IEBUHG1zHMcNBzHAgjr1CmPFflBlv0n08ZBJVjlBEk0pHacp7w0Du96i+Ix123jrFqGrI+vWIY+Ro6D2e3Xj6thZq2M+FxX1Etib1pGUa2ilj39y7sFlI8ti4LcRG3j9I0f0Xa6hdPapbAZu7hpTJVc0tP34nfdd7/UfaptU8oNJ7QLVSeOTx7MhzfxCrxlHKvNkVqVR8NZiTPYUa43zzcNh39lIBcnBZA3xB8XfBcu/5QYRG4Y6lI9/7UxDWj5b39FBrbshnsqDJz2Lc3QNb4D1AeAVtGCcsy5GbXZdVy36yxFGeA8IcpxLAXM3BVImlJ7jr7o+J18irv8A86UTp1IeB+ErVt7O3niZ2sxb0539wG/UN6+ZUcx3lY5n6yOK5Y/268myP6rtfitqpTrXeakFlR0KLnfu6jlTXRWhZVitDZhfDYjZJC8acxw2Cqf4pxDcNmZK8BJhIbJGCerQfD6FTR/lIwnZbhbakk8I+y1+J0oHlcrLmclLcnYGF45WsHUMaOgC1HQkvmWDobGp3FKq95NRfqWL5OrL7HDwjeS4V5nRtJ79dCB8NqVLgcFY6TGYGJkzeWWVxle31E930AXfKrZx7yUZXE3DllnAucL4m3dktmOWGxJrnfBM6Mu9p0Qvpc4bxltlUSRyNkqsEcM8crmysaPDm7z8f8VE6ENOpmAOK6tpmRdb5oLzpHGJ/XbQCDoD2Ed3fruXxsx0peKs6L+LyOQDZI+zFMPPJtvXfK4a30+RW5w55xvPRf5pqcR1IYzuLV+86E1q8P42rj7FCGAiGyHCfbyXSbGjt3es3sDjb2KhxluHmrQhojaXkEco0OvuUQz32ZHxU6PLR2jSixzDHHHz7Yd/wnp08SviPPKnDmHzk8z5G1LnN6UnM4VnnQDiO893zWODPSW9z9SXGhrHd0XoS6/wxjb85kmNlrixsbhHO9oe0dACAvvawONuY2HHzVmCvDoxNYS0xkeII6/FcK1vKcSZSZpd5vjKBiZo9DI9pOx7h0XLqSz36PC+EbYlggtQvksPjeWve1u9NB7x4rChNpZly8tM+hl1KabxDn56pepMcbgsfjRO6s2QyTjUssshe5w95WpR4PxFGeKWs2y0wu52Dzl5bv3b0VoZzh/GYXhvKzYyuYXvr8rnCRxJ0d+JWrwxVpFvPjsVkqd80zy27LX9k52h3bJHed93cnScHNSePfPUy91TjBwXv7fokTuHsc6ndp9m8RXZjNPqQgucSCevh3LZyOGqZGg2lZj/AEDC0sDHFpaW92iOoUM4VhxtTJ1YcvTuVM7t36aeR5bYPXejvR6exWIq6qlCXP39C2ju1It7uDRr4utWt2rcTSJ7fJ2zi4nm5RodPDp6lrUuHMZRq2qteuPN7Ly6SNx2D7B6guuiq35dpdw4dntnBx/CeNx1mOep5w0xEmOM2HljSQR93ftK6Axdf7WOU5T512HYc3Mdcm96171vIkpyk8tiNKEVhIwiyihgmcvNYOpma4its9Jv3JGnTmH2FRK35OZHv/QZFpb6pIzv5gqwUU1JrkbVC9r0FuwloV5T8mEPaNOQyD5GDvjibyb+KnFGhXoVY6tWFkUEY01je4fmttFKdWc1iTIVrmrWfTeSMZXgrF35DLCHVJj1Lofun+r+WlxJfJ5Z3+iyELh/FGR+BVhIoZZfS2ldUliM9PEgNXyduDgbWQby+Iii0fn/APFKcNgcfh2EUoQHu+/I7q53vK6qJllde9uK6xOWh8LNWK1Xkr2I2yRSNLXsd3OB8FAMj5KMc97n4u7NVJ7o5R2rW+7uPzJVjIraNxVo/JLBTTrTpPMHgqyHyW32v9LJ1eX2RH8FKMDwRQxUrJ5nutzs+6ZBprD7G/mpWizUuKlT5mbE7+4nHdctPA86WSsoqDTIrZ4cy2RENfK5mOenHKJCyOsGPk0dgE76LL+HcrDl797G5eKu245rnsdW59co0Ou/aVKEV3Hny6u5FHw8G86572cOthJmZ05SxZjmc+m2vI3suXmcDsu7+4+pfChwz5vw5bws1gSQymQRODNdm13UDW+uj1UkRR4su3s8iXBh2dvmR/B8O/ZeFsUHWBLNYLzLPya2XDXdvwGlrScJc+Jxtdl10N7HD9BbibrR8fR9R6dNqUos8aec5MfD093dxoRuXDZi5jblPJZaGZtiLs28lUN5Dvv7+vuWcdiM5UaIn5qF8DIezjYKgBaeXTTvfh6lI0WHVk1j8IzwY5zr4sjEfD+Ss36VjNZOOyyk/tImRQdnzP13uO/opOiLE5uXMlCmocgiIoEwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA//Z",
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  },
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
];

const TrustedCompanies = () => {
  return (
    <Container size="xl" py={80}>
      <Stack align="center" gap="md">
        <Text c="dimmed" size="lg" ta="center">
          Trusted by the world's best companies
        </Text>

        <Title order={2} ta="center">
          Companies Hiring Now
        </Title>

        <Text c="dimmed" size="md" maw={620} ta="center" mt={8}>
          Join thousands of candidates placed in top tech companies
        </Text>
      </Stack>

      <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing={30} mt={60}>
        {companies.map((company) => (
          <Card
            key={company.name}
            shadow="sm"
            padding="xl"
            radius="md"
            withBorder
            h={160}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              cursor: "pointer",
              backgroundColor: "#fff",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 30px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <Image
              src={company.logo}
              alt={company.name}
              h={60}
              w="auto"
              fit="contain"
              fallbackSrc="https://placehold.co/120x60?text=Logo"
            />

            <Text fw={600} size="md" mt={18} ta="center">
              {company.name}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default TrustedCompanies;