import React from "react"
import Layout from "../../components/Layout"
import PostEntry from "../../components/PostEntry"
import HeaderArchive from "../../components/HeaderArchive"
import SEO from "../../components/SEO"
import { Box } from "@chakra-ui/core"

const SingleTag = props => {
  const {
    pageContext: { name, posts },
  } = props

  return (
    <Layout>
      <SEO
        title={`Tag - ${name}`}
        description={`A collection of posts from the ${name} tag.`}
      />
      <Box maxW="2xl" m="auto">
        <HeaderArchive name={name} />

        {posts.nodes &&
          posts.nodes.map(post => {
            return <PostEntry key={post.id} post={post} />
          })}
      </Box>
    </Layout>
  )
}

export default SingleTag
