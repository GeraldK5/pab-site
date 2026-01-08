import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import MoreInfo from "@/components/SharedComponent/Volunteer";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Blog | Endeavor",
};

const BlogPage = () => {
    return (
        <>
            <HeroSub
                title="Blog"
            />
            <BlogList />
            <MoreInfo />
        </>
    );
};

export default BlogPage;