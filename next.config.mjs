/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'png.pngtree.com',
            },
            {
                protocol:'https',
                hostname:'media.istockphoto.com'
            },
            {   
                protocol:'https',
                hostname:'wowindia.blog'
            }
        ]
    }
};

export default nextConfig;
