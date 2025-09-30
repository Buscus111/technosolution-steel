'use client';

import {
    Paper,
    Stack,
    Title,
    Text,
    ThemeIcon,
    List,
    Anchor,
    Badge,
    Group,
    Button,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { ReactNode } from 'react';

interface ProductCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    specifications: string[];
    category?: string;
    price?: string;
    inStock?: boolean;
    onClick?: () => void;
}

export function ProductCard({
    icon,
    title,
    description,
    specifications,
    category,
    price,
    inStock = true,
    onClick,
}: ProductCardProps) {
    return (
        <Paper
            p="xl"
            radius="xl"
            style={{
                background: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: onClick ? 'pointer' : 'default',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
            className="hover:bg-[rgba(0,0,0,0.6)] hover:border-[rgba(255,255,255,0.2)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02]"
            onClick={onClick}
        >
            <Stack gap="md" style={{ height: '100%', justifyContent: 'space-between' }}>
                {/* Upper content */}
                <Stack gap="md">
                    {/* Header */}
                    <Group justify="space-between" align="flex-start">
                        <ThemeIcon
                            size={60}
                            variant="gradient"
                            gradient={{ from: 'gray.7', to: 'gray.5' }}
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                backdropFilter: 'blur(10px)',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}
                        >
                            {icon}
                        </ThemeIcon>
                        {category && (
                            <Badge
                                variant="light"
                                color="gray"
                                size="sm"
                                style={{
                                    background: 'rgba(255,255,255,0.1)',
                                    color: 'rgba(255,255,255,0.8)',
                                    backdropFilter: 'blur(10px)'
                                }}
                            >
                                {category}
                            </Badge>
                        )}
                    </Group>

                    {/* Title and Description */}
                    <Title order={4} c="white" fw={600}>
                        {title}
                    </Title>

                    <Text size="sm" c="gray.4" lh={1.5}>
                        {description}
                    </Text>

                    {/* Specifications */}
                    <List spacing="xs" size="sm" c="gray.5">
                        {specifications.map((spec, i) => (
                            <List.Item key={i}>{spec}</List.Item>
                        ))}
                    </List>
                </Stack>

                {/* Bottom section: Price/Stock + Button */}
                <Stack gap="md">
                    {/* Price and Stock */}
                    {(price || inStock !== undefined) && (
                        <Group justify="space-between" align="center">
                            {price && (
                                <Text c="white" fw={600} size="lg">
                                    {price}
                                </Text>
                            )}
                            {inStock !== undefined && (
                                <Badge
                                    color={inStock ? 'green' : 'orange'}
                                    variant="light"
                                    size="sm"
                                    style={{
                                        background: inStock ? 'rgba(64, 192, 87, 0.2)' : 'rgba(253, 126, 20, 0.2)',
                                        color: inStock ? 'rgba(64, 192, 87, 1)' : 'rgba(253, 126, 20, 1)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    {inStock ? 'В наличии' : 'Под заказ'}
                                </Badge>
                            )}
                        </Group>
                    )}

                    {/* Action */}
                    {onClick ? (
                        <Button
                            variant="subtle"
                            color="gray"
                            rightSection={<IconChevronRight size={16} />}
                            fullWidth
                            style={{
                                background: 'rgba(255,255,255,0.1)',
                                color: 'rgba(255,255,255,0.8)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            Подробнее
                        </Button>
                    ) : (
                        <Anchor
                            c="gray.3"
                            td="none"
                            fw={500}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                justifyContent: 'center',
                                transition: 'color 0.2s ease',
                            }}
                            className="hover:text-white"
                        >
                            Подробнее <IconChevronRight size={16} />
                        </Anchor>
                    )}
                </Stack>
            </Stack>
        </Paper >
    );
}
