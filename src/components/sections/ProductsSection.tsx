'use client';

import { Container, Stack, Title, SimpleGrid } from '@mantine/core';
import { ProductCard } from '../ui/ProductCard';
import { products } from '@/lib/data';

export function ProductsSection() {
    return (
        <Container size="xl" py={80}>
            <Stack gap="xl">
                <Title order={2} ta="center" size="3rem" c="white" fw={700}>
                    Каталог металлопроката
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            icon={<product.icon size={32} />}
                            title={product.title}
                            description={product.description}
                            specifications={product.specifications}
                            category={product.category}
                            price={product.price}
                            inStock={true}
                            onClick={() => console.log(`Clicked on ${product.title}`)}
                        />
                    ))}
                </SimpleGrid>
            </Stack>
        </Container>
    );
}
