export const PRODUCT_CATEGORIES = [
  {
    label: 'Trending Now',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Collector picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/bearbricks.png',
      },
      {
        name: 'Ultra Rear Items',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/cards.png',
      },
      {
        name: 'Holy Grail',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/funko-pop.png',
      },
    ],
  },
  {
    label: 'Hot-Selling',
    value: 'icons' as const,
    featured: [
      {
        name: 'Ultra Rare Picks',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/tanjiro.png',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/gandam.png',
      },
      {
        name: 'Bestselling Funko Pop',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/jollibee.png',
      },
    ],
  },
]
