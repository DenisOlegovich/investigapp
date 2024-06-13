/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/passengers/mostrans/oplata_proezda',
                destination: '/passengers/mostrans/oplata_proezda/troyka',
                permanent: true,
            },
            {
                source: '/mostrans/for_journs/press_releases',
                destination: '/mostrans/for_journs/press_releases/events',
                permanent: true,
            },
            {
                source: '/mostrans/special_projects/international_summit',
                destination: '/mostrans/special_projects/international_summit/speakers',
                permanent: true,
            },
            {
                source: '/mostrans/world_transport_promotion',
                destination: '/mostrans/world_transport_promotion/digest',
                permanent: true,
            },
            {
                source: '/metro/lyublinsko_dmitrovskaya_line',
                destination: '/metro/lyublinsko_dmitrovskaya_line/phystech',
                permanent: true,
            },
            {
                source: '/transport/marshruty/net_Moscow',
                destination: '/transport/marshruty/net_Moscow/old',
                permanent: true,
            },
        ]
    },
}

module.exports = nextConfig
