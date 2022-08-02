import Seo from "@/components/common/seo";
import { FeatureWorks, HeroSection, RecentPosts } from "@/components/home";
import MainLayout from "@/components/layout/main";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
  const router = useRouter();
  const goToDetailPage = () => {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  };

  return (
    <Box>
      <Seo
        data={{
          title: "Blog cá nhân",
          description:
            "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
          url: "https://learn-nextjs-2022.vercel.app/",
          thumbnailUrl:
            "https://res.cloudinary.com/dmj3asaf3/image/upload/v1648962369/cld-sample.jpg",
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
