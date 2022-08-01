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
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
