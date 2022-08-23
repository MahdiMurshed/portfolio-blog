import React from "react";
import ArticleCard from "../card/BaseCard";
import { Grid } from "@mantine/core";
import { mockBaseCardProps } from "../card/BaseCard.mocks";

const Article = () => {
  return (
    <Grid grow gutter="xl">
      <ArticleCard {...mockBaseCardProps.base} />
    </Grid>
  );
};

export default Article;
